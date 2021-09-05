import React, {useState, useEffect} from 'react';
import FruitCard from './components/card'
import FruitImages from './fruitImages'

const App = () => {
  
  const [images, setImages] = useState(FruitImages)
  const renderedFruitCards = [];

  for (const [fruitName, fruitImage] of Object.entries(images)) {
      
      const fruitCard = (
          <FruitCard key={fruitName} title={fruitName} image={fruitImage} />
      );
      renderedFruitCards.push(fruitCard)
  }

  return (
      <>
        {renderedFruitCards}
      </>
  )
};

export default App;