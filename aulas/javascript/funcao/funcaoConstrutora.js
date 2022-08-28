function Carro(velocidadeMaxima = 200, delta = 5) {
  //atributo privado
  let velocidadeAtual = 0;

  // let ou const é privado
  // this é publico
  // metodo publico
  this.acelerar = function() {
      if (velocidadeAtual + delta <= velocidadeMaxima) {
          velocidadeAtual += delta;
      } else {
        velocidadeAtual = velocidadeMaxima;
      }
  }

  // metodo público
  this.getVelocidadeAtual = function () {
      return velocidadeAtual;
  }
}

const uno = new Carro;
// const uno = new Carro();
uno.acelerar();
console.log(uno.getVelocidadeAtual());

const ferrari = new Carro(350, 20);
ferrari.acelerar();
ferrari.acelerar();
ferrari.acelerar();
console.log(ferrari.getVelocidadeAtual());
