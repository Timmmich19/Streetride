import React from 'react'
import FormInput from '../UI/FormInput'
import FormSelect from '../UI/FormSelect'
import FormTextArea from '../UI/FormTextArea'
import { useForm } from 'react-hook-form'

export default function TestDriveForm() {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm()

    const onSubmit = (data) => {
        alert(JSON.stringify(data))
    }
    return (
        <section className="test-drive">
            <div className='test-drive__container container'>
                <div className="test-drive__center">
                    <div className="test-drive__form form">
                        <h1>Форма отправки заявки на Тест Драйв</h1>
                        <form onSubmit={handleSubmit(onSubmit)} action='#' id='td-form' className='td-form'>
                            <FormInput register={register('name', { required: true, minLength: { value: 5, message: 'Не меньше 5 символов' } })} for='name' child='Имя*' />
                            <div className="form__warn">
                                {errors?.name && <span>{errors?.name?.message || "Поле обязательно к заполнению!"}</span>}
                            </div>
                            <FormInput register={register('age', { required: true })} for='age' child='Возраст*' />
                            <FormSelect child='Выберете модель' for='model' selected='Shelby' other={['Mach1', 'Mach 1 Premium', 'EcoBoost Fastback', 'EcoBoost Premium']} />
                            <FormInput register={register('mail', { required: true })} for='mail' child='E-mail*' />
                            <div className="form__item">
                                <div register={register('select')} className="options">
                                    <div className="form__label"><span>Хотите водить лично или нанять водителя?</span></div>
                                    <div className="options__item">
                                        <input value="accept" id='accept' className='options__input' type="radio" name='licence' defaultChecked />
                                        <label htmlFor="accept" className='options__label'><span>Вести Лично (при наличии водительских прав)</span></label>
                                    </div>
                                    <div className="options__item">
                                        <input value="denied" id='denied' className='options__input' type="radio" name='licence' />
                                        <label htmlFor="denied" className='options__label'><span>С водителем (при отсутствии водительских прав)</span></label>
                                    </div>
                                </div>
                            </div>
                            <FormTextArea for='message' />
                            <div className="form__item">
                                <div className="form__label"><span>Прикрепите фото водительских прав при пункте (Вести лично) </span></div>
                                <div className="file">
                                    <div className="file__item">
                                        <input accept='.jpg, .png, .gif' type="file" id='image' name='image' className='file__input' />
                                        <div className="file__button">Выбрать</div>
                                    </div>
                                    <div className="file__preview"></div>
                                </div>
                            </div>
                            <div className="form__item">
                                <div className="checkbox">
                                    <input id='agreement' type="checkbox" name='agreement' className='checkbox__input' />
                                    <label className='checkbox__label' htmlFor="agreement">Я даю свое согласие на обработку персональных данных, <br></br> в соответствии с условиями компании</label>
                                </div>
                            </div>
                            <button type='submit' className='form__button'>Отправить заявку</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
