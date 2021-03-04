import { Children } from "react";
import Menu from '../Menu/Menu';
const PrincipalLAyout = ({children}) =>(
    <>
        <Menu className="container" />
        {children}
    </>
)

export default PrincipalLAyout;
