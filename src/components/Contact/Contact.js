import React from 'react';
import './Contact.css';
import { FaMapMarkedAlt, FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdEmail, MdPhoneIphone } from 'react-icons/md';

export default function Contact() {
    return (
        <div className="contact-section" id="contact">
            <div className="container contact-container">
                <section className="contact-card">
                    <div className="contact-card-body">
                        <FaMapMarkedAlt className="contact-icon" />
                        <h4>LOCATION</h4>
                        <div className="card-line" />
                        <p>Austin, TX</p>
                    </div>
                </section>

                <section className="contact-card">
                    <div className="contact-card-body">
                        <MdEmail className="contact-icon" />
                        <h4>EMAIL</h4>
                        <div className="card-line" />
                        <p>tim@timstark.dev</p>
                    </div>
                </section>

                <section className="contact-card">
                    <div className="contact-card-body">
                        <MdPhoneIphone className="contact-icon" />
                        <h4>PHONE</h4>
                        <div className="card-line" />
                        <p>+1 (281) 732-1836</p>
                    </div>
                </section>
            </div>
            <div className="social">
                <a href="https://www.linkedin.com/in/tim-stark-00722a113/" className="icon-button" target="_blank">
                    <FaLinkedin />
                </a>
                <a href="https://www.github.com/timstarkk/" className="icon-button" target="_blank">
                    <FaGithub />
                </a>
            </div>
        </div>
    )
}
