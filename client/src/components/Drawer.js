import React from 'react';
import { default as MuiDrawer } from 'material-ui/Drawer';
import Button from 'material-ui/Button';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import { Icon } from '../helpers';
import { withRouter } from 'react-router-dom'

const style = {
  header: {
    textAlign: 'center',
    img: {
      margin: '10px',
      width: '150px'
    }
  }
}

const Drawer = (props) => (
  <MuiDrawer open={props.isDrawerOpened} onRequestClose={() => props.toggleDrawer()}>
    <div style={{width: '250px'}} onClick={() => props.toggleDrawer()}>
      <div style={style.header}>
        <img style={style.header.img} src="http://www.sbtcc.org.br/templates/images/logo-sbtcc.png" alt=""/>
      </div>
      <List>
        <ListItem button onClick={() => props.history.push('/notifications')}>
          <Icon>notifications</Icon>
          <ListItemText primary="Notificações" />
        </ListItem>
        <ListItem button onClick={() => props.history.push('/news')}>
          <Icon>list</Icon>
          <ListItemText primary="Notícias" />
        </ListItem>
        <ListItem button onClick={() => props.history.push('/videos')}>
          <Icon>play_circle_outline</Icon>
          <ListItemText primary="Vídeos" />
        </ListItem>
        <ListItem button onClick={() => props.history.push('/courses')}>
          <Icon>school</Icon>
          <ListItemText primary="Cursos" />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button onClick={() => props.history.push('/contact')}>
          <Icon>message</Icon>
          <ListItemText primary="Fale Conosco" />
        </ListItem>
      </List>
    </div>
  </MuiDrawer>
);

export default withRouter(Drawer);
