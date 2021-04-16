import { React } from "react";
import AppBar from '@material-ui/core/AppBar';
import MenuItems from '../menu/MenuItems';



const Header = () => {


    return (
        <div>
            <AppBar color="primary">
                <MenuItems/>
            </AppBar>
  
        </div>
    )
}

export default Header;
