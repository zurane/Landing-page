import React from 'react';

export default function Badge(props) {
    return (
        <section className="badge__section">
            <div className="logos">
                <h3>Trusted by top<br />
                    Brands Globally
                </h3>
                <img src={props.logo} alt="adobe-logo"  width="4%" />
                <img src={props.logo2} alt="forbes-logo" width="5%" />
                <img src={props.logo3} alt="discovery-log0" width="5%" />
                <img src={props.logo4} alt="old_mutual_logo" width="4%" />
                <img src={props.logo5} alt="old_mutual_logo" width="3%" />
            </div>
        </section>
    )
}