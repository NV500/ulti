let models = [];

function addModel() {
    const modelName = document.getElementById('modelName').value;
    const brand = document.getElementById('brand').value;
    const year = document.getElementById('year').value;
    const price = document.getElementById('price').value;
    const releaseDate = document.getElementById('releaseDate').value;

    if (modelName && brand && year && price && releaseDate) {
        const newModel = {
            modelName: modelName,
            brand: brand,
            year: year,
            price: price,
            releaseDate: releaseDate
        };

        models.push(newModel);
        displayModels();
        clearForm();
    } else {
        alert('Por favor, complete todos los campos.');
    }
}

function displayModels() {
    const carList = document.getElementById('carList');
    carList.innerHTML = '';

    models.forEach((model, index) => {
        const modelItem = document.createElement('div');
        modelItem.classList.add('model-item');
        modelItem.innerHTML = `
            <strong>${model.modelName}</strong> (${model.brand})
            <p>Año: ${model.year}</p>
            <p>Precio: $${model.price}</p>
            <p>Lanzamiento: ${model.releaseDate}</p>
            <button onclick="editModel(${index})">Editar</button>
            <button onclick="deleteModel(${index})">Eliminar</button>
        `;
        carList.appendChild(modelItem);
    });
}

function editModel(index) {
    // Obtén el modelo actual para prellenar el formulario de edición
    const currentModel = models[index];

    // Llena el formulario con los datos actuales del modelo
    document.getElementById('modelName').value = currentModel.modelName;
    document.getElementById('brand').value = currentModel.brand;
    document.getElementById('year').value = currentModel.year;
    document.getElementById('price').value = currentModel.price;
    document.getElementById('releaseDate').value = currentModel.releaseDate;

    // Elimina el modelo actual de la lista para evitar duplicados al editar
    models.splice(index, 1);

    // Muestra la lista actualizada
    displayModels();
}

function deleteModel(index) {
    models.splice(index, 1);
    displayModels();
}

function clearForm() {
    document.getElementById('carForm').reset();
}

// Llamar a displayModels() al cargar la página para mostrar la lista inicial
document.addEventListener('DOMContentLoaded', displayModels);
