import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { DialogActions } from '@material-ui/core';
import StyledPopUp from './styledComponents/StyledPopUp';

//pop up modal component that gives more information on the fruit that was clicked on
const MoreInfoModal = (props) => {

    const { openModal, setOpenModal, nutritionInfo, fruitInfo, children } = props;
    const { name, family } = fruitInfo;
    const { calories, carbohydrates, fat, protein, sugar } = nutritionInfo;


    return (
        <Dialog open={openModal} >
          <StyledPopUp>
           <Typography variant='h5' display='block' paragraph>
               Name: {name} <br/>
               Family: {family} <br/>
               calories: {calories} <br/>
               carbs: {carbohydrates} <br/>
               fat: {fat} <br/>
               protein: {protein} <br/>
               sugar: {sugar} <br/> 
           </Typography>
          {/* </DialogContent> */}
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