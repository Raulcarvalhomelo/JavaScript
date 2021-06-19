/* eslint-disable import/no-anonymous-default-export */
import React from 'react' //{Fragment}


// para usar como Array
export default props =>[
   
    <h1 key='h1'>Bom Dia {props.nome}</h1>,
    <h2 key='h2'>Hoje e  {props.date}</h2>
]




// React.fragment  // mais usado...


// export default props =>

//     <React.Fragment>
//         <h1>Bom Dia {props.nome}</h1>
//         <h2>Agora Sao</h2>
//     </React.Fragment>


// Fragment = para usar somente o fragment, tem que importa o fragment

// export default props =>

//     <Fragment>
//         <h1>Bom Dia {props.nome}</h1>
//         <h2>Agora Sao</h2>
//     </Fragment>

// COM DIV

// export default props =>

//     <div>
//         <h1>Bom Dia {props.nome}</h1>
//         <h2>Agora Sao</h2>
//     </div>