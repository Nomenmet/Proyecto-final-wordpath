
//hay que reestructurar el codigo que repite mucho
// hay problemas de NaNs, solucionar

export function averageCurvature(path){

    // asumiendo que path [ [111, 222], [213, 23], [12, 321], ...]

    //aproximacion derivada = path[i++][0]-path[i][0] porque es la diferencia 
    //si hubiera tiempo en esto tendria que hacer path[i++][0]-path[i][0]/tiempo

    let derivadaEnCadaPunto = derivada(path);

    let derivadaEnCadaPuntoNormalizada = normalize(derivadaEnCadaPunto); //T(t)

    let derivadaDelNormalTangente = derivada(derivadaEnCadaPuntoNormalizada); //derivada de T(t)

    let magnitudDerivadaDeT = magnitud(derivadaDelNormalTangente); //magnitud de la derivada de T(t)
    let magnitudDerivadaEnCadaPunto = magnitud(derivadaEnCadaPunto);

    let curvaturaEnCadaPunto = magnitudDerivadaDeT.map(function (normalT, idx) {
        return normalT / magnitudDerivadaEnCadaPunto[idx];
      }
    )


    return curvaturaEnCadaPunto
}


//
//      derivada path
//     ---------------
//      magnitud derivada path
//
//

// eso es T(t)

//
//  derivada T(t)
//
//


// magnitud de la derivada de T(t)

// magnitud derivada path

// curvatura = magnitud de la derivada de T(t) / magnitud derivada path

function derivada(path){

    let derivada = [];

    for(let i = 0; i < path.length-1; i++){


        derivada.push(

            [        
                path[1+i][0]-path[i][0],

                path[1+i][1]-path[i][1]
            ]

        )
        


    }

    return derivada;
}

function magnitud(vectores){

    let normales = [];

    for(let i = 0; i < vectores.length; i++){

        normales.push( Math.sqrt(vectores[i][0]^2  + vectores[i][1]^2) )

    }

    return normales;

}




function normalize (derivativePoints){

    let NormalizedDerivative = [];


    for(let i = 0; i < derivativePoints.length; i++){

        //aca estaria lindo mandarse un fast inverse square root si no me diera paja hacer bit manipulation

        let normalFactor = Math.sqrt(derivativePoints[i][0]^2  + derivativePoints[i][1]^2)

        NormalizedDerivative.push(

            [
                derivativePoints[i][0]/normalFactor,
                derivativePoints[i][1]/normalFactor
            ]
            

        )


    }

    return NormalizedDerivative;

}