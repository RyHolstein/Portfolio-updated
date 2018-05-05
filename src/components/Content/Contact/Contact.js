import React from 'react';
import './Contact.css';

const contact = () => {
    return (
        <div classname="contact__holder">
            <p className="contact__greeting"> 
                &lt;greeting&gt;<span>Hello</span>&lt;&#47;greeting&gt;
            </p>
            <p className="contact__about-me">
                &lt;about&gt;My name is Ryan Holstein I’m 24 year old freelance FullStack developer from Los Angeles, California. Currently looking for opportunities in the Los Angeles Area.&lt;&#47;about&gt;
            </p>
            <div className="contact__face__holder"></div>
            <p className="contact__resume">Résumé</p>
            <p className="contact__intro--email">Feel free to contact me for anything </p>
            <p className="contact__email"> &lt;email&gt;<span>me@ryanholste.in</span>&lt;&#47;email&gt;</p>
        </div>
    );
}


export default contact;