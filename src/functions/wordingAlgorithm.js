
import {fieldInterpreter} from "./fieldInterpreter.js"
import { detectarLetra } from "./detectarLetra.js";

export function wordingAlgoritm(path, field, subFields, normalCanvas){

    const normalSubFields = fieldInterpreter(subFields,normalCanvas);
    let ultimaLetra = "";

    for(const point of path){

        console.log(
        normalSubFields.find(((subField) =>

            (subField.boundary[0] < point[0]) && (point[0] < subField.boundary[2]) && (subField.boundary[1] < point[1] ) && (point[1] < subField.boundary[3])

        )).value
        )

    }

    /*
    for(let i = 0; i< path.length; i++){

        if(ultimaLetra !== ""){

            let letraActual = subFields[detectarLetra(path[i],normalSubFields)].value


        }else{


            let letraActual = detectarLetra(path[i],subFields,ultimaLetra)

        }
    }
    */



}