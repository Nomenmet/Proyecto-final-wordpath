export function detectarLetra(path, boundaries, index){

    for(let i = 0 ; i< boundaries.length; i++){

        let boundaryAhora = boundaries[i];


        if(path[0] > boundaryAhora[0] && path[0] < boundaryAhora[2] ){
            if(path[1] > boundaryAhora[1] && path[1] < boundaryAhora[3] ){

                return i;

            }

        }

    }

    return ""

}