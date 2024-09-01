import { GENERATE_DATA } from "../../constans"
import { QRCodeSVG } from "qrcode.react"
import style from './generateHistory.module.css'

export const GenerateHistory = () => {
    const data =JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]')
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