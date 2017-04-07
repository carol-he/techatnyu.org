/**
 * Created by adisanarula on 2/28/17.
 */
import React from 'react';

const constantLinks = {
    facebook: "https://www.facebook.com/TechatNYU/",
    twitter: "https://twitter.com/techatnyu",
    medium: "https://medium.com/@TechatNYU",
    instagram: "https://www.instagram.com/techatnyu/",
    rsvp: "http://rsvp.techatnyu.org/",
    resumes: "https://balloon.io/tnyuresumes"
}; 

var Footer = React.createClass({
    render: function() {
        return(
            <div>
                <hr></hr>
                <div id="footer-content">
                    <div id="copyright"> ©Tech@NYU, 2016 </div>
                    <div id="social-handles">
                        <a href = {constantLinks.facebook} target="_blank">Facebook</a>
                        <a href= {constantLinks.twitter} target="_blank">Twitter</a>
                        <a href= {constantLinks.medium} target="_blank">Medium</a>
                        <a href= {constantLinks.instagram} target="_blank">Instagram</a>
                    </div>
                </div>
            </div>
        );
    }
});

const NotFound = () => (
    <div>
        <img id="dots" src="/img/dots.png"/>
        <h1 className="page-title">404. Page Not Found</h1>
    </div>
)

const Navs =  {
    links: constantLinks,
    footer: Footer,
    notFound: NotFound,
}

export default Navs;