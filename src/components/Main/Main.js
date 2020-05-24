import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSpeechRecognition } from 'react-speech-kit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { animated, useSpring } from 'react-spring';

function Main({ show }) {
  const [value, setValue] = useState('');
  const { listen, listening, stop } = useSpeechRecognition({
    onResult: (result) => {
      setValue(result);
    }
  });
  const props = useSpring({
    delay: 2000,
    opacity: show ? 0 : 1
  });
  return (
    <animated.div style={props}>
      <textarea
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <button onMouseDown={listen} onMouseUp={stop}>
        🎤
      </button>
      {listening && <div>Go ahead I'm listening</div>}
    </animated.div>
  );
}

Main.propTypes = {
  show: PropTypes.bool
};

export default Main;
