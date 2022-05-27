import React from "react";
import {useRef, useState, useEffect } from 'react';
import * as d3 from "d3";
import Canva from "./components/Canva";
import draw from "./functions/draw.js"



export function App(){

    const elDiv = useRef();

    const [alturaCanvas,setAlturaCanvas] = useState(0);
    const [anchoCanvas,setAnchoCanvas] = useState(0);

    const estilo = {
        position:"relative",
        width:"90%",
        height:"40.5%",
        top:"30%",
        display:"inline-block",
        backgroundColor: "red",
    };
    
    const row = {
    
        width: anchoCanvas,
        height: alturaCanvas/3,
        color:"blue",
        position:"relative",
        display:"inline-block",
        backgroundColor: "blue",
    
    };

    const letter = {

        width: anchoCanvas/10 - 2,
        height: alturaCanvas/3,
        backgroundColor: "yellow",
        display:"inline-block",
        border: "1px solid #000",

    }


    useEffect(()=>{
        
        if(elDiv.current != null){

        
        setAlturaCanvas(elDiv.current.clientHeight);
        setAnchoCanvas(elDiv.current.clientWidth);


        }

    },[elDiv]);

    return(

        
        <div style={estilo} ref={elDiv}>

            <div style={row}>

                <div style={letter}>Q</div>
                <div style={letter}>W</div>
                <div style={letter}>E</div>
                <div style={letter}>R</div>
                <div style={letter}>T</div>
                <div style={letter}>Y</div>
                <div style={letter}>U</div>
                <div style={letter}>I</div>
                <div style={letter}>O</div>
                <div style={letter}>P</div>


            </div>
            <div style={row}>



                <div style={letter}>A</div>
                <div style={letter}>S</div>
                <div style={letter}>D</div>
                <div style={letter}>F</div>
                <div style={letter}>G</div>
                <div style={letter}>H</div>
                <div style={letter}>J</div>
                <div style={letter}>K</div>
                <div style={letter}>L</div>

            </div>
            <div style={row}>

                <div style={letter}>Z</div>
                <div style={letter}>X</div>
                <div style={letter}>C</div>
                <div style={letter}>V</div>
                <div style={letter}>B</div>
                <div style={letter}>N</div>
                <div style={letter}>M</div>

            </div>

            <Canva draw={draw} height={alturaCanvas } width={anchoCanvas} />
        </div>
    )





}

