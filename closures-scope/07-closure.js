const moneyBox = function(ownerBox) {
    let owner = ownerBox;
    let saveMoney = 0;

    function countMoney(money) {
        saveMoney += money;
        console.log(`${owner} has saved ${money} | Total saved: ${saveMoney}`);
        return saveMoney;
    }
    return countMoney;
}

const tomyBox = moneyBox('Tomy');
tomyBox(200);
tomyBox(500);
tomyBox(150);

console.log('================');

const giaBox = moneyBox('Gianella');
giaBox(375);
giaBox(375);
giaBox(375);
giaBox(50);


function mosaico() {
    const figuras = [];
  
    function pintar(nuevaFigura) {
      figuras.push(nuevaFigura);
  
      let resultado = '';
      const mainLength = figuras.length * 2;
      
      for (let fila = 0; fila < mainLength; fila++) {
  
        for(let columna = 0; columna < mainLength; columna++) {
          const valorMax = fila > columna ? fila : columna;
          const valorMin = fila < columna ? fila : columna;
  
          const valorPosible = mainLength - (valorMax + 1);
  
          const indexFigura = valorPosible < valorMin ? valorPosible : valorMin;
          
  
          resultado += `${figuras[indexFigura]} `;
        }
        resultado += '\n';
      }
      return resultado;
    }
  
    return pintar;
  
  }
  
  const m = mosaico();
  console.log(m('*'));
  console.log(m('o'));
  console.log(m('+'));
  console.log(m('x'));