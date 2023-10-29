import React from 'react'; 
import Typography from '@material-ui/core/Typography'; 
import Slider from '@material-ui/core/Slider'; 
  
const RangeSlider = (props) => { 

  // Our States 
  const [value, setValue] =  React.useState(props.minMaxRange);     
  // Changing State when volume increases/decreases 
  const rangeSelector = (event, newValue) => {     
    setValue(newValue);    
    props.filterPriceHandler(newValue) 
  };  
  
  return ( 
    <div className='my-2'>       
      <Typography id="range-slider" gutterBottom> 
        Select Price Range: 
      </Typography> 
      <Slider 
        value={value} 
        min={props.minMaxRange[0]}
        max={props.minMaxRange[1]}
        onChange={rangeSelector} 
        valueLabelDisplay="auto"
      /> 
      Your range of Price is between ₹ {value[0]} L and ₹ {value[1]} L 
    </div> 
  ); 
} 
  
export default RangeSlider;