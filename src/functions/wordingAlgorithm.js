
import {fieldInterpreter} from "./fieldInterpreter.js"
import { detectarLetra } from "./detectarLetra.js";

export function wordingAlgoritm(path, field, subFields, normalCanvas){

    const normalSubFields = fieldInterpreter(subFields,normalCanvas);

    let ultimoSubcampo;
    let unparsedSlideString = "";

    for(const point of path){





        if((ultimoSubcampo !== undefined)?boundaryCheck(ultimoSubcampo.boundary, point):false){

                // aca entra si se repite la letra

        }
            
        else{

            ultimoSubcampo = normalSubFields.find((

                (subField) =>{
    
                    return boundaryCheck(subField.boundary , point)
                }
    
            ))
                
            if(ultimoSubcampo !== undefined){
                
                unparsedSlideString += ultimoSubcampo.value;
            }
            
        }

        


    }

    console.log(unparsedSlideString);

    // ahora tendria que hacer el string simplificado y despues de eso deberia empezar con la funcion dinamica
    // la funcion dinamica va tener tres partes
    // 1. el historial: cada parte va a tener un historial de todas las letras anteriores y las va a considerar verdaderas
    // 2. la letra a considerar: cada parte va a tener una letra la cual va a comprobar si esta contenida en la palabra
    //    para esto va a hacer una operacion con cada posible letra siguiente posible y a partir de esto llamara a otras partes
    // 3. el diccionario: cuando una rama termina o cada cierto paso determinado se fija si el programa contiene 



}

function boundaryCheck(boundrys, point){

    return (boundrys[0] < point[0]) && (point[0] < boundrys[2]) && (boundrys[1] < point[1] ) && (point[1] < boundrys[3])
}