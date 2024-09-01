import { Link } from "react-router-dom";
import style from './navigation.module.css'

export const Navigation = () =>{
    

    return (
        <div className={style.container}>
            <Link to={'/generate'} className={style.text}>Генерировать QR</Link>
            <Link to={'/reader'} className={style.text}>Сканировать QR</Link>
            <Link to={'/generateHistory'} className={style.text}>Историян генерирования</Link>
            <Link to={'/readHistory'} className={style.text}>История сканирования</Link>
        </div>
    )
}