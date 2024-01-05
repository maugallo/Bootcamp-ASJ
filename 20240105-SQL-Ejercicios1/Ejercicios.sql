-- Ordenar clientes por apellido y nombre, mostrando su apellido, nombre, email y dirección.
SELECT Clientes.apellido, Clientes.nombre, Clientes.email, Direcciones.calle + ' ' + CAST(Direcciones.num AS varchar) AS 'Dirección'
FROM Clientes
INNER JOIN Direcciones
ON Clientes.id_direccion = Direcciones.id
ORDER BY apellido ASC, nombre ASC

-- Mostrar pedidos entre dos fechas determinadas.
SELECT *
FROM Pedidos
WHERE fecha BETWEEN '2023-01-01' AND '2024-01-01'



-- Mostrar la cantidad de clientes socios que viven en Buenos Aires.
SELECT COUNT(Clientes.id) AS 'Cantidad clientes'
FROM Clientes
INNER JOIN Localidades
ON Clientes.id_localidad = Localidades.id
INNER JOIN Provincias
ON Localidades.id_provincia = Provincias.id
WHERE Clientes.es_socio = 1 	AND Provincias.nombre = 'Madrid'

-- Mostrar la cantidad de películas que tengo en mis productos.
SELECT COUNT(Productos.id) AS 'Cantidad películas'
FROM Productos
INNER JOIN Categorias
ON Productos.id_categoria = Categorias.id
WHERE Categorias.categoria = 'Películas'

-- Mostrar cuantos productos pidieron los clientes que no son socios.
SELECT SUM(Detalles_Pedidos.cantidad) AS 'Cantidad de productos'
FROM Clientes
INNER JOIN Pedidos
ON Clientes.id = Pedidos.id_cliente
INNER JOIN Detalles_Pedidos
ON Pedidos.id = Detalles_Pedidos.id_pedido
WHERE Clientes.es_socio = 1

-- Calcular el promedio de recaudación de la sucursal 1.
SELECT CEILING(AVG(Pagos.monto)) AS 'Promedio de venta'
FROM Pagos
INNER JOIN Empleados
ON Pagos.id_empleado = Empleados.id
INNER JOIN Sucursales
ON Empleados.id_sucursal = Sucursales.id
WHERE Sucursales.id = 1

-- Calcular el promedio de alquiler de las series.
SELECT AVG(Detalles_Pedidos.precio * Detalles_Pedidos.cantidad) AS 'Promedio'
FROM Detalles_Pedidos
INNER JOIN Productos
ON Detalles_Pedidos.id_producto = Productos.id
INNER JOIN Categorias
ON Productos.id_categoria = Categorias.id
INNER JOIN Pedidos
ON Detalles_Pedidos.id_pedido = Pedidos.id
WHERE Categorias.categoria = 'Literatura'
AND Pedidos.tipo = 'Alquiler'

--