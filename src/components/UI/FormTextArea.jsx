import React from 'react'

export default function FormTextArea(props) {
    return (
        <div className="form__item">
            <label className='form__label'>Сообщение</label>
            <textarea {...props.register} {...props} className='form__textarea' />
        </div>
    )
}
