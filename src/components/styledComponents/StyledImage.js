import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';

//image size set for each fruit card
const StyledImage = withStyles({
  root: {
    height: '250px',
    width: '100%',
  }
})(CardMedia);
  
export default StyledImage