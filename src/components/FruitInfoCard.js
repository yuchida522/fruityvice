import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import MoreInfoModal from './moreInfoModal';
import StyledCard from './styledComponents/StyledCard';
import StyledImage from './styledComponents/StyledImage';

const FruitCard = (props) => {
    
    const [openModal, setOpenModal] = useState(false)
    const [fruitInfo, setFruitInfo] = useState({})
    const [nutritionInfo, setNutritionInfo] = useState({})

    const handleClick = (e) => {
        e.preventDefault()
        console.log('clicked')
        fetch(`fruit/${props.title}`)
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
}

export default FruitCard