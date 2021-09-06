import React, { useState } from 'react';
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

    const handleClick = async() => {

        const data = await fetch('https://www.fruityvice.com/api/fruit/all', {
            method: 'GET',
            mode: "cors",
            headers: {
                'Access-Control-Allow-Origin': '*',
            }
          }
        )
        console.log(data)
    }
    return (
        <Card>
            <CardHeader title={props.title} />
            <CardMedia image={props.image} style={{height: 100}}/>
            <CardActions>
              <Button onClick={()=> {setOpenModal(true); handleClick()}} color="primary">
                More Information
              </Button>
            </CardActions>
            <MoreInfoModal openModal={openModal} setOpenModal={setOpenModal}>fruit info here</MoreInfoModal>
        </Card>
    )
}

export default FruitCard