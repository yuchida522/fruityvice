import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import MoreInfoModal from './moreInfoModal';
import StyledCard from './styledComponents/StyledCard';
import StyledImage from './styledComponents/StyledImage';

//renders a friut card component
const FruitCard = (props) => {
    
  const [openModal, setOpenModal] = useState(false)
  const [fruitInfo, setFruitInfo] = useState({})
  const [nutritionInfo, setNutritionInfo] = useState({})

  //when user clicks on "more info", API call is made to retrieve more info about the fruit
  const handleClick = (e) => {
      e.preventDefault();
  
      fetch(`/api/fruit/${props.title}`)
        .then((res) => res.json())
          .then((data)=> {
            setFruitInfo(data);
            setNutritionInfo(data.nutritions);
            setOpenModal(true);
          }
        )
      .catch((err) => console.warn(err));
    };

   
  return (
    <StyledCard>
      <CardHeader title={props.title ? props.title.toUpperCase() : null} style={{fontStyle: 'italic', color: '#4B6587'}}/>
      <StyledImage image={props.image} />
      <CardActions>
        <Button onClick={(e)=> {handleClick(e)}} color="primary">
          More Information
        </Button>
      </CardActions>
      <MoreInfoModal 
        openModal={openModal}
        setOpenModal={setOpenModal}
        fruitInfo={fruitInfo}
        nutritionInfo={nutritionInfo}>
      </MoreInfoModal>
    </StyledCard>
  )
};

export default FruitCard