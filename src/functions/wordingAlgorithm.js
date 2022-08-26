
import {fieldInterpreter} from "./fieldInterpreter.js"
import { detectarLetra } from "./detectarLetra.js";

export function wordingAlgoritm(path, field, subFields, normalCanvas){

    const normalSubFields = fieldInterpreter(subFields,normalCanvas);
    let ultimaLetra = "";

    for(let i = 0; i< path.length; i++){

        if(ultimaLetra !== ""){

            let letraActual = subFields[detectarLetra(path[i],normalSubFields)].value


        }else{


            let letraActual = detectarLetra(path[i],subFields,ultimaLetra)

        }
    }




}