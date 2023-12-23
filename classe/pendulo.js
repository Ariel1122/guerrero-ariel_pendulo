class Pendulo {
  constructor(x, y, l, da, velocidad, col) {
    // Definir el punto de origen común y la longitud del péndulo
    this.origin = createVector(x, y);
    this.length = l;
    this.dAngular = da; // Desplazamiento angular
    this.velocidad = velocidad; // Velocidad angular
    this.color = col; // Nuevo parámetro para el color
  }

  update() {
    this.angle = (Math.PI / 4) * cos(this.dAngular * t * this.velocidad); // Calcular el ángulo en función del tiempo y la velocidad
    //Math.PI-obtener el valor de la constante pi (π) calculan un ángulo que se utiliza para simular el movimiento de un péndulo
  }

  // Mostrar el péndulo en la pantalla
  display() {
    let x = this.length * sin(this.angle); //relación entre el lado opuesto, la coordenada X del extremo del péndulo y la hipotenusa que la longitud del péndulo).
    let y = this.length * cos(this.angle); //proporciona la relación entre el lado adyacente, la coordenada Y del extremo del péndulo y la hipotenusa que es la longitud del péndulo.
    let position = createVector(x, y);
    position.add(this.origin);

    stroke(0, 70);
    strokeWeight(2);
    line(this.origin.x, this.origin.y, position.x, position.y);

    fill(this.color); // Usar el color proporcionado
    ellipse(position.x, position.y, 20, 20);
  }
}
