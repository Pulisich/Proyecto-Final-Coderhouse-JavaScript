
//Array con todos los productos 
const productos= [
    {   
        id:1,
        tipo: "Sorrentinos",
        relleno: "Jamón y Muzarella",
        caja: 15,
        precio: 400,
        foto: "https://recetasdetito.com.ar/wp-content/uploads/2020/01/sorrentinos-750x500.jpg"

    },

    {
        id:2,
        tipo: "Sorrentinos",
        relleno: "Calabacín asado, Muzarella, y Nueces",
        caja:15,
        precio:450,
        foto: "https://recetasdetito.com.ar/wp-content/uploads/2020/01/sorrentinos-750x500.jpg",
    },


    {
        id:3,
        tipo: "Sorrentinos",
        relleno: "Calabacín asado, Muzarella, y Nueces",
        caja:15,
        precio:450,
        foto: "https://recetasdetito.com.ar/wp-content/uploads/2020/01/sorrentinos-750x500.jpg",
    },

    {
        id:4,
        tipo: "Sorrentinos",
        relleno: "Berenjenas ahumadas y hongos",
        caja:15,
        precio:470,
        foto: "https://recetasdetito.com.ar/wp-content/uploads/2020/01/sorrentinos-750x500.jpg",
    },

    {
        id:5,
        tipo: "Sorrentinos",
        relleno: "Salmón y coso",
        caja:15,
        precio:550,
        foto: "https://recetasdetito.com.ar/wp-content/uploads/2020/01/sorrentinos-750x500.jpg",
    },

    {
        id:6,
        tipo: "Sorrentinos",
        relleno: "Carne y Ricota",
        caja:15,
        precio:390,
        foto: "https://recetasdetito.com.ar/wp-content/uploads/2020/01/sorrentinos-750x500.jpg",
    },

];

//Ordenado array por precio, las cards se crean en base a este array, copado.

function compare (a, b){
    if (a.precio < b.precio){
        return -1;
    }
    return 0;
 }

 console.log(productos.sort(compare));

//Crando cards de los productos con JQuery 
for (const producto of productos) {
     $(".ulistaProd").append(`<li class="list-group-item"><h3> ${producto.tipo}</li>
     <li class="list-group-item"><h2>  Relleno: ${producto.relleno}</h2></li>
     <div> <img src= ${producto.foto} width: "55" height: "auto"></div>
     <li class="list-group-item"><p> Cantidad por caja: ${producto.caja}</p></li>
     <li class="list-group-item"><b> Precio: $${producto.precio}</b></li>
     <button type="button" id="agregar"> Agregar al carro </button> `); //Quiero que éste botón me agregue los productos

}

let agregarCarro=document.getElementById("agregar")//Agarro el botón y lo meto en una variable

agregarCarro.onclick= () =>{
    
    
 //Cuando hago click ésto debería cargarme toda la info del producto elegido dentro del div que puse para los productos del carrito
    
 //...PERO NO LO HACE...
    
     document.createElement(
         `<div>
         <li class="list-group-item">${producto.tipo}</li>
         <li class="list-group-item">Relleno: ${producto.relleno}</li>
         <li class="list-group-item">$${producto.precio}</li>
         </div>`        
     );
    
     console.log("Item agregado");
    
     agregarCarro.getElementById("dentro").appendChild(agregarCarro);


}



//BOTONES CARRITO



let carrito= document.getElementById("carrito");
let carroVisible = false;//estado inicial del carro
carrito.onclick= () =>{
    //muestra el div oculto que sería el carrito. 
    muestraOculto("carro", carroVisible )
    carroVisible = !carroVisible;//si era false, se pasa a true y viceversa
    
};

function muestraOculto(nombre, visibilidad){
    let elemento = document.getElementById(nombre)
    if (visibilidad== false){
        if(elemento.classList.contains("oculto")){
            elemento.classList.remove("oculto");    
        }
        elemento.className += "visible"//me agrega el visible a la clase y aparece
    }else {
        if(elemento.classList.contains("visible")){
            elemento.classList.remove("visible")
        }
        elemento.className+= "oculto"//me agrega el oculto a la clase y desaparece
    }
}




//Agregamos los productos al carro

// (function(){

//     const agregarItem = document.querySelectorAll(".agregarCarro"); //Query selector me agarra todos los items con esto porque los items van a tener el mismo boton
    
//     agregarItem.forEach(function(itemAdd){
//         itemAdd.addEventListener("click", function(event){

//         console.log(event.target)    
//      })
    
//     })

// })

//Borramos los productos del carro


 let limpiarCarro = document.getElementById("quitarItem")//Después ponerle el removeChild para que saque los productos.
 
 limpiarCarro.onclick=()=>{
    
    let items= document.getElementById("dentro")
    limpiarCarro.parentNode.removeChild(items)
 
    console.log ("Carro limpio")
 
}



  // productos.push(new Pastas ("Sorrentinos", "Jamón y Muzarella", 15, 400));
// productos.push(new Pastas ("Sorrentinos", "Calabacín asado, Muzarella, y Nueces", 15, 450));
// productos.push(new Pastas ("Sorrentinos", "Berenjenas ahumadas y Hongos", 15, 470));
// productos.push(new Pastas ("Sorrentinos", "Salmón y coso", 15, 550))
// productos.push(new Pastas ("Sorrentinos", "Carne y Ricota", 15, 390));

// for (const pastas of productos){
//    console.log(pastas.tipo +" "+ pastas.relleno +" "+ pastas.precio);
   
// };

