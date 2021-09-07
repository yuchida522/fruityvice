import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import DialogContent from '@material-ui/core/DialogContent';

//pop up component styled
const StyledPopUp = withStyles({
  root: {
    height: '250px',
    width: '250px',
  }
})(DialogContent);
  
export default StyledPopUp