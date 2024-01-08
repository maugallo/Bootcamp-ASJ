-- ¿Qué cantidad de pedidos hizo cada cliente?
SELECT COUNT(orders.id) AS 'Cantidad de pedidos', CONCAT(clients.name, ' ', clients.last_name) as 'Cliente'
FROM clients
INNER JOIN orders
ON clients.id = orders.id_client
GROUP BY CONCAT(clients.name, ' ', clients.last_name)

-- ¿Qué cantidad de cada producto se alquiló o se compró?
SELECT SUM(order_details.cant) AS Cantidad, products.title as Titulo -- En este caso sumamos las cantidades de cada producto que estuvo en una venta/alquiler.
FROM products
INNER JOIN order_details
ON products.id = order_details.id_product
GROUP BY products.title

-- Top 5 géneros más solicitados.
SELECT TOP (5) COUNT(genders.id) AS Cantidad, genders.gender as Genero -- Cuenta la cantidad de veces que aparece genders.id en la consulta, y lo devuelve como cantidad.
FROM genders
INNER JOIN products
ON genders.id = products.id_gender
INNER JOIN order_details
ON products.id = order_details.id_product
GROUP BY genders.gender
ORDER BY Cantidad DESC

-- Empleados (legajo, nombre, apellido) que trabajaron entre el 12 y 15 de enero de 2024. Ordenado por fecha Z-A y legajo A-Z.
SELECT employees.legajo, employees.name, employees.last_name
FROM employees
INNER JOIN orders
ON employees.id = orders.id_employee
WHERE orders.date BETWEEN '2024-01-12' AND '2024-01-15'
GROUP BY employees.legajo, employees.name, employees.last_name, orders.date -- Agrupamos para que, si los empleados trabajaron más de una vez en esas fechas, solo aparezcan una vez en la tabla.
ORDER BY orders.date DESC, employees.legajo ASC

-- Métodos de pago utilizados por los socios, siempre que sea más de 2 veces.
SELECT COUNT(orders.id_payment_method) AS 'Veces utilizado', p.payment_method AS 'Método de pago'
FROM clients
INNER JOIN orders
ON clients.id = orders.id_client
INNER JOIN payment_methods p
ON orders.id_payment_method = p.id
WHERE clients.is_partner = 1
GROUP BY p.payment_method
HAVING COUNT(p.id) > 2