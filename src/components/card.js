import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
// import Modal from '@material-ui/core/Modal';
import MoreInfoModal from './moreInfoModal';


const FruitCard = (props) => {
    
    const [openModal, setOpenModal] = useState(false)
    const [fruitInfo, setFruitInfo] = useState({})
    const [nutritionInfo, setNutritionInfo] = useState({})
    console.log(fruitInfo)
    console.log(nutritionInfo)

    const handleClick = (fruitName) => {
        console.log("clicked")
        fetch(`fruit/${fruitName}`)
        .then((res) => res.json())
        .then((data)=> {
        setFruitInfo(data)
        setNutritionInfo(data.nutritions)
        }
      )
    }
   
    return (
        <Card>
            <CardHeader title={props.title} />
            <CardMedia image={props.image} style={{height: 100}}/>
            <CardActions>
              <Button onClick={()=> {setOpenModal(true); handleClick(props.title)}} color="primary">
                More Information
              </Button>
            </CardActions>
            <MoreInfoModal 
              openModal={openModal}
              setOpenModal={setOpenModal}
              fruitInfo={fruitInfo}
              nutritionInfo={nutritionInfo}>
              </MoreInfoModal>
        </Card>
    )
}

export default FruitCard