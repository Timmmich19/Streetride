import React from 'react'

export default function FormTextArea(props) {
    return (
        <div className="form__item">
            <label className='form__label' htmlFor={props.for} >Сообщение</label>
            <textarea className='form__textarea' id={props.for} name={props.for} />
        </div>
    )
}
