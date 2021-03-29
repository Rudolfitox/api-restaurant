# "Servicio rest"

## Instalacion

# Tener instalado postgresql, node js, visual studio code y un cliente http(postman o insomnia client rest) para poder realizar las pruebas tipo request rest http  

# 1- Descargar el proyecto del repositorio github

# 2- Ejecutar desde la linea de comandos posicionado desde proyecto el comando 
# npm install para instalar las dependencias del proyecto

# 3- Abrir el SQL Shell (psql) se solicitara Server,Database,Port,Username Contraseña(La contraseña sera aquella asignada durante su instalación de postgresql) una vez ingresados se deja la linea de comando hasta ese punto

# 3- Una vez abierto el proyecto desde el visual studio code tomar el archivo db.sql
# copiar todo el archivo tal cual y pegarlo en la SQL Shell (psql)

# 4- Ejecutar desde la terminal de visual studio code el comado npm run dev para poner en marcha el proyecto 

# 5- Abrir su cliente rest http

# RESENIAS 

# Crear reseñas.
# POST y cuerpo json para enviar en cliente http

#  {
	"comments":"Tortas buenas buenas",
	"rating":5.5,
	"email":"tortas@gmail.com",
	"restaurantes":[{"id":1},{"id":2}]
 }

 # Actualizar reseñas y cuerpo json para enviar en cliente http
 # Enviar el id en endpoint para poder actualizar

 # {
	"comments":"Tortas de la esquina",
	"rating":5.5,
	"email":"tortasRegistro@gmail.com",
	"restaurantes":[{"id":1},{"id":2}]
}

# Crear categorias 
# POST y cuerpo json para enviar en cliente http

{
	"name":"Italiana"
}

 # Actualizar categorias y cuerpo json para enviar en cliente http
 # Enviar el id en endpoint para poder actualizar

{
	"name":"Italiana"
}

# Crear restaurantes.
# POST y cuerpo json para enviar en cliente http
{
	"name":"Tortas del paseo",
	"description":"Descripcion test",
	"logo":"logo test",
	"rating":4.4,
	"categorias":[{"id":1},{"id":2}]
}

 # Actualizar restaurantes y cuerpo json para enviar en cliente http
 # Enviar el id en endpoint para poder actualizar

{
	"name":"Tortas del paseo",
	"description":"Descripcion test",
	"logo":"logo test",
	"rating":4.4,
	"categorias":[{"id":1},{"id":2}]
}


# Endpoints Categorías

# Crear una categoría POST
http://localhost:3000/api/categorias

# Cuerpo json para crear
{
	"name":"Italiana"
}

# Obtener categorías GET
http://localhost:3000/api/categorias

# Obtener (get) y borrar una categoría (delete)
http://localhost:3000/api/categorias/1

# Actualizar una categoria (update)
http://localhost:3000/api/categorias/1

# Cuerpo json para actualizar
{
	"name":"Italiana"
}


# Endpoints para restaurantes

# Crear una categoría POST
http://localhost:3000/api/restaurants

# Cuerpo json para crear restaurantes 

{
	"name":"Tortas del paseo",
	"description":"Descripcion test",
	"logo":"logo test",
	"rating":4.4,
	"categorias":[{"id":1},{"id":2}]
}

# Obtener los restaurantes GET
http://localhost:3000/api/restaurants

# Obtener (get) un restaurante y eliminar (delete) 
http://localhost:3000/api/restaurants/3


# Crear una resenia POST
http://localhost:3000/api/resenias

# Cuerpo json para una reseña
{
	"comments":"Tortas buenas buenas",
	"rating":5.5,
	"email":"tortas@gmail.com",
	"restaurantes":[{"id":1},{"id":2}]
}

# Obtener reseñas 
http://localhost:3000/api/resenias

# Obtener(GET) una reseña y borrar(DELETE) una reseña
http://localhost:3000/api/resenias/3

# Actualizar(PUT) una reseña
http://localhost:3000/api/resenias/3

# Cuerpo json para actualizar 
{
	"comments":"Tortas de la esquina",
	"rating":5.5,
	"email":"tortasRegistro@gmail.com",
	"restaurantes":[{"id":1},{"id":2}]
}

