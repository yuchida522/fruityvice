import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

//pop up modal component that gives more information on the fruit that was clicked on
const MoreInfoModal = (props) => {

    const {openModal, setOpenModal, children} = props;
   
    return (
        <Dialog open={openModal} >
          <DialogTitle>
            <IconButton onClick={()=>setOpenModal(false)}><CloseIcon /></IconButton>
          </DialogTitle>
          <DialogContent>
           {children}
          </DialogContent>
        </Dialog>
    )
};

export default MoreInfoModal