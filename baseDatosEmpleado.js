let empleados=Array(
    {
        id:1,
        nombre:"Jefer Lobo",
        cargo:"asesor",
        telefono:"3254658978",
        correo:"Jefer@gmail.com",
        salario:2500000,
        contactoEmergencia:"3256459812",
        foto:"./img/hE4.jpg"

    },
    {
        id:2,
        nombre:"Frachesca arteaga",
        cargo:"Acesora comercial",
        telefono:"3021356489",
        correo:"franchesca@gmail.com",
        salario:1800000,
        contactoEmergencia:"35264301258",
        foto:"./img/mE2.jpg"

    },
    {
        id:3,
        nombre:"luis gallego",
        cargo:"Acesor",
        telefono:"3032568754",
        correo:"luis@gmail.com",
        salario:2200000,
        contactoEmergencia:"3526435812",
        foto:"./img/hE6.jpg"

    },
    {
        id:4,
        nombre:"Cristian Marquez",
        cargo:"Acesor comercial",
        telefono:"3524652130",
        correo:"Cristian@gmail.com",
        salario:1800000,
        contactoEmergencia:"3032305462",
        foto:"./img/hE9.jpg"

    },
    {
        id:5,
        nombre:"Edgar Garcia",
        cargo:"Lider asesorias",
        telefono:"3225469123",
        correo:"Edgar@gmail.com",
        salario:3000000,
        contactoEmergencia:"3035216458",
        foto:"./img/1he.jpg"

    },
    {
        id:6,
        nombre:"Eduardo Diaz",
        cargo:"manayer senior",
        telefono:"3263546982",
        correo:"Eduardo@gmail.com",
        salario:3000000,
        contactoEmergencia:"3526458297",
        foto:"./img/2he.jpg"

    },
    {
        id:7,
        nombre:"Gabriela Sarria",
        cargo:"Comanayer",
        telefono:"324589725",
        correo:"Gabriela@gmail.com",
        salario:3500000,
        contactoEmergencia:"30456287545",
        foto:"./img/mE3.jpg"

    },
    {
        id:8,
        nombre:"Maria Sanchez",
        cargo:"oficios varios",
        telefono:"365325640",
        correo:"Maria@gmail.com",
        salario:1350000,
        contactoEmergencia:"3025163585",
        foto:"./img/mE7.jpg"

    },
    {
        id:9,
        nombre:"Carlos Gonsalez",
        cargo:"oficios varios",
        telefono:"3225648585",
        correo:"carlos@gmail.com",
        salario:1350000,
        contactoEmergencia:"3086542564",
        foto:"./img/3he.jpg"

    },
    {
        id:10,
        nombre:"Emilia Garcia",
        cargo:"Secretaria",
        telefono:"3098542312",
        correo:"Garcia@gmail.com",
        salario:2000000,
        contactoEmergencia:"3652545890",
        foto:"./img/mE10.jpg"

    },
    {
        id:11,
        nombre:"Ana Gallego",
        cargo:"Lider oficios varios",
        telefono:"3456523020",
        correo:"Ana@gmail.com",
        salario:2000000,
        contactoEmergencia:"3502136545",
        foto:"./img/mE11.jpg"

    },
    {
        id:12,
        nombre:"Ana Lucia",
        cargo:"Directora de bodega",
        telefono:"3098515232",
        correo:"lucia@gmail.com",
        salario:2800000,
        contactoEmergencia:"3243562121",
        foto:"./img/1me.jpg"

    },
    {
        id:13,
        nombre:"Antonio Garcia",
        cargo:"Director administracion",
        telefono:"3031255263",
        correo:"Antonio@gmail.com",
        salario:2800000,
        contactoEmergencia:"3003652525",
        foto:"./img/4he.jpg"

    },
    {
        id:14,
        nombre:"Cesar Serrada",
        cargo:"Administrador",
        telefono:"3003215648",
        correo:"Cesar@gmail.com",
        salario:3100000,
        contactoEmergencia:"3225635858",
        foto:"./img/5he.jpg"

    },
    {
        id:15,
        nombre:"Gabriel Salgado",
        cargo:"Administrador",
        telefono:"3256542320",
        correo:"Gabriel@gmail.com",
        salario:3100000,
        contactoEmergencia:"3022020365",
        foto:"./img/6he.jpg"

    },
    {
        id:16,
        nombre:"luis gallego gonsalez",
        cargo:"contador",
        telefono:"3021320025",
        correo:"luisgallego@gmail.com",
        salario:3200000,
        contactoEmergencia:"3225426352",
        foto:"./img/7he.jpg"

    },
    {
        id:17,
        nombre:"Jose Miguel Arteaga",
        cargo:"financiero",
        telefono:"32365645896",
        correo:"JoseMiguel@gmail.com",
        salario:3250000,
        contactoEmergencia:"3250213656",
        foto:"./img/8he.jpg"

    },
    {
        id:18,
        nombre:"Russely Ortega",
        cargo:"Lider Contadora",
        telefono:"3095623030",
        correo:"Russely@gmail.com",
        salario:3500000,
        contactoEmergencia:"3045061010",
        foto:"./img/2me.jpg"

    },
    {
        id:19,
        nombre:"Russibe Capea",
        cargo:"Gerente",
        telefono:"3132564565",
        correo:"RussibeCapea@gmail.com",
        salario:4500000,
        contactoEmergencia:"3302525630",
        foto:"./img/3me.jpg"

    },
    {
        id:20,
        nombre:"Rusbeli Zuleima Ortega Gomez",
        cargo:"Jefe Empresaria",
        telefono:"3135620203",
        correo:"rusbeliO10@gmail.com",
        salario:9500000,
        contactoEmergencia:"3145236598",
        foto:"./img/4me.jpg"

    },
)

// creaando una referencia al contenedor de empleados
let contenedor=document.getElementById("contenedor")

// pasos para crear una lista dinamica de elementos 
// 1. debo recorer la base de datos del problema:
empleados.forEach(function(empleado){
    console.log(empleado)
    let columna=document.createElement("div")
    columna.classList.add("col")

    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card","shadow")

    let foto=document.createElement("img")
    foto.classList.add("img-fluid","mx-auto","d-block")
    foto.src=empleado.foto

    let nombre=document.createElement("h3")
    nombre.textContent=empleado.nombre

    let cargo=document.createElement("h3")
    cargo.textContent=empleado.cargo

    let telefono=document.createElement("h3")
    telefono.textContent=empleado.telefono

    let correo=document.createElement("h3")
    correo.textContent=empleado.correo

    let salario=document.createElement("h3")
    salario.textContent=empleado.salario 

    // se asocian las estructuras en orden logico
    tarjeta.appendChild(foto)
    tarjeta.appendChild(nombre)
    tarjeta.appendChild(cargo)
    tarjeta.appendChild(telefono)
    tarjeta.appendChild(correo)
    tarjeta.appendChild(salario)
    columna.appendChild(tarjeta)
    contenedor.appendChild(columna)
})