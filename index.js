// let nombre=prompt("¿Cuál es tu nombre?")
// let apellido=prompt("¿Cuál es tu nombre de familia?")


// console.log(nombre + " "+ apellido);
// alert("Bienvenido " + nombre +" "+ apellido);

//  function nacimiento(anio, edad) {
//      let fecha= anio - edad
//      return fecha  
// } 

//  let edadActual= parseInt(prompt("¿Cuántos años tenés?"));
//  let anioActual= 2021;
//  let anioNacimiento= nacimiento(anioActual, edadActual)
//  console.log(anioNacimiento)

//  if (anioNacimiento > 2003){
//     alert("No vendemos a menores de edad, volvé con un adulto.")
// }

// let telefono= prompt("Ingrese un número de teléfono")
// console.log(telefono)



//  sessionStorage.setItem("Nombre", nombre);
//  sessionStorage.setItem("Apellido", apellido);
//  sessionStorage.setItem("Telefono", telefono);



// let presentacion = document.getElementById("nombreDom")
// function presentar(){
//     presentacion.innerText = nombre + " " + apellido
// }
// presentar();
 








//PASTAS DE JORGE

 class Pastas{
     constructor(tipo, relleno, cantidad, precio){

         this.tipo= tipo;
         this.relleno= relleno;
         this.cantidad= cantidad;
         this.precio= precio;
         this.encargado= false;
         this.abonado= false;

    }
    
    mediaDocena(){
         this.precio= this.precio/2;
         this.cantidad= this.cantidad/2;
         console.log( this.tipo + this.relleno +" "+ this.cantidad/2 +" " + this.precio/2 + " encargado.")
    }
     pedido(){
        this.encargado= true;
         console.log( this.tipo +" "+ this.relleno+ " " + this.cantidad + " encargado")
    }

    pagado(){
         this.abonado= true;
         console.log (this.tipo + this.relleno + " abonado.")
    }
}


const productos= [];

productos.push(new Pastas ("Sorrentinos", "Jamón y Muzarella", 12, 600));
productos.push(new Pastas ("Sorrentinos", "Calabacín asado, Muzarella, y Nueces", 12, 750));
productos.push(new Pastas ("Sorrentinos", "Berenjenas ahumadas y Hongos", 12, 850));


for (const pastas of productos){
    console.log(pastas.tipo +" "+ pastas.relleno +" "+ pastas.precio);
    
};

function compare (a, b){
    if (a.relleno < b.relleno){
        return -1;
    }
    return 0;
}

console.log(productos.sort(compare));

//BOTONES CARRITO

agregarCarro= document.getElementById("botonCompra1")
agregarCarro.onclick = () => {alert("¿Querés agregar este producto al carrito?");
console.log("Producto 1 agregado al carro")}; //Después ver bien cómo asociar productos a botones.

agregarCarro2= document.getElementById("botonCompra2")
agregarCarro2.onclick = () => {alert("¿Querés agregar este producto al carrito?");
console.log("Producto 2 agregado al carro")}; //Después ver bien cómo acumular más de un producto.

agregarCarro3= document.getElementById("botonCompra3")
agregarCarro3.onclick = () => {alert("¿Querés agregar este producto al carrito?");
console.log("Producto 3 agregado al carro")}; 

agregarCarro4= document.getElementById("botonCompra4")
agregarCarro4.onclick = () => {alert("¿Querés agregar este producto al carrito?");
console.log("Producto 4 agregado al carro")}; 

agregarCarro5= document.getElementById("botonCompra5")
agregarCarro5.onclick = () => {alert("¿Querés agregar este producto al carrito?");
console.log("Producto 5 agregado al carro")}; 

agregarCarro6= document.getElementById("botonCompra6")
agregarCarro6.onclick = () => {alert("¿Querés agregar este producto al carrito?");
console.log("Producto 6 agregado al carro")}; 

let carro= document.getElementById("carrito");
carro.onclick= () => alert("El carro está vacío");
carro.onmouseover= () => console.log("El carro es este aunque tiene forma de cesta")