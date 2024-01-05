import React from 'react';
import './Contact.css'
import { images } from '../../Constants';

const Contact = () => {
    return (
        <section className="contact">
            <h1>
                <span>From app to heart</span><br />
                reach out and let's dine together! 📲🍽️
            </h1>
            <div className="top">
                <div className="top__msg">
                    <div className="msg-img">
                        <img src={images.email} alt="" />
                    </div>
                    <h3>Contact Me via Email</h3>
                </div>
                <div className="top__msg">
                    <div className="msg-img">
                        <img src={images.mobile} alt="" />
                    </div>
                    <h3>Contact Me via Phone no</h3>
                </div>
            </div>

            <div className="bottom">
                <div className="bottom__input">
                    <input type="text" placeholder="Your Name" />
                </div>
                <div className="bottom__input">
                    <input type="email" placeholder="Your Email" />
                </div>
                <div className="bottom__input">
                    <textarea name="message" placeholder="Your Message"></textarea>
                </div>
                <button>Send Message</button>
            </div>
        </section>
    );
};

export default Contact;
