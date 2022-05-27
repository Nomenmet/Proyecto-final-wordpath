import React from "react";

import * as d3 from "d3";
import PropTypes from 'prop-types';

const estilCan = {

    position:"absolute",
    top:0,
    left: 0,

}

const Canva = ({draw, height, width}) => {
  const canvas = React.useRef();
  React.useEffect(() => {
    const context = canvas.current.getContext('2d');
    draw(context);
  });

return (
    <canvas ref={canvas} style={estilCan} height={height} width={width} />
  );
};

Canva.propTypes = {
  draw: PropTypes.func.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
};

export default Canva;