import React from 'react';

// import { Component } from 'react';

// class Main extends Component {
//     state = {
         
//     }
//     render() {
//         return (
//             <>
//                 <main>
                   
//                 </main>
//             </>
//         )
//     }
// }
// export default Main;

export default function Main(props) {
    return (
        <section className="about__product">
            <div className="content">
                <h2>{props.title}</h2>
                <p>Enjoy frictionless and secure meetings and a user-friendly interface on Meetly.
                    Meet anywhere, anytime, with Meetly's powerful collaboration and communication
                    features.</p>
                <br />
                <a href="/" className='learn__more__btn'>Learn more<span className='material-symbols-outlined'>arrow_forward</span></a>
            </div>
            <img src={props.image} alt="registration-form" width="100%"/>
        </section>
    )
}

