
// Ejercicio Práctico - Clases y Objetos

// 1️⃣ CLASE ALUMNO 
class Alumno {
  // Aquí recibo los datos y los guardo en el objeto
  constructor(nombre, edad, carrera, email) {
    this.nombre = nombre;
    this.edad = edad;
    this.carrera = carrera;
    this.email = email; // añadí el gmail del alumno
  }

  mostrarInfo() {
    console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}, Carrera: ${this.carrera}, Email: ${this.email}`);
  } //console.log para mostrar la info en la consola web
}

const estudiante = new Alumno("Francisco", 24, "Ingeniería", "francis@gmail.com");
estudiante.mostrarInfo();

// 2️⃣ CLASE BANDA MUSICAL
class BandaMusical { // agregué país y cambio la variable disco a albums
  constructor(nombre, genero, integrantes, discos, pais) {
    this.nombre = nombre;
    this.genero = genero;
    this.integrantes = integrantes;
    this.albums = discos; // se guarda en variable "albums"
    this.pais = pais; // país de origen
  }

  mostrarInfo() {
    console.log(`Banda: ${this.nombre}, Género: ${this.genero}, Integrantes: ${this.integrantes}, Pais: ${this.pais}`);
  }
  //Aqu;i abajo se ve en consolas sus discos/albums
  listarAlbums() {
    console.log("Albums publicados:", this.albums.join(", "));
  }
}
// aquí creamos al objeto usando los datos que pide el constructor
// es como llenar el formulario con la info de la banda para tenerla guardada
const bts = new BandaMusical(
  "BTS",
  "K-pop / Hip hop",
  ["Dark & Wild", "Wings", "Love Yourself: Tear", "Map of the Soul: 7", "BE"],
  "Corea del Sur" // el pais va solito pq es aparte de los albums
);

bts.mostrarInfo();
bts.listarAlbums();

// 3️⃣ CLASE PERRITO (me di la libertad de cambiarlo a gatita, como la mía 🐈)
class Gatita {
  constructor(nombre, color, esDramatico, objetoEnemigo) {
    this.nombre = nombre;
    this.color = color;
    this.esDramatico = esDramatico; // true si es dramática
    this.objetoEnemigo = objetoEnemigo; // agrego a su archi-enemigo
    // Atributos: son los datos (características) del gatito
    // Métodos: son las acciones (funciones) que el gatito hace
  }

  mostrarInfo() {
    console.log(`Gatito: ${this.nombre} | Color: ${this.color} | Enemigo público: ${this.objetoEnemigo}`);
  }
  // Método para ver su reacción al ver a su enemigo
  enfrentarEnemigo() {
    if (this.esDramatico) {
      console.log(`❌¡Alerta! ${this.nombre} vio a su ${this.objetoEnemigo} y empezó a maullar dramáticamente y correr rapido alrededor de ella.`);
    } else {
      console.log(`${this.nombre} simplemente ignora a su ${this.objetoEnemigo}, ya esta acostumbrada.`);
    }
  }
}
// Creamos al objeto que es la gata
const miGata = new Gatita("Pintita", "Calica", true, "Abuela");
miGata.mostrarInfo();
miGata.enfrentarEnemigo();