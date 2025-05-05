var productos = [
    { id: 1, nombre: "Balon de Futbol", categoria: "futbol" },
    { id: 2, nombre: "Balon de Baloncesto", categoria: "baloncesto" }
];

var contenedor = document.getElementById("productos");
var select = document.getElementById("category-select");

function mostrarProductos(categoria){
    contenedor.innerHTML = " ";
    
    var productosFiltrados;
    if(categoria == "todos"){
        productosFiltrados = productos;

    }else{
        productosFiltrados = [];
        for(var i = 0; i < productos.length; i++){
            if (productos[i].categoria === categoria){
                productosFiltrados.push(productos[i]);
            }
        }
    }
}
for (var j = 0; j < productosFiltrados.length; j++) {
    var p = productosFiltrados[j];

    // Creamos un nuevo div para cada producto
    var div = document.createElement("div");
    div.className = "col-md-4";

    // Le ponemos el contenido HTML a ese div
    div.innerHTML =
      '<div class="card">' +
        '<div class="card-body">' +
          '<h5 class="card-title">' + p.nombre + '</h5>' +
          '<p class="card-text">Categoría: ' + p.categoria + '</p>' +
          '<button class="btn btn-primary" onclick="agregarAlCarrito(\'' + p.nombre + '\')">' +
            'Agregar al carrito' +
          '</button>' +
        '</div>' +
      '</div>';

    // Agregamos el div al contenedor principal
    contenedor.appendChild(div);
  }
}

// Esta función muestra un mensaje cuando agregamos un producto
function agregarAlCarrito(nombreProducto) {
  alert("Producto agregado: " + nombreProducto);
}

// Cuando cambiamos la categoría en el menú, mostramos los productos correspondientes
select.addEventListener("change", function() {
  var categoriaSeleccionada = select.value;
  mostrarProductos(categoriaSeleccionada);
});

// Al principio, mostramos todos los productos
mostrarProductos("todos");
