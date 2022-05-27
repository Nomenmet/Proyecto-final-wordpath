
export function pathCreatror(path){

    let curatedPath = [];

    path.forEach(punto => {

        if(punto[0] >= 0 && punto[1] >= 0){

            curatedPath.push(punto);

        }
        
    });

    return curatedPath;


}