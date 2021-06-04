import React from 'react'

const Footer = () => {
    return (
        <div className="footer_bg">
            <div className="footer_box">
                <h1 className="footerbox_heading">Yes. <span className="footerbox_headerColor"><span className="footer_border">You can do</span> this.</span></h1>
            </div>
            <div className="footer_Flex">
                <div className="footer_borders">
                    <p className="footerpara1">After working through CU, Miguel received a new job offer. The company told him specifically why he was chosen:</p>
                    <p className="footerpara2">"Your charisma and ability to connect with everyone are rare and of great value to our company"</p>
                </div>
                <div className="footer_borders2">
                    <p className="footerfont">“CU was one of the best investments in my life! The content and the action guide have changed me radically. In private and business life. Thanks to your teaching, I learned the ability to build deep connections and friendships. It was worth the money.”</p>
                    <img className="footerimg" src="./Ellipse 5.svg" alt="no image" />
                    <span className="footerName"><b>Miguel R.(Engineer)</b></span>
                </div>
            </div>
            <h1 className="footerheadings">You'<span className="borderBottomfooter">ve got</span> this.</h1>
            <button className="footer_btn">Level-up my charisma</button>
            <br />
            <div className="Footer_app">
                <div className="footer_Flex2">
                    <div className="wwq">
                        <p className="headd">Over 5,000 students have changed their lives. Your turn.</p>
                        <p className="parafooter">The best time to start was yesterday, but we’ll give you a pass and let you start today 😉</p>
                        <a className="hred" href="#">Contact US</a><br />
                        <a className="hred" href="#">Privacy Policy</a><br />
                        <a className="hred" href="#">Terms & Condition</a>
                    </div>
                    <div className="wwq2">
                        <div className="mmmnh">
                            <div className="boxfooter">
                                <img src="./Group 164.svg" alt="no image" />
                                <p className="praz">I applied all those principles that you taught in the course. THEY WORKED. I would like to thank you for helping me so much and making me a better person.</p>
                            </div>
                            <div className="boxfooter">
                                <img src="./Group 164 (1).svg" alt="no image" />
                                <p className="praz">I spoke to a girl the other day half way through our conversation she inturrupted me and told me I'm the realist person she has ever spoken to, not only that she told me she felt this warm sensation of being in the presence of a real man. Needless to say I left with her number 😉</p>
                            </div><div className="boxfooter">
                                <img src="./Group 165.svg" alt="no image" />
                                <p className="praz">After completing the course the second time I am already called ''the Life of a Party'' in many occasions and people tell me I am really fun to be around.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer