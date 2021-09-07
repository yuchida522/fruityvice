import React, {useState, useEffect} from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import FruitCard from './components/FruitInfoCard'
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
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent:' center'}}>
        {renderedFruitCards}
      </div>
  )
};

export default App;