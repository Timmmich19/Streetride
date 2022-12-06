import React from 'react'
import Header from '../functional/Header'
import Footer from '../functional/Footer'
import '../../css/testdrive.css';
export default function TestDrive() {
    return (
        <div className='test-drive-page'>
            <Header />
            <div class="test-drive">
                <div className='test-drive__container container'>
                    <div className="test-drive__center">
                        <div class="test-drive__form form">
                            <h1>Форма отправки заявки на Тест Драйв</h1>
                            <form action='#' id='td-form' className='td-form'>
                                <div class="form__item">
                                    <label className='form__label' for='name' >Имя*</label>
                                    <input className='form__input' id='name' name='name' type={"text"} />
                                </div>
                                <div class="form__item">
                                    <label className='form__label' for='mail' >E-mail*</label>
                                    <input className='form__input' id='mail' name='mail' type={"text"} />
                                </div>
                                <div class="form__item">

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
