
export function pathCreatror(path, bounds){

    let curatedPath = [];



    path.forEach(punto => {

        if((punto[0] >= bounds.left && punto[0] <= bounds.right) && (punto[1] >= bounds.top && punto[1] <= bounds.bottom)){

            curatedPath.push(punto);

        }
        
    });

    return curatedPath;


}