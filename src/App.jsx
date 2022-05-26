import React from "react";
import {useRef, useState, useEffect } from 'react';
import * as d3 from "d3";
import Canva from "./components/Canva";
import draw from "./functions/draw.js"



export function App(){

    const elDiv = useRef();

    const [alturaCanvas,setAlturaCanvas] = useState(0);
    const [anchoCanvas,setAnchoCanvas] = useState(0);

    useEffect(()=>{
        
        if(elDiv.current != null){

        
        setAlturaCanvas(elDiv.current.clientHeight);
        setAnchoCanvas(elDiv.current.clientWidth);


        }

    },[elDiv]);

    return(

        
        <div style={estilo} ref={elDiv}>
            <Canva draw={draw} height={alturaCanvas } width={anchoCanvas} />
        </div>
    )
}

const estilo = {
    position:"relative",
    color:"red",
    width:"90%",
    height:"40.5%",
    top:"30%",
    display: "inline-block",
    backgroundColor: "red",
};