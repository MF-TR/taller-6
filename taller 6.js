const prompt = require("prompt-sync")()
let clientes = []
function validarCorreo(correo){
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)
}
    function agregarCliente(){
        let nombre = prompt("Ingrese su nombre: ").trim()
        if (! nombre || !isNaN (nombre)){
            console.log("⚠️ Error: El nombre debe ser un texto")
            return;
        }
        let edad = parseInt(prompt("Ingrese la edad del cliente: "));
        if (isNaN(edad) || edad <= 0) {
            console.log("⚠️ Edad inválida. Debe ser un número positivo.");
            return;
        }
     let correo = prompt("Ingrese el correo del cliente: ").trim();
        if (!validarCorreo(correo)) {
        console.log("⚠️ Correo inválido. Ingrese un formato correcto.");
        return;
    }
    clientes.push({ nombre, edad, correo });
    console.log(`✅ Cliente "${nombre}" agregado correctamente.`);
    
    }
    function eliminarCliente(){
        let nombre = prompt("Ingrese el nombre del cliente a eliminar: ").trim();
        let indice = clientes.findIndex(cliente => cliente.nombre.toLowerCase() === nombre.toLowerCase());
    
        if (indice !== -1) {
            clientes.splice(indice, 1);
            console.log(`🗑 Cliente "${nombre}" eliminado correctamente.`);
        } else {
            console.log("⚠️ Cliente no encontrado.");
        }
    }
    function buscarCliente() {
        let nombre = prompt("Ingrese el nombre del cliente a buscar: ").trim();
        let cliente = clientes.find(cliente => cliente.nombre.toLowerCase() === nombre.toLowerCase());
    
        if (cliente) {
            console.log(`🔍 Cliente encontrado: Nombre: ${cliente.nombre}, Edad: ${cliente.edad}, Correo: ${cliente.correo}`);
        } else {
            console.log("⚠️ Cliente no encontrado.");
        }
    } 
    function mostrarClientesOrdenados() {
        if (clientes.length === 0) {
            console.log("⚠️ No hay clientes registrados.");
            return;
        }
    
        let clientesOrdenados = [...clientes].sort((a, b) => a.nombre.localeCompare(b.nombre));
        console.log("📋 Lista de clientes ordenados:");
        clientesOrdenados.forEach(cliente => console.log(`- ${cliente.nombre}, ${cliente.edad} años, ${cliente.correo}`));
    }
    function calcularEdadPromedio() {
        if (clientes.length === 0) {
            console.log(" No hay clientes registrados.");
            return;
        }
        let sumaEdades = clientes.reduce((total, cliente) => total + cliente.edad, 0);
        let promedio = sumaEdades / clientes.length;
        console.log(` La edad promedio de los clientes es: ${promedio.toFixed(2)} años.`);
    }
    function menu() {
        let opcion;
        do {
            console.log("\n===== Menú de Gestión de Clientes =====");
            console.log("1️⃣ Agregar cliente");
            console.log("2️⃣ Eliminar cliente");
            console.log("3️⃣ Buscar cliente");
            console.log("4️⃣ Mostrar clientes ordenados");
            console.log("5️⃣ Calcular edad promedio");
            console.log("6️⃣ Salir");
    
            opcion = prompt("Seleccione una opción: ");
    
            switch (opcion) {
                case "1":
                    agregarCliente();
                    break;
                case "2":
                    eliminarCliente();
                    break;
                case "3":
                    buscarCliente();
                    break;
                case "4":
                    mostrarClientesOrdenados();
                    break;
                case "5":
                    calcularEdadPromedio();
                    break;
                case "6":
                    console.log("👋 Saliendo del sistema...");
                    break;
                default:
                    console.log("⚠️ Opción no válida. Intente nuevamente.");
            }
        } while (opcion !== "6");
    }
    
    menu(); 