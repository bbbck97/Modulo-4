**INSTRUCIONES PROFE POR WSP**
Este ejercicio lo deben subir resuelto a Ejercicio Práctico - Clases y Objetos en el M4

recuerden: Deben subir un TXT con el link a su repositorio de github.

1. Inicializa Git en tu carpeta
git init

2. Vincula tu carpeta local con tu repositorio vacío de GitHub
# (Reemplaza el link por el de TU repositorio de GitHub)
git remote add origin https://github.com/TU_USUARIO/TU_REPOSITORIO.git

3. Asegúrate de estar en la rama principal
git branch -M main

4. Selecciona todos los archivos que modificaste
git add .

5. Guarda el estado actual con un mensaje descriptivo
git commit -m "Terminado el desafío del festival y corregidos los bugs"

6. Sube tus cambios a la rama principal (main)
git push -u origin main

recuerden que también pueden realizar muchos de estos pasos desde VSCode (visualmente desde la UI)


**INSTRUCIONES DE LA PÁGINA**
Descripción de la tarea
Deberás desarrollar las siguientes actividades:

Clase Alumno

Define una clase que modele a un alumno de una institución educacional.

Incluye atributos como nombre, edad, carrera, entre otros.

Agrega un método que muestre ordenadamente todos sus atributos.

👉 Comando guía

class Alumno {
  constructor(nombre, edad, carrera) {
    this.nombre = nombre;
    this.edad = edad;
    this.carrera = carrera;
  }

  mostrarInfo() {
    console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}, Carrera: ${this.carrera}`);
  }
}
Clase Banda Musical

Define una clase que represente a una banda musical.

Incluye atributos como nombre, genero, integrantes y discos.

Agrega un método para mostrar todos los atributos y otro para listar solo los discos publicados.

Instancia un objeto de la clase con los datos de tu banda favorita.

👉 Comando guía

class BandaMusical {
  constructor(nombre, genero, integrantes, discos) {
    this.nombre = nombre;
    this.genero = genero;
    this.integrantes = integrantes;
    this.discos = discos; // Array
  }

  mostrarInfo() {
    console.log(`Banda: ${this.nombre}, Género: ${this.genero}, Integrantes: ${this.integrantes}`);
  }

  listarDiscos() {
    console.log("Discos:", this.discos.join(", "));
  }
}
Clase Perro

Define una clase que modele a un perro.

Incluye atributos como nombre, raza, edad, etc.

Agrega un método para mostrar todos sus atributos y otro para “ladrar”.

Instancia un objeto de la clase con los datos de tu perro o de un perro famoso (ejemplo: el perro Lipigas).

👉 Comando guía

class Perro {
  constructor(nombre, raza, edad) {
    this.nombre = nombre;
    this.raza = raza;
    this.edad = edad;
  }

  mostrarInfo() {
    console.log(`Nombre: ${this.nombre}, Raza: ${this.raza}, Edad: ${this.edad}`);
  }

  ladrar() {
    console.log("¡Guau guau!");
  }
}