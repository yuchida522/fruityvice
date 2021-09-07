import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
import { DialogActions } from '@material-ui/core';
import StyledPopUp from './styledComponents/StyledPopUp';

//pop up modal component that gives more information on the fruit that was clicked on
const MoreInfoModal = (props) => {

    const { openModal, setOpenModal, nutritionInfo, fruitInfo, children } = props;
    const { family } = fruitInfo;
    const { calories, carbohydrates, fat, protein, sugar } = nutritionInfo;

    return (
    <Dialog open={openModal} >
    <StyledPopUp>
    <Typography variant='body1' style={{paddingTop: 30, fontSize: 20, fontFamily: 'Monospace'}}>
        Family: {family} <br/>
        Calories: {calories} <br/>
        Carbohydrates: {carbohydrates}g<br/>
        Fat: {fat}g <br/>
        Protein: {protein}g <br/>
        Sugar: {sugar}g <br/> 
    </Typography>
    </StyledPopUp>
    <DialogActions>
    <Button onClick={()=>setOpenModal(false)} color="primary">
    Close
    </Button>
    </DialogActions>
    </Dialog>
  )
}; 

export default MoreInfoModal