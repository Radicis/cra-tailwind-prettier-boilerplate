import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { animated, useSpring } from 'react-spring';

function Main({ show }) {
  const props = useSpring({
    delay: 2000,
    opacity: show ? 0 : 1
  });
  return (
    <animated.div style={props}>
      Hello
    </animated.div>
  );
}

Main.propTypes = {
  show: PropTypes.bool
};

export default Main;
