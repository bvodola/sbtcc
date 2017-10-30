import React from 'react';
import { colors } from '../helpers/theme';

const style = {
  transform: 'translateY(25%)',
  fontSize: '16px',
  marginRight: '5px',
  color: colors.text2,
}

const Icon = (props) => (
  <span style={style} className="material-icons">{props.children}</span>
);

export default Icon;
