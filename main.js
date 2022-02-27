
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
  
  event.preventDefault();
  
  const from  = currency.find( c => c.id === fromCurrency.value );
  const to    = currency.find( c => c.id === toCurrency.value );

  result = valueToConvert.value * to.value / from.value;

  console.log( result.toFixed(2) );

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
