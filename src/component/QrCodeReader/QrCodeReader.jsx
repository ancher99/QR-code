import { useState } from 'react';
import { QrReader } from 'react-qr-reader';
import { READ_DATA } from '../../constans';
import style from './qrCodeReader.module.css'


export const QrCodeReader = () =>{

    const [result, setResult] = useState('')
    const onResultHandler = (result) =>{
        if(!result) return

        const prevData = JSON.parse(localStorage.getItem(READ_DATA) || '[]')

        localStorage.setItem(READ_DATA, JSON.stringify([...prevData, result.text]))

        setResult(result.text)
    }


    return(
        <div className={style.container}>
            <QrReader
        scanDelay={500}
        onResult={onResultHandler}
        containerStyle={{ width:'300px'}}
        className={style.qr__reader}
            />
            <p className={style.text}>{result}</p>
        </div>
    )
}