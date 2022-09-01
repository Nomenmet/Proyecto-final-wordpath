
import {fieldInterpreter} from "./fieldInterpreter.js"
import { detectarLetra } from "./detectarLetra.js";

export function wordingAlgoritm(path, field, subFields, normalCanvas){

    const normalSubFields = fieldInterpreter(subFields,normalCanvas);

    let ultimoSubcampo;
    let unparsedSlideString = "";
    let ollkorectFlag = true;

    for(const point of path){





        if((ultimoSubcampo !== undefined)?boundaryCheck(ultimoSubcampo.boundary, point):false){

                // aca entra si se repite la letra
            ollkorectFlag = false;

        }
            
        else{

            ultimoSubcampo = normalSubFields.find((

                (subField) =>{
    
                    return boundaryCheck(subField.boundary , point)
                }
    
            ))
                
            if(ultimoSubcampo !== undefined){
                ollkorectFlag = true;
                unparsedSlideString += ultimoSubcampo.value;
            }
            
        }

        


    }

    console.log(unparsedSlideString);

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

function boundaryCheck(boundrys, point){

    return (boundrys[0] < point[0]) && (point[0] < boundrys[2]) && (boundrys[1] < point[1] ) && (point[1] < boundrys[3])
}