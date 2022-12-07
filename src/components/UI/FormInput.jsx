import React from 'react'

export default function FormInput(props) {
    return (
        <div className="form__item">
            {/* htmlFor={props.for} */}
            <label className='form__label'  >{props.child}</label>
            <input {...props.register} className='form__input' type="text" />
            {/* id={props.for} name={props.for} */}
        </div>
    )
}
