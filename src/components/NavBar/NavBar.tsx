import React from 'react';
import './NavBar.css';
import {Avatar} from "@material-ui/core";
import {AccessTime, Help, Search} from "@material-ui/icons";
import {APP_NAME} from "../../constants";

interface NavBarProps {

}

const NavBar: React.FC<NavBarProps> = ({}) => {
    return (
        <div className="header">
            <div className="header__left">
                <Avatar/>
                <AccessTime className="time"/>
            </div>
            <div className="header__middle">
                <Search/>
                <input placeholder={`Search ${APP_NAME}...`} className="input"/>
            </div>
            <div className="header__right">
                <Help className="help"/>
            </div>
        </div>
    );
}

export default NavBar