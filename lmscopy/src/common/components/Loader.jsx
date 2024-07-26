import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import './loader.css'

export default React.forwardRef(function Loader (props, ref) {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  React.useImperativeHandle(ref, ()=>({
    handleClose:handleClose,
    handleOpen:handleOpen
  }))

  return (
    <div>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        // onClick={handleClose}
      >
        <span className='loader'></span>
      </Backdrop>
    </div>
  );
})
