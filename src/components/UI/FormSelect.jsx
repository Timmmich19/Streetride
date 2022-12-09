import React from 'react'

export default function FormSelect(props) {
    return (
        <div className="form__item">
            <div className="form__label"><span>{props.child}Выберете модель</span></div>
            <select {...props.register} className='form__select' name={props.for} id={props.for}>
                <option value={props.selected} defaultValue="selected">{props.selected}</option>
                {props.other.map((el) => (<option key={el} value={el} >{el}</option>))}
            </select>
        </div>
    )
}
