export function fieldInterpreter(subfields, normalCanvas)
    {

    return subfields.map(subfield => {
        return {

            boundary:[ 
                subfield.boundary[0]*normalCanvas.width,
                subfield.boundary[1]*normalCanvas.height,
                subfield.boundary[2]*normalCanvas.width,
                subfield.boundary[3]*normalCanvas.height,
            ],

            value:subfield.value,

        } 
    })

}