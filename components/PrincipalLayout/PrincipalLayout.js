import { Children } from "react";
import Menu from '../Menu/Menu';
const PrincipalLAyout = ({children}) =>(
    <>
        <Menu />
        {children}
    </>
)

export default PrincipalLAyout;
