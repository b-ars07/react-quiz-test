import React from 'react';
import classes from './MenuToggle.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons'

const MenuToggle = (props) => {
  let icons = null;
  const cls = [classes.MenuToggle]

  if (props.isOpen) {
    icons = faTimes
    cls.push(classes.open)
  } else {
    icons = faBars
    cls.push(classes.close)
  }

  return (
      <FontAwesomeIcon
        icon={icons}
        onClick={props.onToggle}
        className={cls.join(' ')}
      >

      </FontAwesomeIcon>
  );
}

export default MenuToggle;
