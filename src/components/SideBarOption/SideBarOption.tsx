import React from 'react'
import {OverridableComponent} from "@material-ui/core/OverridableComponent";
import {SvgIconTypeMap} from "@material-ui/core";
import './SideBarOption.css';
import { useHistory } from 'react-router-dom'
import db from "../../firebase";

interface SideBarOptionProps {
    Icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">>,
    title: string,
    addChannel?: boolean,
    id?: string
}

const SideBarOption: React.FC<SideBarOptionProps> =
    ({
         Icon,
         title,
         addChannel,
         id,
     }) => {
        const history = useHistory();

        const selectHandler = () => {
            if (id) {
                history.push(`/rooms/${id}`);
            }
        }

        const createChannelHandler = () => {
            const channelName = prompt('enter channel name');
            if(channelName) {
                db.collection('rooms').add({
                    name: channelName,
                })
            }
        }

        return (
            <div className="sidebarOption" onClick={addChannel ? createChannelHandler : selectHandler}>
                <div className="icon__container">
                    {Icon ? <Icon className="icon"/> : `#`}
                </div>
                <div className="title__container">
                    {title}
                </div>
            </div>
        );
    }

export default SideBarOption;