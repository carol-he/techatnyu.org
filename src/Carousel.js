/**
 * Created by adisanarula on 2/24/17.
 */
import React from 'react';
import Slider from 'react-slick';

// TODO:: create dynamic event cards

// var eventCard = React.createClass({
//     render() {
//         return(
//             <div className="event-card">
//                 <p className="event-title"> GHC MEETUP </p>
//                 <p className="event-team"> After Hours </p>
//                 <p className="event-description">
//                     After Hours is back with the GHC Edition—anybody attending Grace Hopper from NYU is
//                     welcome to attend so we can all get to meet each other before the celebration.
//                 </p>
//                 <hr></hr>
//                     <p className="event-date"> 10.12 </p>
//             </div>
//         );
//     }
// });

var SimpleSlider = React.createClass({

    render: function () {
        var settings = {
            dots: true,
            slidesToShow: 3,
            arrows:true
        };
        return (
            <div>
                <Slider {...settings}>
                    <div>
                        <div className="event-card">
                            <p className="event-title"> GHC MEETUP </p>
                            <p className="event-team"> After Hours </p>
                            <p className="event-description">
                                After Hours is back with the GHC Edition—anybody attending Grace Hopper from NYU is
                                welcome to attend so we can all get to meet each other before the celebration.
                            </p>
                            <hr></hr>
                            <p className="event-date"> 10.12 </p>
                        </div>
                    </div>
                    <div>
                        <div className="event-card">
                            <p className="event-title"> GHC MEETUP </p>
                            <p className="event-team"> After Hours </p>
                            <p className="event-description">
                                After Hours is back with the GHC Edition—anybody attending Grace Hopper from NYU is
                                welcome to attend so we can all get to meet each other before the celebration.
                            </p>
                            <hr></hr>
                            <p className="event-date"> 10.12 </p>
                        </div>
                    </div>
                    <div>
                        <div className="event-card">
                            <p className="event-title"> GHC MEETUP </p>
                            <p className="event-team"> After Hours </p>
                            <p className="event-description">
                                After Hours is back with the GHC Edition—anybody attending Grace Hopper from NYU is
                                welcome to attend so we can all get to meet each other before the celebration.
                            </p>
                            <hr></hr>
                            <p className="event-date"> 10.12 </p>
                        </div>
                    </div>
                </Slider>
            </div>
        );
    }
});

export default SimpleSlider;

