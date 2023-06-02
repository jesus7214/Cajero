function inicio() {
  window.location.href = "index.html";
}

function usuario1() {
  let condicion = true;

  while (condicion) {
    let contraseña = parseInt(prompt("INGRESE SU CONTRASEÑA"));

    if (contraseña === 1) {
      let contenido1 = document.getElementById("botonesUsuarios");
      contenido1.innerHTML = `
    <div > <h2>Bienvenido al Cajero </h2></div>
    <div class="sigui"></html>
    <button class="sig" onclick="bienvenida()"> Siguiente</button> </div>
    `;
      condicion = false;
    } else {
      alert("contraseña incorrecta");
      condicion = true;
    }
  }
}

// usuario 2
function usuario2() {
  let condicion = true;

  while (condicion) {
    let contraseña = parseInt(prompt("INGRESE SU CONTRASEÑA"));

    if (contraseña === 2) {
      let contenido1 = document.getElementById("botonesUsuarios");
      contenido1.innerHTML = `
    <div > <h2>Bienvenido al Cajero </h2></div>
    <div class="sigui"></html>
    <button class="sig" onclick="bienvenida2()"> Siguiente</button> </div>
    `;
      condicion = false;
    } else {
      alert("contraseña incorrecta");
      condicion = true;
    }
  }
}

// usuario 3
function usuario3() {
  let condicion = true;

  while (condicion) {
    let contraseña = parseInt(prompt("INGRESE SU CONTRASEÑA"));

    if (contraseña === 3) {
      let contenido1 = document.getElementById("botonesUsuarios");
      contenido1.innerHTML = `
      <div > <h2>Bienvenido al Cajero </h2></div>
      <div class="sigui"></html>
    <button class="sig" onclick="bienvenida3()"> Siguiente</button> </div>
    `;
      condicion = false;
    } else {
      alert("contraseña incorrecta");
      condicion = true;
    }
  }
}

function bienvenida() {
  let bienvenida = document.getElementById("botonesUsuarios");
  bienvenida.innerHTML = `
  <div id="h">

  <div id="bot2"> <h2> Estás en Persona 1 </h2></div>
        
  <div class="consultaSaldo"> <button onclick="consultaSaldoP1()">Consultar Saldo</button> </div>
  <div id="ingresarSaldo">  <button onclick="ingresarSaldoP1()">Ingresar Saldo </button  </div>
  <div id="retirarSaldo"> <button onclick="retirarP1()"> Retirar Saldo </button  </div>

  </div>
  `;
}

// bienvenida 2
function bienvenida2() {
  let bienvenida2 = document.getElementById("botonesUsuarios");
  bienvenida2.innerHTML = `
  <div id="h">

  <div id="bot2"> <h2> Estás en Persona 2 </h2> </div>
        
  <div class="consultaSaldo"> <button onclick="consultaSaldoP2()">Consultar Saldo</button> </div>
  <div id="ingresarSaldo">  <button onclick="ingresarSaldoP2()">Ingresar Saldo </button  </div>
  <div id="retirarSaldo"> <button onclick="retirarP2()"> Retirar Saldo </button  </div>

  </div>
  `;
}

// bienvenida 3
function bienvenida3() {
  let bienvenida3 = document.getElementById("botonesUsuarios");
  bienvenida3.innerHTML = `
  <div id="h">

  <div id="bot2"> <h2> Estás en Persona 3 </h2> </div>
        
  <div class="consultaSaldo"> <button onclick="consultaSaldoP3()">Consultar Saldo</button> </div>
  <div id="ingresarSaldo">  <button onclick="ingresarSaldoP3()">Ingresar Saldo </button  </div>
  <div id="retirarSaldo"> <button onclick="retirarP3()"> Retirar Saldo </button  </div>

  </div>
  `;
}

let saldoA = 900;
let saldoB = 800;
let saldoC = 700;

