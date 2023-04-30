
/*
//Crear un objeto

var objeto={
propiedad1:" String",
propiedad2: 123,
propiedad1: false,


metodo: function(){


  alert("este mensaje sale del objeto")
}

};

function Auto(marca, modelo) {
  this.marca = marca;
  this.modelo = modelo;

  this.encender = function(){
    
 console.log(`${marca} encendido`);
  }

  
  }



 

//llamar a un metodo del objeto
objeto.metodo();


var persona1 = Object.assign({},objeto);
persona1.colorFavorito = "verde";

var auto = new Auto("marca", "modelo");

auto.encender();

console.log(objeto)
console.log(persona1) */

let btnAlternativa = document.getElementById("btn-verUnaAlternativa");
btnAlternativa.addEventListener("click", function() {
  console.log("El botón Ver una alternativa ha sido presionado");
    cambiar();



});

function cambiar() {
  var imagen = document.getElementById("imgcompra");
  let valorElement = document.getElementById("valor");
  let modeloElement = document.getElementById("modelo");
  let marcaElement = document.getElementById("marca");

  var productos = {
    "polera1": {
      "marca": "Soviet",
      "modelo": "Polera mujer",
      "precio": 19990,
      "imagen": "https://www.soviet.cl/263705-large_default/polera-mujer-soviet.jpg"
    },
    "polera2": {
      "marca": "Soviet",
      "modelo": "Polera mujer",
      "precio": 21990,
      "imagen": "https://www.soviet.cl/264685-large_default/polera-mujer-soviet.jpg"
    },
    "polera3": {
      "marca": "Soviet",
      "modelo": "Polera mujer",
      "precio": 23990,
      "imagen": "https://www.soviet.cl/264705-large_default/polera-mujer-soviet.jpg"
    }
  };

  // Generar un número aleatorio entre 0 y la longitud del objeto de productos
  var randomIndex = Math.floor(Math.random() * Object.keys(productos).length);
  var producto = productos["polera" + (randomIndex + 1)];

  imagen.src = producto.imagen;
  marcaElement.textContent = producto.marca;
  modeloElement.textContent = producto.modelo;
  valorElement.textContent = "$" + producto.precio;
}

