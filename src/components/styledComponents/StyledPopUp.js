import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import DialogContent from '@material-ui/core/DialogContent';

const StyledPopUp = withStyles({
    root: {
      height: '250px',
      width: '250px',
      font: "'Open Sans', sans-serif",
    }
  })(DialogContent);
  
export default StyledPopUp