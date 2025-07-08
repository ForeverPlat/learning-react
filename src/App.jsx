import React from 'react'
import Person from './components/Person';
import Product from './components/Product';
import Card from './components/Card';

const App = () => {

  const name = "Luqman";
  const age = 18;

  const productName = "Laptop";
  const price = 1200;

  return (
    <div>

      <Person name={name} age={age}/>
      <Product name={ productName } price={ price }/>

      <Card>
        <h1>My Card</h1>
        <p>Content for card 1</p>
      </Card>

      <Card>
        <h1>My Card 2</h1>
        <p>Content for card 2</p>
      </Card>

      <Card>
        <h1>My Card 3</h1>
        <p>Content for card 3</p>
      </Card>

    </div>
  );

}

export default App;