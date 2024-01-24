let body = document.getElementById("tabla-alumnos");
//Elementos del modal GET Alumno:
let modalNombre = document.getElementById("nombre-alumno");
let modalApellido = document.getElementById("apellido-alumno");
let modalPromedio = document.getElementById("promedio-alumno");
let modalId = document.getElementById("id-alumno");
//Elementos del modal POST/PUT Alumno:
let modalTitle = document.getElementById("staticBackdropLabel");

let inputId = document.getElementById("id");
let inputNombre = document.getElementById("nombre");
let inputApellido = document.getElementById("apellido");
let inputPromedio = document.getElementById("promedio");


window.addEventListener("load", () => {
	cargarTabla();
});

function cargarTabla(){
	fetch("http://localhost:8080/alumnos")
		.then((response) => response.json())
		.then((json) => {

			for (let alumno of json) {
				//Defino el tr:
				let tr = document.createElement("tr");
				tr.classList.add("text-center");
				//Defino las columnas de cada fila:
				let tdId = document.createElement("td");
				let tdNombre = document.createElement("td");
				let tdApellido = document.createElement("td");
				let tdPromedio = document.createElement("td");
				let tdAcciones = document.createElement("td");
				//Defino el contenido de cada columna:
				let id = document.createTextNode(alumno.id);
				let nombre = document.createTextNode(alumno.nombre);
				let apellido = document.createTextNode(alumno.apellido);
				let promedio = document.createTextNode(alumno.promedio);
				tdAcciones.innerHTML = `<button onclick="verAlumno(${alumno.id})" type="button" class="btn btn-primary m-2" data-bs-toggle="modal" data-bs-target="#getModal"> Ver Alumno </button>
									<button onclick="verModal(${alumno.id})" type="button" class="btn btn-warning m-2" data-bs-toggle="modal" data-bs-target="#staticBackdrop"> Modificar Alumno </button>
									<button onclick="eliminarAlumno(${alumno.id})" type="button" class="btn btn-danger m-2" > Eliminar Alumno </button>`
				//Enlazo cada columna con su contenido:
				tdId.appendChild(id);
				tdNombre.appendChild(nombre);
				tdApellido.appendChild(apellido);
				tdPromedio.appendChild(promedio);
				//Enlazo cada columna al tr
				tr.appendChild(tdId);
				tr.appendChild(tdNombre);
				tr.appendChild(tdApellido);
				tr.appendChild(tdPromedio);
				tr.appendChild(tdAcciones);
				//Enlazo el tr con el table-body:
				body.appendChild(tr);

			}
		})
		.catch(() => console.error("Error al conectar con la API"));
}

function verAlumno(id) {
	fetch(`http://localhost:8080/alumnos/${id}`)
		.then((response) => response.json())
		.then((json) => {
			modalNombre.innerText = json.nombre;
			modalApellido.innerText = json.apellido;
			modalPromedio.innerText = json.promedio;
			modalId.innerText = json.id;
		})
		.catch(() => console.error("Error al conectar con la API"));
}

function verModal(id = 0) {

	if (id != 0) { //Si recibe un ID carga los datos del alumno.
		modalTitle.innerText = "Modificar alumno";
	
		fetch(`http://localhost:8080/alumnos/${id}`)
			.then((response) => response.json())
			.then((json) => {
				inputId.value = json.id;
				inputNombre.value = json.nombre;
				inputApellido.value = json.apellido;
				inputPromedio.value = json.promedio;
			})
			.catch(() => console.error("Error al conectar con la API"));
	} else {
		modalTitle.innerText = "Agregar alumno";
		
		inputId.value = "";
		inputNombre.value = "";
		inputApellido.value = "";
		inputPromedio.value = "";
	}

}

function enviarForm() {

	let alumno = {
		"id": inputId.value,
		"nombre": inputNombre.value,
		"apellido": inputApellido.value,
		"promedio": inputPromedio.value,
	}

	if (inputId.value == 0) {
		crearAlumno(alumno);
	} else {
		editarAlumno(alumno);
	}

}

function crearAlumno(alumno) {

	const bodyHttp = {
		method: 'POST',
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(alumno)
	};

	fetch(`http://localhost:8080/alumnos`, bodyHttp)
		.then((response) => response.json())
		.then((json) => {
			window.location.reload();
		})
		.catch(() => console.error("Error al conectar con la API"));

}

function editarAlumno(alumno) {

	const bodyHttp = {
		method: 'PUT',
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(alumno)
	};

	fetch(`http://localhost:8080/alumnos/${inputId.value}`, bodyHttp)
		.then((response) => response.json())
		.then((json) => {
			window.location.reload();
		})
		.catch(() => console.error("Error al conectar con la API"));

}

function eliminarAlumno(id) {

	Swal.fire({
		title: "Estás seguro que deseas eliminar el alumno?",
		text: "El alumno se eliminará de forma permanente!",
		icon: "warning",
		showCancelButton: true,
		confirmButtonColor: "#3085d6",
		cancelButtonColor: "#d33",
		confirmButtonText: "Eliminar"
	}).then((result) => {
		if (result.isConfirmed) {
			
		const bodyHttp = {
		method: 'DELETE',
		headers: {
			"Content-Type": "application/json"
		},
		
		};
			
		fetch(`http://localhost:8080/alumnos/${id}`, bodyHttp)
		.then((response) => response.json())
		.then((json) => {
			window.location.reload();
		})
		.catch(() => console.error("Error al conectar con la API"));
			
		}
	});

}