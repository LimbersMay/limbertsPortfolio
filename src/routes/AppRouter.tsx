import {Route, Routes} from "react-router-dom";
import {HomePage} from "../portfolio/pages/HomePage.tsx";

export const AppRouter = () => {

    return (
        <Routes>
            <Route path="/" element={<HomePage />}/>
        </Routes>
    )
}
