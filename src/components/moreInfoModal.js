import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

//pop up modal component that gives more information on the fruit that was clicked on
const MoreInfoModal = (props) => {

    const { openModal, setOpenModal, fruitInfo, nutritionInfo } = props;
    const { name, family } = fruitInfo;
    const { calories, carbohydrates, fat, protein, sugar } = nutritionInfo;

   
    return (
        <Dialog open={openModal} >
          <DialogTitle>
            <IconButton onClick={()=>setOpenModal(false)}><CloseIcon /></IconButton>
          </DialogTitle>
          <DialogContent>
           <Typography>
               Name: {name} <br/>
               Family: {family} <br/>
               calories: {calories} <br/>
               carbs: {carbohydrates} <br/>
               fat: {fat} <br/>
               protein: {protein} <br/>
               sugar: {sugar} <br/>
           </Typography>
          </DialogContent>
        </Dialog>
    )
};

export default MoreInfoModal