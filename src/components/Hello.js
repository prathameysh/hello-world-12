import React from "react";

export const Hello = () => {
    //*with JSX
    // return (
    //     <div>
    //         <h1>
    //             Hello Prathamesh
    //         </h1>
    //     </div>
    // )

    //*without JSX
    return React.createElement('div', 
        {id:'hello', className: 'dummyClass'},
        React.createElement('h1', null, 'Hello Prat')
    )
}