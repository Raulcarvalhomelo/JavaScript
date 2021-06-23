import React from 'react'

export default props=>
    <a href={`${props.page}`}>
        <i className={`fa fa-${props.icon}`}></i>{props.title}
    </a>