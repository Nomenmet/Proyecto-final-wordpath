import React from "react";

import * as d3 from "d3";
import PropTypes from 'prop-types';


const Canva = ({draw, height, width}) => {
  const canvas = React.useRef();
  React.useEffect(() => {
    const context = canvas.current.getContext('2d');
    draw(context);
  });

return (
    <canvas ref={canvas} height={height} width={width} />
  );
};

Canva.propTypes = {
  draw: PropTypes.func.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
};

export default Canva;