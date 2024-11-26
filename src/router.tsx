import { BrowserRouter, Route, Routes } from "react-router-dom";
import IndexPage from "./views/indexPage";


export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<IndexPage />} />
            </Routes>
        </BrowserRouter>
    )
}
