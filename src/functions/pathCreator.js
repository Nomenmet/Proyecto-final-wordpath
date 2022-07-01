
export function pathCreatror(path, bounds){

    // bounds tiene top, bottom, left, right, width y height
    let curatedPath = [];

    const normalCanvas = {width:1000, height:450};

    const normalizingFactorX = bounds.width/normalCanvas.width;
    const normalizingFactorY = bounds.height/normalCanvas.height;


    path.forEach(punto => {

        if((punto[0] >= bounds.left && punto[0] <= bounds.right) && (punto[1] >= bounds.top && punto[1] <= bounds.bottom)){

            punto[0] = punto[0] * normalizingFactorX;
            punto[1] = punto[1] * normalizingFactorY;

            curatedPath.push(punto);

        }
        
    });


    return curatedPath;


}