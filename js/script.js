function mostrarParte2() {
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;

    if (nombre && email) {
        document.getElementById("parte1").style.display = "none";
        document.getElementById("parte2").style.display = "block";
        
    } else {
        alert("Name and email input should be required.");
    }
}

function mostrarParte3() {
    var opcionesElegidas = [];
    var opcion1 = document.getElementById("opcion1").checked;
    var opcion2 = document.getElementById("opcion2").checked;
    var opcion3 = document.getElementById("opcion3").checked;

    if (opcion1 || opcion2 || opcion3) {
        document.getElementById("resumenNombre").textContent = document.getElementById("nombre").value;
        document.getElementById("resumenEmail").textContent = document.getElementById("email").value;

        if (opcion1) {
            opcionesElegidas.push("Software Development");
        }
        if (opcion2) {
            opcionesElegidas.push("User Experience");
        }
        if (opcion3) {
            opcionesElegidas.push("Graphic Design");
        }
        console.log(document.getElementById("resumenOpciones"));
        document.getElementById("resumenOpciones").textContent = opcionesElegidas.join(" , ");

        document.getElementById("parte2").style.display = "none";
        document.getElementById("parte3").style.display = "block";
    } else {
        alert("Please, select at least one topic.");
    }
}

function regresarParte2() {
    document.getElementById("parte3").style.display = "none";
    document.getElementById("parte2").style.display = "block";
}

function enviarFormulario() {
    alert(" Success' message.");
}