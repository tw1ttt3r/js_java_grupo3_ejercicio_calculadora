function main() {
  let calc = null;
  let nueva = "";
  do {
    if (!calc) {
      calc = new Calculadora();
    }
    calc.menu();
    nueva = calc.nuevaOperacion();
  } while(nueva === 's')
}