/*
1 - Listar todos los artitas por Discografica, ordenados por el nombre del artista
2 - Que Discográfica NO tiene artistas?
3 - Listar el numero de canciones por artista en orden descendiente
4 - Que artista grabó el mayor numero de canciones?
5 - Por cada artista y cada album, cuantas canciones tienen menos de 5 minutos de duracion?
6 - En relación con la consulta anterior, muestra también las canciones y su duración
7 - Qué artistas grabaron canciones mas largas que 5 minutos, y cuántas canciones fueron?
8 - En que año se grabaron la mayoría de las canciones?
9 - Mostrar el ranking de los 5 artistas, album, cancion y año con las canciones más largas
10 - Duración total de todas las canciones grabadas por cada artista en orden descendente
11 - Que artistas y album no tienen canciones de menos de 5 minutos?
12 - Mostrar el top 3 de artistas con el promedio de duración de las canciones, en orden descendente con la canción mas larga primero
13 - Qué artistas no lanzaron un album durante la decada de 1980 y 1990?
14 - Duración total del album Sgt. Pepper's de los Beatles (mostrar en minutos y segundos)
*/


----1----
select a.nombre as Artista, d.nombre as Discográfica
from artista a
join discografica d on a.discografica_id = d.id
order by a.nombre asc
----2----
select d.nombre As Discográfica
from discografica d
full outer join artista a on a.discografica_id = d.id
where a.discografica_id is null
----3----
select count(c.id) as 'Numero de canciones', a.nombre as Artista
from artista a
join album al on al.artista_id = a.id
join canciones c on c.album_id = al.id
group by a.nombre
order by a.nombre desc
----4----
select top 1 a.nombre as Artista
from artista a
join album al on al.artista_id = a.id
join canciones c on c.album_id = al.id
group by a.nombre
order by count(c.id) desc
----5----
SELECT a.nombre as Artista, al.nombre AS Álbum, COUNT(c.id) AS Canciones
FROM artista a
JOIN album al
ON a.id = al.artista_id
JOIN canciones c
ON c.album_id = al.id
where c.duracion < 5
GROUP BY a.nombre, al.nombre
----6----
SELECT a.nombre as Artista, al.nombre AS Álbum, c.nombre AS Canciones, c.duracion as Duración
FROM artista a
JOIN album al
ON a.id = al.artista_id
JOIN canciones c
ON c.album_id = al.id
where c.duracion < 5
----7----
SELECT a.nombre as Artista, COUNT(c.id) AS Canciones
FROM artista a
JOIN album al
ON a.id = al.artista_id
JOIN canciones c
ON c.album_id = al.id
where c.duracion > 5
GROUP BY a.nombre
----8----
select al.anio as Año
from canciones c
join album al on al.id=c.album_id
group by al.anio
having count(c.id) = (
select count(c.id) 'Cantidad de canciones grabadas'
from canciones c
join album al on al.id=c.album_id
group by al.anio)
----9----
select top 5 a.nombre as 'Artista', al.nombre as 'Album', c.nombre as 'Cancion', al.anio as 'Año'
from artista a
join album al on a.id = al.artista_id
join canciones c on c.album_id = al.id
order by c.duracion desc
----10----
select sum(c.duracion) as 'Duracion total', a.nombre
from canciones c
join album al on c.album_id = al.id
join artista a on a.id = al.artista_id
group by a.nombre
order by sum(c.duracion) desc
----11----
select al.nombre, a.nombre
from artista a
join album al on al.artista_id = a.id
left join canciones c on c.album_id = al.id and c.duracion < 5
group by a.nombre, al.nombre
having count(c.id) = 0


select distinct al.nombre, a.nombre
from artista a
join album al on al.artista_id = a.id
join canciones c on c.album_id = al.id
where al.id NOT IN (SELECT al.id FROM album al JOIN canciones c ON al.id = c.album_id WHERE c.duracion < 5)
order by al.nombre ASC
----12----
SELECT a.nombre, AVG(c.duracion) AS duracion
FROM artista a
JOIN album al ON al.artista_id = a.id
JOIN canciones c ON c.album_id = al.id
GROUP BY a.nombre
ORDER BY duracion DESC;
----13----

select distinct a.nombre as Artista
from artista a
join album al on al.artista_id = a.id
join canciones c on c.album_id = al.id
where a.id NOT IN (SELECT a.id
FROM album al 
JOIN canciones c ON al.id = c.album_id 
join artista a on a.id = al.artista_id
WHERE al.anio <= 1990 and al.anio >= 1980)
order by a.nombre ASC

----14----
select 
	floor(sum(c.duracion)) as Minutos, 
	cast((sum(c.duracion)- floor(sum(c.duracion))) * 60 as int) as Segundos
from artista a
join album al on al.artista_id = a.id
join canciones c on c.album_id = al.id
where al.nombre = 'Sgt. Pepper''s Lonely Hearts Club Band'