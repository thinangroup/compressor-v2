import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import MenuIcon from '@material-ui/icons/Menu';

export default function MenuListComposition() {
  return (
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <h1 className='mainHead' style={{marginTop: '9px'}}><a href="/">COMPRESS THE IMAGE</a></h1>
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button {...bindTrigger(popupState)}>
            <MenuIcon/>
          </Button>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={popupState.close} ><a href='/about' style={{textDecoration: 'none', color: '#FC8B06'}}>About</a></MenuItem>
            <MenuItem onClick={popupState.close}><a href='/blogs' style={{textDecoration: 'none', color: '#FC8B06' }}>Blogs</a></MenuItem>
            <MenuItem onClick={popupState.close}><a href='#social' style={{textDecoration: 'none', color: '#FC8B06' }}>Contact Us</a></MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
    </div>
  );
}
