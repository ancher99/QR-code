import {QRCodeSVG} from 'qrcode.react';
import { useState } from 'react';
import { GENERATE_DATA } from '../../constans';
import style from './qrCodeGenerator.module.css'

export const QrCodeGenerate = () =>{
    const [value, setValue] = useState('')
    const [result, setResult] = useState('Краткость - сестра таланта')

    const onChangeHandler = (e) =>{
        setValue(e.target.value)
    }

    const onClickHandler = () =>{
        const prevData = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]')

    localStorage.setItem(
        GENERATE_DATA, 
        JSON.stringify([...prevData, value]))

        setResult(value)
        setValue('')
    }

    return(
        <div className={style.container}>
            <QRCodeSVG 
                value={result} 
                className={style.qr}
            />
            <input 
                type="text"
                placeholder='Введите текст...'
                value={value} 
                onChange={onChangeHandler}
                className={style.form__input }/>
            <button 
            onClick={onClickHandler}
            className={style.text}>
                Генерировать 
            </button>
        </div>
    )
}