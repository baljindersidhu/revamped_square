import React from 'react';
import './HomePage.css';

const AnalyticsTrend = { positive: '+', negative: '-' };
const ChartType = {bar: 'bar', area: 'area'};

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
                <UploadMediaCard />
            </div>
            <div className="content row centerV">
                <AnalyticsCard chartType={ChartType.bar} headerIcon="ri-download-2-line" />
                <AnalyticsCard chartType={ChartType.area} highlight="100,053" trend={AnalyticsTrend.negative} headerIcon="ri-share-line" />
                <AnalyticsCard chartType={ChartType.area} highlight="180,053" trend={AnalyticsTrend.positive} headerIcon="ri-share-line" />
                <MediaCard />
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

class UploadMediaCard extends React.Component{
    render(){
        return (
            <div className="UploadMediaCard Card column">
                <div className="header row reverse centerV">
                    <div className="iconBtn"><i className="ri-close-line"></i></div>
                    <div className="fillParent"></div>
                    <div className="heading">Drag and drop images, paste embed, enter text and link</div>
                    <div className="avatar"><img src="images/user-avatar.png" alt="user_avatar" /></div>
                </div>
                <div className="fillParent"></div>
                <div className="row centerV">
                    <div className="cancelBtn">Cancel</div>
                    <div className="fillParent"></div>
                    <div className="row centerV btn dark">
                        <div className="label">Upload</div>
                        <div className="icon"><i className="ri-gallery-upload-line"></i></div>
                    </div>
                    <div className="row centerV btn">
                        <div className="label">Quick Darg</div>
                        <div className="icon"><i className="ri-arrow-right-line"></i></div>
                    </div>
                </div>
            </div>
        );
    }
}

class AnalyticsCard extends React.Component{

    getHeader(){
        if(this.props.trend !== void 0 && this.props.trend === AnalyticsTrend.positive){
            return (
                <div className="row centerV heading">
                    <div>{this.props.highlight || 'Analytics Block'}</div>
                    <i className="positive ri-arrow-up-circle-line"></i>
                </div>
            );
        } 
        
        else if(this.props.trend !== void 0 && this.props.trend === AnalyticsTrend.negative){
            return (
                <div className="row centerV heading">
                    <div>{this.props.highlight || 'Analytics Block'}</div>
                    <i className="negative ri-arrow-down-circle-line"></i>
                </div>
            );
        } 
        
        else{
            return (<div className="heading">{this.props.highlight || 'Analytics Block'}</div>);
        }
    }

    getChart(){
        if(this.props.chartType === ChartType.bar){
            return <BarChart />;
        }else if(this.props.chartType === ChartType.area){
            return <AreaChart />;
        }
    }

    render(){
        return(
            <div className="Card AnalyticsCard">
                <div className="header row centerV">
                    {this.getHeader()}
                    <div className="fillParent"></div>
                    <div className="iconBtn"><i className={this.props.headerIcon}></i></div>
                </div>
                <div className="chart">
                    {this.getChart()}
                </div>
            </div>
        );
    }
}

class BarChart extends React.Component{
    
    getBars(){
        let bars = new Array(7).fill(0);
        return bars.map((bar, key) => <React.Fragment key={key}><div className="bar positionRelative"></div><div className="fillParent"></div></React.Fragment>);
    }

    render(){
        return(
            <div className="row BarChart">
                <div className="ticks column">
                    <div className="fillParent">300</div>
                    <div className="fillParent">100</div>
                    <div className="fillParent"></div>
                    <div>0</div>
                </div>
                <div className="fillParent"></div>
                {this.getBars()}
            </div>
        );
    }
}

function AreaChart(){
    
    return(
        <div className="AreaChart">
            <svg height="0" width="0">
                <defs>
                    <clipPath className="areaChartPath">
                        <path xmlns="http://www.w3.org/2000/svg" d="M640 291.07L640 90.01C576.36 120.39 536.58 139.38 520.67 146.97C498.24 157.68 471.72 155.08 451.8 140.23C439.64 131.16 433.92 126.9 421.35 117.53C403.97 104.57 379.69 106.42 364.47 121.87C337.42 149.33 281.86 205.74 254.56 233.44C240.55 247.66 217.67 247.83 203.45 233.82C197.48 227.94 200.26 230.68 193.02 223.55C182.77 213.44 165.95 214.73 157.34 226.27C147.69 239.23 156.29 227.68 151.96 233.5C124.96 269.72 82.43 291.07 37.25 291.07C32.29 291.07 19.87 291.07 0 291.07L640 291.07Z"/>
                    </clipPath>
                </defs>
            </svg>
            <div className="chart"></div>
        </div>
    );
}

class MediaCard extends React.Component{

    getRecentMedia(){
        let mediaDir = new Array(4).fill(1);
        mediaDir = mediaDir.map((media, index) => `images/pattern${++index}.jpg`);
        return mediaDir.map((media, key) => <div key={key} className="recentMedia fillParent" style={{backgroundImage: `url(${media})`}}></div>);
    }

    render(){
        return(
            <div className="Card MediaCard">
                <div className="header row centerV">
                    <div className="heading">New Media</div>
                    <div className="fillParent"></div>
                    <div className="iconBtn"><i className="ri-share-line"></i></div>
                </div>

                <div className="row centerH">
                    <div className="userAvatar">
                        <img src="images/friend0.png" alt="Friend" aria-label="Friend pic" />
                    </div>
                </div>
                <div className="avatarInfo textCenter">
                    <div className="avatarName">Tommy Barnes</div>
                    <div className="lastActive">2 mins ago</div>
                </div>
                <div className="avatarMedia row centerV">
                    <div className="row centerV centerH fixed recentMedia fillParent"><i className="ri-add-line"></i></div>
                    {this.getRecentMedia()}
                </div>

            </div>
        );
    }
}