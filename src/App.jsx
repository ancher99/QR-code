import { Routes, Route, Outlet, Link } from "react-router-dom";
import { Navigate } from "react-router-dom"
import { QrCodeGenerate } from "./component/QrCodeGenerate/QrCodeGenerate"
import { QrCodeReader } from "./component/QrCodeReader/QrCodeReader"
import { Navigation } from "./component/Navigation/Navigation"
import { GenerateHistory } from "./component/GenerateHistory/GenerateHistory";
import { ReadHistory } from "./component/ReadHistory/ReadHistory";
import style from './app.module.css'

export const App = () =>{
    return(
        <div className={style.container}>
            <Navigation />

            <Routes>
            <Route path="/generate" element={<QrCodeGenerate />} />
            <Route path="/reader" element={<QrCodeReader />} />
            <Route path="/generateHistory" element={<GenerateHistory />} />
            <Route path="/readHistory" element={<ReadHistory />} />
            </Routes>
        </div>


        
        // <QrCodeGenerate />
        // <QrCodeReader />
    )
}