
export function pathCreatror(path, bounds, normalCanvas){

    // bounds tiene top, bottom, left, right, width y height
    let curatedPath = [];


    const normalizingFactorX = normalCanvas.width/bounds.width;
    const normalizingFactorY = normalCanvas.height/bounds.height;


    path.forEach(punto => {

        if((punto[0] >= bounds.left && punto[0] <= bounds.right) && (punto[1] >= bounds.top && punto[1] <= bounds.bottom)){

            punto[0] = punto[0] * normalizingFactorX;
            punto[1] = punto[1] * normalizingFactorY;

            curatedPath.push(punto);

        }
        
    });


    return curatedPath;


}