function consultaSaldoP1() {
  let saldo1 = document.getElementById("h");
  saldo1.innerHTML = `
  <h2> Estás en Persona 1 </h2>

  <div class="consultaSaldo1" > Su saldo es: <input type="text" name="" id="saldoInput"></div>  
  <br>
  <button onclick="bienvenida()">Atrás</button>
`;

  let saldoInput = document.getElementById("saldoInput");
  saldoInput.value = saldoA;
}

// consulta saldo 2
function consultaSaldoP2() {
  let saldo2 = document.getElementById("h");
  saldo2.innerHTML = `
  <h2> Estás en Persona 2 </h2>
  <div class="consultaSaldo1" > Su saldo es: <input type="text" name="" id="saldoInput2"></div>
  <br>
  <button onclick="bienvenida2()">Atrás</button>
`;

  let saldoInput2 = document.getElementById("saldoInput2");
  saldoInput2.value = saldoB;
}

// consulta saldo 3
function consultaSaldoP3() {
  let saldo3 = document.getElementById("h");
  saldo3.innerHTML = `
  <h2> Estás en Persona 3 </h2>
  <div class="consultaSaldo1" > Su saldo es: <input type="text" name="" id="saldoInput3"></div>
  <br>
  <button onclick="bienvenida3()">Atrás</button>
`;

  let saldoInput3 = document.getElementById("saldoInput3");
  saldoInput3.value = saldoC;
}

function ingresarSaldoP1() {
  let saldo11 = document.getElementById("h");

  saldo11.innerHTML = `
  <h2> Estás en Persona 1 </h2>
<div>Cuánto va a ingresar? <input type="text"  id="cuantoIngresar"></div>

<div><br>  <button onclick="totalIngreso1()">Total</button> <input type="text"  id="nuevoSaldoInput"></div>
<br>
<button onclick="bienvenida()">Atrás</button>

`;
}

// ingresar saldo 2
function ingresarSaldoP2() {
  let saldo22 = document.getElementById("h");

  saldo22.innerHTML = `
  <h2> Estás en Persona 2 </h2>
<div>Cuánto va a ingresar? <input type="text"  id="cuantoIngresar"></div>

<div><br>  <button onclick="totalIngreso2()">Total</button> <input type="text"  id="nuevoSaldoInput2"></div>
<br>
<button onclick="bienvenida2()">Atrás</button>

`;
}

// ingresar saldo 3
function ingresarSaldoP3() {
  let saldo33 = document.getElementById("h");

  saldo33.innerHTML = `
  <h2> Estás en Persona 3 </h2>
<div>Cuánto va a ingresar? <input type="text"  id="cuantoIngresar"></div>

<div><br>  <button onclick="totalIngreso3()">Total</button> <input type="text"  id="nuevoSaldoInput3"></div>
<br>
<button onclick="bienvenida3()">Atrás</button>

`;
}

function totalIngreso1() {
  let cuantoIngresar1 = document.getElementById("cuantoIngresar");
  let cuantoIngresAA = parseInt(cuantoIngresar1.value);

  saldoA = cuantoIngresAA + saldoA;
  if (saldoA > 990) {
    alert("La cuenta no puede quedar con mas de $990");
    inicio();
  } else {
    let saldoInput1 = document.getElementById("nuevoSaldoInput");
    saldoInput1.value = saldoA;
  }
}

// totalIngreso 2
function totalIngreso2() {
  let cuantoIngresar2 = document.getElementById("cuantoIngresar");
  let cuantoIngresBB = parseInt(cuantoIngresar2.value);

  saldoB = cuantoIngresBB + saldoB;
  if (saldoB > 990) {
    alert("La cuenta no puede quedar con mas de $990");
    inicio();
  } else {
    let saldoInput2 = document.getElementById("nuevoSaldoInput2");
    saldoInput2.value = saldoB;
  }
}

