import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

// const styles = (theme) => ({
//   root: {
//     margin: 0,
//     padding: theme.spacing(2),
//   },
//   closeButton: {
//     position: 'absolute',
//     right: theme.spacing(1),
//     top: theme.spacing(1),
//     color: theme.palette.grey[500],
//   },
// });

//pop up modal component that gives more information on the fruit that was clicked on
const MoreInfoModal = (props) => {

    const { openModal, setOpenModal, nutritionInfo, fruitInfo } = props;
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