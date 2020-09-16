import React, {useEffect, useState} from 'react'
import './SideBar.css'
import {
    Add,
    Bookmark,
    Create,
    Drafts, ExpandLess, ExpandMore,
    FiberManualRecord,
    FileCopy,
    Inbox,
    InsertComment,
    PeopleAlt
} from "@material-ui/icons";
import {APP_NAME} from "../../constants";
import SideBarOption from "../SideBarOption/SideBarOption";
import db from "../../firebase";

interface SideBarProps {
}

interface roomsType {
    id: string,
    name: string
}

const SideBar: React.FC<SideBarProps> = ({}) => {
    const[channels, setChannels] = useState<roomsType[]>([]);
    useEffect(() => {
        db.collection('rooms').onSnapshot(snapshot => {
        setChannels(snapshot.docs.map(doc => ({
            id: doc.id,
            name: doc.data().name
        })));
        });
    },[])

    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <div className="sidebar__info">
                    <h2>{APP_NAME}</h2>
                    <h4><FiberManualRecord className="record"/>Neil Sinsua</h4>
                </div>
                <Create className="create"/>
            </div>
            <div className="sidebar__list">
                <SideBarOption Icon={InsertComment} title="Threads"/>
                <SideBarOption Icon={Bookmark} title="Saved"/>
                <SideBarOption Icon={FileCopy} title="Files"/>
                <SideBarOption Icon={PeopleAlt} title="Friends" />
                <SideBarOption Icon={ExpandLess} title="Show Less"/>
            </div>
            <div className="sidebar__channel">
                {/*Connect to db and list channels*/}
                <SideBarOption Icon={ExpandMore} title="Channels"/>
            </div>
            <SideBarOption Icon={Add} title="Add Channel" addChannel />
            {channels.map(channel => <SideBarOption title={channel.name} id={channel.id} key={channel.id}/>)}
        </div>
    );
}

export default SideBar