// totalIngreso 3
function totalIngreso3() {
  let cuantoIngresar3 = document.getElementById("cuantoIngresar");
  let cuantoIngresCC = parseInt(cuantoIngresar3.value);

  saldoC = cuantoIngresCC + saldoC;
  if (saldoC > 990) {
    alert("La cuenta no puede quedar con mas de $990");
    inicio();
  } else {
    let saldoInput3 = document.getElementById("nuevoSaldoInput3");
    saldoInput3.value = saldoC;
  }
}

function retirarP1() {
  let retiro1 = document.getElementById("h");
  retiro1.innerHTML = `
  <h2> Estás en Persona 1 </h2>
  <div>Actualmente tienes:<input type="text" name="" id="saldoInput"> </div>
  <br>
  <div>Cuánto va a Retirar? <input type="text"  id="cuantoRetirar"></div>

  <div><br>  <button onclick="totalRetiro1()">Total</button> <input type="text"  id="nuevoSaldoInputRetiro1"></div>
  <br>
<button onclick="bienvenida()">Atrás</button>
`;

  let saldoInput = document.getElementById("saldoInput");
  saldoInput.value = saldoA;
}

// retirar P2
function retirarP2() {
  let retiro2 = document.getElementById("h");
  retiro2.innerHTML = `
  <h2> Estás en Persona 2 </h2>
  <div>Actualmente tienes:<input type="text" name="" id="saldoInput2"> </div>
  <br>
  <div>Cuánto va a Retirar? <input type="text"  id="cuantoRetirar2"></div>

  <div><br>  <button onclick="totalRetiro2()">Total</button> <input type="text"  id="nuevoSaldoInputRetiro2"></div>
  <br>
<button onclick="bienvenida2()">Atrás</button>
`;

  let saldoInput2 = document.getElementById("saldoInput2");
  saldoInput2.value = saldoB;
}

// retirar P3
function retirarP3() {
  let retiro3 = document.getElementById("h");
  retiro3.innerHTML = `
  <h2> Estás en Persona 3 </h2>
  <div>Actualmente tienes:<input type="text" name="" id="saldoInput3"> </div>
  <br>
  <div>Cuánto va a Retirar? <input type="text"  id="cuantoRetirar3"></div>

  <div><br>  <button onclick="totalRetiro3()">Total</button> <input type="text"  id="nuevoSaldoInputRetiro3"></div>
  <br>
<button onclick="bienvenida3()">Atrás</button>
`;

  let saldoInput3 = document.getElementById("saldoInput3");
  saldoInput3.value = saldoC;
}

function totalRetiro1() {
  let cuantoRetirar11 = document.getElementById("cuantoRetirar");
  let cuantoRetirarAA = parseInt(cuantoRetirar11.value);

  saldoA = saldoA - cuantoRetirarAA;

  if (saldoA < 10) {
    alert("La cuenta no puede qeudar con menos de $10");
    inicio();
  } else {
    let saldoInput111 = document.getElementById("nuevoSaldoInputRetiro1");
    saldoInput111.value = saldoA;
  }
}

// totalRetiro 2
function totalRetiro2() {
  let cuantoRetirar22 = document.getElementById("cuantoRetirar2");
  let cuantoRetirarBB = parseInt(cuantoRetirar22.value);

  saldoB = saldoB - cuantoRetirarBB;

  if (saldoB < 10) {
    alert("La cuenta no puede qeudar con menos de $10");
    inicio();
  } else {
    let saldoInput222 = document.getElementById("nuevoSaldoInputRetiro2");
    saldoInput222.value = saldoB;
  }
}

// totalRetiro 3
function totalRetiro3() {
  let cuantoRetirar33 = document.getElementById("cuantoRetirar3");
  let cuantoRetirarCC = parseInt(cuantoRetirar33.value);

  saldoC = saldoC - cuantoRetirarCC;

  if (saldoC < 10) {
    alert("La cuenta no puede qeudar con menos de $10");
    inicio();
  } else {
    let saldoInput333 = document.getElementById("nuevoSaldoInputRetiro3");
    saldoInput333.value = saldoC;
  }
}
