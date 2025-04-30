let carrito = [
    {
      img: "./images/homebase.jpg",
      nombre: "Home base",
      precio: 129,
      tamaño: "M",
      cantidad: 1
    },
    {
      img: "./images/homecontroller.jpg",
      nombre: "Home Controller",
      precio: 49,
      tamaño: "42",
      cantidad: 2
    },
    {
      img: "./images/headphones.jpg",
      nombre: "headphones ",
      precio: 89,
      tamaño: "L",
      cantidad: 1
    },
    {
      img: "./images/pixel.png",
      nombre: "Pixel 13",
      precio: 35,
      tamaño: "XL",
      cantidad: 3
    },
    {
      img: "./images/iphone.jpg",
      nombre: "iphone 14",
      precio: 15,
      tamaño: "42",
      cantidad: 2
    }
  ];
  
  function renderizarCarrito() {
    let tbody = document.getElementById("carrito-body");
    let totalElemento = document.getElementById("total-carrito");
    tbody.innerHTML = ""; // Limpiar contenido de la tabla
    let total = 0;
  
    carrito.forEach((producto, index) => {
      let fila = document.createElement("tr");
      fila.classList.add("align-middle", "rounded", "border", "pb-3");
  
      fila.innerHTML = `
        <td><img src="${producto.img}" alt="${producto.nombre}" width="60" height="60"></td>
        <td>
          <ul class="list-unstyled mb-0">
            <li class="table-name">${producto.nombre}</li> 
            <li class="color-celda">Size: ${producto.tamaño}</li> 
          </ul>
        </td>
        <td class="align-middle color-celda">$${producto.precio}</td>
        <td class="align-middle color-celda color-celda--bold">${producto.tamaño}</td>
        <td class="align-middle">
          <input type="number" value="${producto.cantidad}" min="1" class="form-control cantidad-input" style="width: 60px; height: 30px; font-size: 0.85rem;" data-index="${index}">
        </td>
        <td class="align-middle color-celda">$${producto.precio * producto.cantidad}</td>
        <td class="align-middle color-celda text-end">
          <i class="bi bi-share"></i>
          <button class="btn eliminar-btn" data-index="${index}"><i>X</i></button>
        </td>
      `;
      tbody.appendChild(fila);
      total += producto.precio * producto.cantidad;
    });
  
    totalElemento.innerText = `$${total}`;
  }
  
  document.getElementById("carrito-body").addEventListener("input", function(event) {
    if (event.target && event.target.matches(".cantidad-input")) {
      let index = event.target.dataset.index;
      let cantidad = parseInt(event.target.value);
  
      if (cantidad >= 1) {
        carrito[index].cantidad = cantidad; 
        renderizarCarrito();
      }
    }
  });
  
  document.getElementById("carrito-body").addEventListener("click", function(event) {
    if (event.target.matches(".eliminar-btn")) {
      let index = event.target.dataset.index;
      carrito.splice(index, 1);
      
      renderizarCarrito();
    }
  });
  
  renderizarCarrito();
  