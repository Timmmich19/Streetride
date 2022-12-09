import React from 'react'

export default function FormNumberInput(props) {
    return (
        <div className="form__item">
            {/* htmlFor={props.for} */}
            <label className='form__label'  >{props.child}</label>
            <input {...props} {...props.register} className='form__input' type="number" />
            {/* id={props.for} name={props.for} */}
        </div>
    )
}
