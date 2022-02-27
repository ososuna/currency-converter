
const currency = [
  {
    id: 'USD',
    name: 'USD - US Dollar'
  },
  {
    id: 'MXN',
    name: 'MXN - Mexican Peso'
  },
  {
    id: 'JPY',
    name: 'JPY - Japanese Yen'
  },
  {
    id: 'EUR',
    name: 'EUR - Euro'
  }
]

const fromCurrency = document.getElementById('fromCurrency'); 
const toCurrency = document.getElementById('toCurrency'); 


const convert = ( event ) => {
  event.preventDefault();
  const valueToConvert = document.getElementById('valueToConvert').value;
  console.log('Converting...');
  console.log(valueToConvert);
}

const updateFromCurrencyOpts = () => {
  
  const options = currency.filter( c => c.id !== fromCurrency.value );
  const prevValue = toCurrency.value;
  
  toCurrency.options.length = 0;

  options.forEach( opt => {
    const option = document.createElement('option');
    option.textContent = opt.name;
    option.value = opt.id;
    toCurrency.appendChild(option);
  });

  const foundValue = options.find( opt => opt.id === prevValue );

  if ( foundValue ) {
    toCurrency.value = prevValue;
  }

}

const updateToCurrencyOpts = () => {
  
  const options = currency.filter( c => c.id !== toCurrency.value );
  const prevValue = fromCurrency.value;

  fromCurrency.options.length = 0;
  
  options.forEach( opt => {
    const option = document.createElement('option');
    option.textContent = opt.name;
    option.value = opt.id;
    fromCurrency.appendChild(option);
  });

  const foundValue = options.find( opt => opt.id === prevValue );

  if ( foundValue ) {
    fromCurrency.value = prevValue;
  }


}

currency.forEach( c => {
  const opt = document.createElement('option');
  opt.textContent = c.name;
  opt.value = c.id;
  fromCurrency.appendChild(opt);
});

currency.forEach( c => {
  if ( c.id != fromCurrency.value ) {
    const opt = document.createElement('option');
    opt.textContent = c.name;
    opt.value = c.id;
    toCurrency.appendChild(opt);
  }
});
