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

  function autoFillerCampos(letras, filas, elementsNumFila, widthElement, heightElement, offsetFilaX){

    let Campos = [];

    for(let v = 0; v < filas; v++){

      for(let i = 0; i < elementsNumFila[v]; i++){

        Campos.push({
  
          boundary:[widthElement * i + offsetFilaX[v], heightElement * v, widthElement*(i+1) + offsetFilaX[v], heightElement*(v+1)],
          value: letras[v][i]
  
        })
  
      }

    }

    return Campos;


  }

  const subCampos = autoFillerCampos(
    [
      ["Q","W","E","R","T","Y","U","I","O","P"],
        ["A","S","D","F","G","H","J","K","L"],
            ["Z","X","C","V","B","N","M"]
    ]
    , 3, [10, 9, 7], 1/10, 1/3, [0, 1/20, 3/20]);

  React.useEffect(() => {
    const context = canvas.current.getContext('2d');
    //&context.canvas.element.removeEventListener("pointerdown", ); 
    draw(context);
    
  },[]);

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