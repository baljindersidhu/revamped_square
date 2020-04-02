import React from 'react';
import './HomePage.css';

export default function HomePage(){
    const tags = ["travel", "uidesign"];
    const newsCardHeading = "WordPress Events & News";
    const newsCardDescription = "All the rumours have finally died down and many skeptics have tightened their lips.";
    
    return (
        <div className="HomePage">
            <HomePageView />
            <div className="content row centerV">
                <PictureCard tags={tags} caption="images/pattern4.jpg" />
                <NewsCard heading={newsCardHeading} description={newsCardDescription} caption="covers/cover-2.jpg" />
            </div>
        </div>
    );
}

class HomePageView extends React.Component{
    render(){
        return (
            <div className="row centerV viewSelector">
                <div className="row centerV views">
                    <div className="view">Overview</div>
                    <div className="view">Customization</div>
                </div>
                <div className="fillParent"></div>
                <i className="ri-menu-line"></i>
                <i className="ri-layout-grid-fill"></i>
            </div>
        );
    }
}

class PictureCard extends React.Component{

    render(){
        let tags = this.props.tags.map(tag => '#'+tag).join(' ');
        return (
            <div className="Card PictureCard positionRelative" style={{backgroundImage: `url(${this.props.caption})`}}>
                <div className="content">
                    <div className="header row reverse">
                        <div className="iconBtn"><i className="ri-arrow-right-line"></i></div>
                        <div className="iconBtn"><i className="ri-arrow-left-line"></i></div>
                    </div>

                    <div className="title">Your Recent Drafts</div>
                    <div className="tags">{tags}</div>
                    <div className="subtitle">Edit now</div>
                </div>
            </div>
        );
    }
}

class NewsCard extends React.Component{

    render(){
        return (
            <div className="Card NewsCard positionRelative">
                <div className="positionAbsolute bg" style={{backgroundImage: `url(${this.props.caption})`}}></div>
                <div className="positionRelative">
                    <div className="header row reverse">
                        <div className="iconBtn"><i className="ri-share-line"></i></div>
                    </div>

                    <div className="heading">{this.props.heading}</div>
                    <div className="description">{this.props.description}</div>
                </div>
            </div>
        );
    }
}