import React from 'react';
import './Sidenav.css';

export default function Sidenav(){

    const actions = ["Home", "Dashboard", "Pages", "Plugins", "Post", "Support Center", "Media", "Appearance", "Ecommerce"];
    let icons = ["home-smile-2", "sound-module", "pages", "plug-2", "discuss", "question-answer", "disc", "mouse", "shopping-basket-2"];
    icons = icons.map(icon => `ri-${icon}-line`);

    function getActions(){
        return actions.map((action, index) => getAction(icons[index], action, index));
    }

    function getAction(actionIcon, actionName, key){
        return (
            <div className="row centerV action" key={key}>
                <i className={actionIcon}></i>
                <div className="actionName">{actionName}</div>
            </div>
        );
    }

    return (
        <div className="positionAbsolute column Sidenav">
            {getActions()}
            <div className="fillParent"></div>
            <div className="column centerV centerH customerCareBtn"><i className="ri-customer-service-2-line"></i></div>
        </div>
    );
}