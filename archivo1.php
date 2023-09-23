<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8"> 
    <title>Sabores del Sinu</title>
    <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
    <h1>Sabores del Sinu</h1>
    <!-- menu principal -->
    <h2>MENU</h2>
        <p>Platos .............................. Precio</p>
        <p>Mote de queso .............. $10.000</p>
        <p>Bebidas .......................... $ 5.000</p>
        <p>Guarniciones ................. $ 6.000</p>

    <!-- Formulario de creacion de pedido -->
    <form>
        <!-- cedula -->
        <label for="cedula">Cedula del Cliente:</label><input type="text" id="cedula" required>
        <!-- productos -->
        <label for="productos">Productos:</label>
        <select id="productos" required>
            <option value="mote">Mote de Queso</option>
            <option value="bebidas">Bebidas</option>
            <option value="guarniciones">Guarniciones</option>
        </select>
        <!-- cantidad -->
        <label for="cantidad">Cantidad:</label><input type="number" id="cantidad" min="1" required>
        <!-- Enviar -->
        <button type="button" onclick="agregarOrden()">Agregar Orden</button>
    </form>

    <!-- Listado de Pedidos -->
    <h2>Listado de Pedidos:</h2>
    <div id="listado-ordenes"></div>

    <!-- Listado de Pedidos del Cliente -->
    <h2>Listado de Pedidos del Cliente</h2>
    <label for="cedula-lista">Cedula del Cliente:</label>
    <input type="text" id="cedula-lista" required>
    <button type="button" onclick="mostrarOrdenesCliente()">Listar Pedidos</button>
    <div id="listado-cliente"></div>

    <!-- Listado de Pedidos Ordenados por Valor -->
    <h2>Listado de Pedidos Ordenados por Valor</h2>
    <button type="button" onclick="mostrarOrdenesOrdenadas()">Listar Pedidos Ordenados</button>
    <div id="listado-ordenes-ordenadas"></div>
    <script src="script.js"></script>
</body>
</html>
