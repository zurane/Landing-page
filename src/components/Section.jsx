import React from 'react';

export default function Section (props) {
    return (
        <section className="how__to__register">
            <img src={props.picture} alt="img" width="100%" />
            <div className="content">
                <h2>{props.title}</h2>
                <p>The plan choice process made simple and
                    straightforward, you are free to make the most of your meeting experience
                    with superior audio and video quality.
                </p>
                <br/>
                <a href="/" className='see__plans__btn'>See plans<span className='material-symbols-outlined'>arrow_forward</span></a>
            </div>
            
        </section>
    )
}
