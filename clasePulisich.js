
//DATOS DEL CLIENTE: Tomamos y guardamos los datos del cliente.

alert("Bienvenido a Jorge Landa: servicio de Catering y Productos Artesanales ")
let nombre=prompt("Por favor, ingrese su nombre")
let apellido=prompt("Ahora ingrese su apellido.")
let telefono= prompt("Ingrese un número de teléfono")
let domicilio= prompt("Por favor ingrese su domicilio.")

function nacimiento(anio, edad) {
    let fecha= anio - edad
    return fecha  
} 

let edadActual= parseInt(prompt("Verifique su edad."));
let anioActual= 2021;
let anioNacimiento= nacimiento(anioActual, edadActual)
console.log(anioNacimiento)

sessionStorage.setItem("Nombre", nombre);
sessionStorage.setItem("Apellido", apellido);
sessionStorage.setItem("Telefono", telefono);
sessionStorage.setItem("Domicilio", domicilio);


if (anioNacimiento > 2003){
   alert("No vendemos a menores de edad, volvé con un adulto.")
}

console.log(nombre + " "+ apellido+ " " + telefono +" " + domicilio);
alert("Bienvenido " + nombre +" "+ apellido);

 
//COMBO DE LA SEMANA: Acá pongo los combos de la semana.

class Combo{
    constructor(idCombo,principal, guarnicion, bebida, postre, precio) {
     
       this.idCombo= idCombo;
       this.principal= principal;
       this.guarnicion= guarnicion;
       this.bebida= bebida;
       this.postre= postre;
       this.precio= precio;
       this.encargado= false;
       this.abonado= false;

    }
    pedido(){
        this.encargado= true;
         console.log( this.idCombo+ " : " +this.principal +" con "+ this.guarnicion+ " postre " + this.postre + " y "+ this.bebida + " encargado")
    }

    pagado(){
         this.abonado= true;
         console.log( this.idCombo + " abonado");

    }
}

const combos= [];

combos.push(new Combo("Combo 1", "Pollo agridulce", "Papas al pesto", "Eleccion", "Flan", 600));
combos.push(new Combo("Combo 2", "Fillet de merluza", "Ensalada", "Eleccion", "Almendrado", 600));
combos.push(new Combo("Combo 3", "Ensalada Cesar", "Bastones de mozarella", "Eleccion", "Brownie", 600));
combos.push(new Combo("Combo 4", "Consteletas de cerdo", "Papas Fritas", "Eleccion", "Helado", 600));

for (const combo of combos){
    console.log(combo.idCombo+" "+ combo.principal, + " "+ combo.bebida + " " + combo.postre + " "+ combo.precio);
}

//PASTAS: Faltan un par, Jorge tiene un catálogo amplio.

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

function ordenar(a, b){
  ;  return a - b
}

productos.sort(function(a, b){return a - b});



// ENVASADOS AL VACÍO: Todavía no tengo la info pero sería similar a la anterior en términos de estructura.

//PEDIDOS: Acá iría una formula que registra todos los datos de los pedidos y las agrega al canasto, además de los medios de pago.

let catalogo= parseInt(prompt("Ingrese el número que desea ver: 1-Combos de la semana, 2-Pastas, 3-Servicio de Catering, 4-Envasados al vacío, ESC-SALIR"));

while(catalogo != ESC){
  
    switch(catalogo){
        case 1: for (const combo of combos){
            alert(combo.idCombo+" "+ combo.principal, + " "+ combo.bebida + " " + combo.postre + " "+ combo.precio);
            break
        }
        case 2: for (const pastas of productos){
            alert(pastas.tipo +" "+ pastas.relleno +" "+ pastas.precio);
            break
            
        }
        case 3: 
            alert("Todavía no está disponible");
            break;
        
        case 4:
            alert("Todavía no está disponible");
            break;
        default:
            alert("Por favor revisá las instrucciones de nuevo");   
    } catalogo= parseInt(prompt("Ingrese el número que desea ver: 1-Combos de la semana, 2-Pastas, 3-Servicio de Catering, 4-Envasados al vacío, ESC-SALIR"));
}