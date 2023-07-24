class Calculadora {
  
  constructor() {
    this.log = [];
  }

  menu() {
    const opcion = prompt(`Operaciones disponibles:
    1) suma
    2) resta
    3) multiplicacion
    4) division
    5) Registro
    
    *Solo puedes hacer operaciones con 2 números
    
    Operacion: `);

    let num1 = null;
    let num2 = null;

    if (Number(opcion) < 5) {
      num1 = prompt("Primer numero: ")
      num2 = prompt("Segundo numero: ")
    }

    switch(Number(opcion)){
      case 1:
        this.suma(Number(num1), Number(num2));
        break;
      case 2:
        this.resta(Number(num1), Number(num2));
        break;
      case 3:
        this.multiplicacion(Number(num1), Number(num2));
        break;
      case 4:
        this.division(Number(num1), Number(num2));
        break;
      case 5:
        this.printLog()
        break;
    }
  }

  suma(num1, num2) {
    const tot = num1+num2;
    this.print(tot);
    this.registerLog(num1, num2, tot, "Suma");
  }

  resta(num1, num2) {
    const tot = num1-num2;
    this.print(tot);
    this.registerLog(num1, num2, tot, "Resta");
  }

  multiplicacion(num1, num2) {
    const tot = num1*num2;
    this.print(tot);
    this.registerLog(num1, num2, tot, "Multiplicación");
  }

  division(num1, num2) {
    if (num1 === 0 || num2 === 0) {
      this.registerLog(num1, num2, "Error", "División", true);
      return
    }
    const tot = num1/num2;
    this.print(tot);
    this.registerLog(num1, num2, tot, "División");
  }

  print(tot) {
    console.log(`El resultado es: ${tot}`);
  }

  registerLog(num1, num2, tot, operacion, error = false) {
    this.log.push(`Número 1: ${num1}, Número 2: ${num2}, Operación: ${operacion}, Total: ${!error ? tot : "Error!"}`);
  }

  printLog() {
    console.group(`Operaciones Realizadas (${this.log.length}):`);
    let i = 1;
    for(let registro of this.log) {
      console.log(`${i++}) ${registro}`);
    }
    console.groupEnd();
  }

  nuevaOperacion() {
    return prompt("Nueva operación: ");
  }
}