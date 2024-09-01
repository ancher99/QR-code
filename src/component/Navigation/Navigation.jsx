import { Link } from "react-router-dom";
import style from './navigation.module.css'

export const Navigation = () =>{
    

    return (
        <div className={style.container}>
            <Link to={'/QR-code/generate'} className={style.text}>Генерировать QR</Link>
            <Link to={'/QR-code/reader'} className={style.text}>Сканировать QR</Link>
            <Link to={'/QR-code/generateHistory'} className={style.text}>Историян генерирования</Link>
            <Link to={'/QR-code/readHistory'} className={style.text}>История сканирования</Link>
        </div>
    )
}