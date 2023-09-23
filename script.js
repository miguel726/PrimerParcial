let ordenes = [];

function agregarOrden() {
    const cedula = document.getElementById("cedula").value;
    const producto = document.getElementById("productos").value;
    const cantidad = parseInt(document.getElementById("cantidad").value);

    if (!cedula || cantidad <= 0) {
        alert("Por favor, completa todos los campos y verifica la cantidad.");
        return;
    }

    let precio = 0;
    switch (producto) {
        case "mote":
            precio = 10000;
            break;
        case "bebidas":
            precio = 5000;
            break;
        case "guarniciones":
            precio = 6000;
            break;
    }

    const total = precio * cantidad;
    const npedido = Math.floor(Math.random() * 9000) + 1000;
    const pedido = {
        numero: npedido,
        cedula: cedula,
        producto: producto,
        cantidad: cantidad,
        total: total
    };

    ordenes.push(pedido);
    mostrarOrdenes(); 
    limpiarFormulario();
}

function mostrarOrdenes() {
    const listadoOrdenes = document.getElementById("listado-ordenes"); 
    listadoOrdenes.innerHTML = "";

    for (const orden of ordenes) { 
        const ordenInfo = document.createElement("div"); 
        ordenInfo.className = "listado-ordenes"; 
        ordenInfo.innerHTML = `<p>Número de Pedido: ${orden.numero}</p>
                                <p>Cédula del Cliente: ${orden.cedula}</p>
                                <p>Producto: ${orden.producto}</p>
                                <p>Cantidad: ${orden.cantidad}</p>
                                <p>Total: ${orden.total} pesos</p>
                                <button type="button" onclick="eliminarOrden(${orden.numero})">Eliminar</button>`; 

        listadoOrdenes.appendChild(ordenInfo);
    }
}

function eliminarOrden(numeroPedido) { 
    const index = ordenes.findIndex(orden => orden.numero === numeroPedido); 

    if (index !== -1) {
        ordenes.splice(index, 1);
        mostrarOrdenes(); 
    }
}

function mostrarOrdenesCliente() { 
    const cedulaCliente = document.getElementById("cedula-lista").value;
    const listadoOrdenesCliente = document.getElementById("listado-cliente"); 
    
    // Filtrar pedidos por cliente
    const ordenesCliente = ordenes.filter(orden => orden.cedula === cedulaCliente); 

    if (ordenesCliente.length === 0) {
        listadoOrdenesCliente.innerHTML = "No se encontraron órdenes para este cliente."; 
        return;
    }

    listadoOrdenesCliente.innerHTML = "";

    for (const orden of ordenesCliente) {
        const ordenInfo = document.createElement("div");
        ordenInfo.className = "listado-ordenes";
        ordenInfo.innerHTML = `<p>Número de Pedido: ${orden.numero}</p>
                                <p>Cédula del Cliente: ${orden.cedula}</p>
                                <p>Producto: ${orden.producto}</p>
                                <p>Cantidad: ${orden.cantidad}</p>
                                <p>Total: ${orden.total} pesos</p>`;

        listadoOrdenesCliente.appendChild(ordenInfo);
    }
}

function mostrarOrdenesOrdenadas() {
    const listadoOrdenesOrdenadas = document.getElementById("listado-ordenes-ordenadas"); 

    // Ordenar todas las órdenes por valor final (de mayor a menor)
    const ordenesOrdenadas = [...ordenes].sort((a, b) => b.total - a.total);

    listadoOrdenesOrdenadas.innerHTML = "";

    for (const orden of ordenesOrdenadas) { 
        const ordenInfo = document.createElement("div"); 
        ordenInfo.className = "listado-ordenes";
        ordenInfo.innerHTML = `<p>Número de Pedido: ${orden.numero}</p>
                                <p>Cédula del Cliente: ${orden.cedula}</p>
                                <p>Producto: ${orden.producto}</p>
                                <p>Cantidad: ${orden.cantidad}</p>
                                <p>Total: ${orden.total} pesos</p>`;
        listadoOrdenesOrdenadas.appendChild(ordenInfo);
    }
}

function limpiarFormulario() {
    document.getElementById("cedula").value = "";
    document.getElementById("productos").value = "mote";
    document.getElementById("cantidad").value = "";
}
