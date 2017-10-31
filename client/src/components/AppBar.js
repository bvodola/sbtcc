import React from 'react';

import { default as MuiAppBar } from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';

import { colors } from '../helpers/theme';

const style = {
  backgroundColor: colors.main1
}

const getTitle = () => {
  switch(window.location.hash.split('/')[1].split('?')[0]) {
    case 'news':
      return 'Notícias';
      break;
    case 'notifications':
      return 'Notificações';
      break;
    case 'videos':
      return 'Vídeos';
      break;
    case 'courses':
      return 'Cursos';
      break;
    case 'contact':
      return 'Fale Conosco';
      break;
  }
}

const AppBar = (props) => (
  <MuiAppBar position="fixed" className='AppBarComponent' style={style}>
    <Toolbar>
      <IconButton onClick={() => props.toggleDrawer()} color="contrast" aria-label="Menu">
        <span className="material-icons">menu</span>
      </IconButton>
      <Typography type="title" color="inherit">
        {getTitle()}
      </Typography>
    </Toolbar>
  </MuiAppBar>
);

export default AppBar;
