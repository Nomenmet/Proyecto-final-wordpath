export function detectarLetra(path, boundaries, index){
    
    if(index !== undefined){

        for(let i = 0 ; i< boundaries.length; i++){

            let boundaryAhora = boundaries[i];
    
    
            if(path[0] > boundaryAhora[0] && path[0] < boundaryAhora[2] ){
                if(path[1] > boundaryAhora[1] && path[1] < boundaryAhora[3] ){
    
                    return i;
    
                }
    
            }
    
        }

    }else{

        if(path[0] > boundaries[index][0] && path[0] < boundaries[index][2] ){
            if(path[1] > boundaries[index][1] && path[1] < boundaries[index][3] ){

                return i;

            }

        }

    }


    return ""

}