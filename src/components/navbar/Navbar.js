import React from 'react';
import './Navbar.css';

export default function Navbar(){
    return (
        <div className="positionAbsolute row centerV Navbar">
            <div className="brandName">Square</div>
            <div className="positionRelative brandIcon"></div>

            <div className="row centerV tabs">
                <div className="positionRelative tab">Discuss</div>
                <div className="positionRelative tab">Browse</div>
            </div>

            <div className="fillParent"></div>
            <div className="row centerV globalSearch">
                <input type="text" placeholder="Search Article, Media, Story"></input>
                <div className="icon"><i className="ri-search-line"></i></div>
            </div>
            <div className="fillParent"></div>

            <div className="userAvatar">
                <img src="images/user-avatar.png" aria-label="user avatar image" alt="user_avatar"/>
            </div>

            <div className="notificationIcon positionRelative"><i className="ri-notification-2-line"></i></div>

            <div className="row centerV btn">
                <div className="label">New</div>
                <div className="icon"><i className="ri-add-line"></i></div>
            </div>

        </div>
    );
}