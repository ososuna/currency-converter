
const currency = [
  {
    id: 'USD',
    name: 'USD - US Dollar',
    value: 1
  },
  {
    id: 'MXN',
    name: 'MXN - Mexican Peso',
    value: 20.35
  },
  {
    id: 'JPY',
    name: 'JPY - Japanese Yen',
    value: 115.55
  },
  {
    id: 'EUR',
    name: 'EUR - Euro',
    value: 0.89
  }
]

const fromCurrency    = document.getElementById('fromCurrency'); 
const toCurrency      = document.getElementById('toCurrency'); 
const valueToConvert  = document.getElementById('valueToConvert');

let values = [];

const convert = ( event ) => {

  if (!valueToConvert.value) return false;
  
  event.preventDefault();
  
  const from  = currency.find( c => c.id === fromCurrency.value );
  const to    = currency.find( c => c.id === toCurrency.value );

  result = (valueToConvert.value * to.value / from.value).toFixed(2);

  console.log( result );

  resultP = document.getElementById('resultP');
  fromP   = document.getElementById('fromP');
  toP     = document.getElementById('toP');
  
  resultP.innerHTML = `<strong>${ valueToConvert.value }</strong> ${ from.id } = <strong>${ result }</strong> ${ to.id }`;
  fromP.innerHTML = `1 ${ from.id } = ${ (1 * to.value / from.value).toFixed(2) } ${ to.id }`;
  toP.innerHTML = `1 ${ to.id } = ${ (1 / to.value * from.value).toFixed(2) } ${ from.id }`;

  document.getElementById('resume').classList.add('border');

}

const initData = () => {

  currency.forEach( c => {
    const opt = document.createElement('option');
    opt.textContent = c.name;
    opt.value = c.id;
    fromCurrency.appendChild(opt);
  });
  
  currency.forEach( c => {
    const opt = document.createElement('option');
    opt.textContent = c.name;
    opt.value = c.id;
    toCurrency.appendChild(opt);
  });
  
  toCurrency.value = currency[1].id;
  
  values = [ fromCurrency.value, toCurrency.value ];

}

const updateFromCurrencyOpts = () => {
  
  if ( fromCurrency.value === values[1] ) {
    toCurrency.value = values[0];
    values[1] = toCurrency.value
  }
    values[0] = fromCurrency.value;
}

const updateToCurrencyOpts = () => {
  
  if ( toCurrency.value === values[0] ) {
    fromCurrency.value = values[1];
    values[0] = fromCurrency.value
  }
    values[1] = toCurrency.value;
}

initData();
