import React, { use } from 'react'
import { useState } from 'react';
import ComponentOne from './components/ComponentOne';
import ComponentTwo from './components/ComponentTwo';
import ExampleOne from './components/ExampleOne';
import ExampleTwo from './components/ExampleTwo';
import ExampleThree from './components/ExampleThree';

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  // ----------

  const [friends, setFriends] = useState(['Alex', 'John']);

  const addOneFriend = () => setFriends([...friends, "Luqman"]);
  const removeFriend = () => setFriends(friends.filter(f => f !== 'John'));

  const updateOneFriend = () => {
    setFriends(friends.map(f => f === 'Alex' ? 'Alex Smith' : f))
  }

  // ---------

  const [movie, setMovie] = useState({
    title: 'Equalizer',
    ratings: 7,
  });

  const changeRating = () => {
    // const copyMovie = {
    //   ...movie,
    //   ratings: 5  
    // }

    // setMovie(copyMovie);
    setMovie({...movie, ratings: 5});
  }

  // ---------

  const [movies, setMovies] = useState([
    {id: 1, title: 'Spider Man', ratings: 3},
    {id: 2, title: 'Superman', ratings: 6},
  ])

  const handleClick = () => {
    setMovies(
      movies.map(m => m.id === 1 ? {...movies, title: "John Wick 5"} : m)
    )
  }

  //  share state

  const [countNum, setCountNum] = useState(0);

  return (
    <section>
      <h1>{count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>

      
      {
        friends.map(f => (
          <li key={ Math.random() }>{ f }</li>
        ))
      }

      <button onClick={addOneFriend}>Add New Friend</button>
      <button onClick={removeFriend}>Remove One Friend</button>
      <button onClick={updateOneFriend}>Update One Friend</button>


      <h1>{ movie.title }</h1>
      <p>Ratings: { movie.ratings }</p>
      <button onClick={changeRating}>Change Rating</button>


      {
        movies.map(m => (
          <li key={ Math.random() }>{ m.title }</li>
        ))
      }

      <button onClick={handleClick}>Change Name</button>
  

      <ComponentOne count={countNum} onClickHandler={() => setCountNum(countNum + 1)} />
      <ComponentTwo count={countNum} onClickHandler={() => setCountNum(countNum + 1)} />


      <ExampleOne />
      <ExampleTwo />
      <ExampleThree />

    </section>
  );

}

export default App;