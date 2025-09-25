function TrafficLight() {
  this.color = 'verde';
  this.showState = function () {
    console.log('El semaforo esta en: ' + this.color);
  };

  this.nextState = function () {
    if (this.color == 'verde') {
      this.color = 'amarillo';
    } else if (this.color == 'amarillo') {
      this.color = 'rojo';
    } else if (this.color == 'rojo') {
      this.color = 'verde';
    }
  };
}

let trafficLight = new TrafficLight();

trafficLight.nextState();
trafficLight.showState();
trafficLight.nextState();
trafficLight.showState();
