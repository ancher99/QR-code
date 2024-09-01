import { READ_DATA } from "../../constans"
import { QRCodeSVG } from "qrcode.react"
import style from './qrReadHistory.module.css'

export const ReadHistory = () => {
    const data =JSON.parse(localStorage.getItem(READ_DATA) || '[]')
    
    return(
        <div className={style.component}>
            {data.map((text)=>(
                <>
                <QRCodeSVG value={text} className={style.qr__reader}/>
                <p key={text} className={style.text}>{text}</p>
            </>
        ))}</div>
    )
}