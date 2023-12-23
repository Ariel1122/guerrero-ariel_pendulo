let t = 0; // Tiempo inicial
let dt = 0.01; // Incremento de tiempo

let pendulos = []; // Array para almacenar los objetos Pendulo
let pendulos2 = []; // Array para almacenar los objetos Pendulo2

function setup() {
  createCanvas(900, 900);

  // Punto de origen común
  let x = width / 2;
  let y = 0;
  // Longitudes específicas para cada péndulo
  let long = [
    565, 550, 535, 520, 505, 490, 475, 460, 445, 430, 415, 400, 385, 370, 355,
    340, 325, 310, 295, 280, 265, 250, 235, 220, 205, 190, 175, 160, 145, 130,
  ];
  //NOTAS: La longuitud de los pendulos tambien se modifico a favor de tener un efecto visual mas interesante.

  // Crear el primer grupo de péndulos
  for (let i = 0; i < 30; i++) {
    let velocidad = map(i, 0, 2, 1.39, 1.45);
    //NOTA: Se intento mapear las velocidades entre los rangos que se establecieron en el boceto, pero al hacer teniamos como resultado un movimiento muy acelerado, por que opto por modificar esos valores a pos de tener un movimiento mas organico.
    let longitud = long[i];
    let angulo = 1.39;
    let col = lerpColor(color(0, 0, 0), color(255, 0, 0), i / 5);

    pendulos[i] = new Pendulo(x, y, longitud, angulo, velocidad, col);
  }

  // Crear el segundo grupo de péndulos opuestos
  for (let i = 0; i < 30; i++) {
    let velocidad = map(i, 0, 2, 1.45, 1.51);
    let longitud = long[i];
    let angulo = -1.39;
    let col = lerpColor(color(0, 245, 58), color(199, 255, 0), i / 5); // Cambiar el color

    pendulos2[i] = new Pendulo(x, y, longitud, angulo, velocidad, col);
  }
}

function draw() {
  background(255);

  // Actualizar y mostrar cada péndulo en el primer grupo
  for (let i = 0; i < pendulos.length; i++) {
    pendulos[i].update();
    pendulos[i].display();
  }

  // Actualizar y mostrar cada péndulo en el segundo grupo opuesto
  for (let i = 0; i < pendulos2.length; i++) {
    pendulos2[i].update();
    pendulos2[i].display();
  }

  t += dt; // Incrementar el tiempo
}
