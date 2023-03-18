import React from "react";

export default function CallToAction (props) {
    return (

        <>
            <section className="cta__section">
                <div className="cta__heading">
                    <h3>Meetings are better with Meetly</h3>
                </div>
                <div className="cta__content">
                    <div className="card">
                        <h4><span className="material-symbols-outlined">security</span>Security</h4>
                        <p>
                            Providing a secure and encrypted environment for individuals or organizations to conduct video calls, conferences and webinars. 
                           Using advanced security protocols, such as end-to-end encryption, to ensure that all communication is protected from unauthorized access. 
                        </p>
                    </div>

                    <div className="card">
                        <h4><span className="material-symbols-outlined">settings_suggest</span>Optimization</h4>
                        <p>
                            The platform constantly monitors the network conditions to ensure the video quality is not impacted by
                            fluctuations in network speed. Furthermore, the platform uses cutting-edge hardware and software to provide smooth and stutter-free playback.
                
                        </p>
                    </div>
                    <div className="card">
                        <h4><span className="material-symbols-outlined">speed</span>Speed</h4>
                        <p>
                            Videos are delivered with the highest possible picture and sound quality, providing a seamless viewing experience for the audience. 
                            This is achieved through various techniques such as dynamic bandwidth adjustment, compression algorithms, and encoding. 
                        </p>
                    </div>
                </div>
        </section>
        
        </>

    )
}