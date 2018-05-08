import React from 'react';
import './Contact.css';
import resume from '../../../assets/Resume.pdf'

const contact = () => {
    return (
        <div className="contact__holder">
            <p className="contact__greeting"> 
                &lt;greeting&gt;<span className="noshow"></span><span>Hello</span><span className="noshow"></span>&lt;&#47;greeting&gt;
            </p>
            <p className="contact__about-me">
                &lt;about&gt;My name is Ryan Holstein I’m 24 year old freelance FullStack developer from Los Angeles, California. Currently looking for opportunities in the Los Angeles Area.&lt;&#47;about&gt;
            </p>

        
        
            <div></div>
            <a href ={resume} target='_blank'>
                <div className="contact__resume__holder">
                    <p className="contact__resume c_first">&lt; Résumé &#47;&gt;</p>
                    <p className="contact__resume c_second">&lt; Résumé &#47;&gt;</p>
                    <p className="contact__resume c_third">&lt; Résumé &#47;&gt;</p>
                </div>
            </a>

            <p className="contact__intro--email">Feel free to contact me for anything </p>
            <p className="contact__email"> &lt;email&gt;<span className="noshow"></span><span>me@ryanholste.in</span><span className="noshow"></span>&lt;&#47;email&gt;</p>
        </div>
    );
}


export default contact;