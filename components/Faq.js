import React from 'react'

const Faq = () => {
    const [togle, settogle] = React.useState(false)
    const [togle2, settogle2] = React.useState(false)
    const [togle3, settogle3] = React.useState(false)
    const [togle4, settogle4] = React.useState(false)
    return (
        <div className="faq_main">
            <h1 className="faqq">FAQ</h1>
            <div className="faq_text">
                <div className="faq_question">
                    <h3 onClick={() => settogle(!togle)}>Can charisma actually be learned?</h3>
                    <div className={togle === true ? "faq_box" : "faqbox_hide"}>
                        <p className="faq_para">Emphatically, <b>YES.</b></p>
                        <p className="faq_para">First, I changed my life. Then I went further and watched close to a hundred clients change their life. Then I saw thousands change their lives through our online course.</p>
                        <p className="faq_para">Charisma is not like eye color. The idea that you can’t radically improve your charisma is a  destructive myth created by people who want to justify their own deficiencies.</p>
                        <p className="faq_para">Charisma is a skill. No different than playing the guitar or riding a bike, charisma can be learned. The biggest difference is how little time it takes to become great at it.</p>
                        <div className="faq_flex">
                            <div className="faq_imsage">
                                <img className="faq_image" src="./Mask Group (3).svg" alt="no image" />
                            </div>
                            <div>
                                <p className="faq_para">…I just want to emphasize that what I did the previous days would even not have come to my mind if I had not discovered that charisma is a skill that can be learned thanks to your YouTube channel and university program.</p>
                            </div>
                        </div>
                        <p className="faq_para"><b>Jeroen A.</b></p>
                    </div>
                </div>

            </div>
            <div className="faq_text">
                <div className="faq_question">
                    <h3 onClick={() => settogle2(!togle2)}>Will I get the results others do? Is this right for me?</h3>
                    <div className={togle2 === true ? "faq_box2" : "faqbox_hide2"}>
                        <p className="faq_para">Charisma University is NOT for everybody. This is not an instant fix, magic pill type of program. It is not for the lazy.</p>
                        <p className="faq_para">I have worked with men and women ages 20-43, of all races except Native American, from every continent except for Africa and Antarctica.</p>
                        <p className="faq_para">There is no such thing as being too short or too tall for charisma. The two things you really need are strong desire to improve and the ability to push your comfort zone.</p>
                        <p className="faq_para">If you truly want it, you’ll put the time in. You’ll watch 30 minutes a day, you’ll do the daily habit exercises, and you’ll watch magic happen in your life.</p>
                        <p className="faq_para">The two questions you need to ask:</p>
                        <p className="faq_para"><b>– Are you willing to spend time each week watching these videos and working on improving yourself?</b></p>
                        <p className="faq_para"><b>– Are you married to doing the same things you’ve always done, or are you willing to try new things in order to grow and achieve your goals?</b></p>
                        <div className="faq_flex">
                            <div className="faq_imsage">
                                <img className="faq_image" src="./Mask Group (3).svg" alt="no image" />
                            </div>
                            <div>
                                <p className="faq_para">To make a long story short, I have gone from being a lonely introvert hoping to better connect with people, to an energy filled extrovert who makes new friends everywhere he goes.</p>
                            </div>
                        </div>
                        <p className="faq_para"><b>Chase S.</b></p>
                    </div>
                </div>

            </div>
            <div className="faq_text">
                <div className="faq_question">
                    <h3 onClick={() => settogle3(!togle3)}>How does Charisma University differ from the YouTube channel?</h3>
                    <div className={togle3 === true ? "faq_box3" : "faqbox_hide3"}>
                        <p className="faq_para"><b>NEW CONTENT:</b> Techniques, tactics, and exercises that aren’t available elsewhere.</p>
                        <p className="faq_para"><b>STRUCTURE:</b> CU gives you a step-by-step action plan to implement what you learn and turn knowledge into habit.</p>
                        <p className="faq_para"><b>RESULTS GUARANTEE:</b> CU gives you a time frame (6 weeks) to see massive improvements. No more dipping and dabbling and dealing with slow growth and extended plateaus.</p>
                        <p className="faq_para"><b>COMMUNITY:</b> The CU community pushes you and gives you peers to grow with and learn from. Since Ben and I are a part of that community, it also gives you direct access to us for any questions you can’t find answers to.</p>
                        <p className="faq_para"><b>COMMITMENT:</b> here’s the truth: success takes going all in. Investing financially and diving into a curriculum are both psychological commitment techniques that are proven to make all the difference between being a dabbler and a master.</p>
                        <div className="faq_flex">
                            <div className="faq_imsage">
                                <img className="faq_image" src="./Mask Group (3).svg" alt="no image" />
                            </div>
                            <div>
                                <p className="faq_para">I wanted to start off saying thank you for what you do with Charisma on Command. I started the course just trying to learn how to articulate better, but the course on confidence helped me assess my values and figure out what’s been holding me back from doing the things I love. Thank you so much!</p>
                            </div>
                        </div>
                        <p className="faq_para"><b>Bethany W.</b></p>
                    </div>
                </div>
            </div>
            <div className="faq_text">
                <div className="faq_question">
                    <h3 onClick={() => settogle4(!togle4)}>Is there anything to really make sure this isn't just more knowledge without any results?</h3>
                    <div className={togle4 === true ? "faq_box" : "faqbox_hide"}>
                        <p className="faq_para">Absolutely.</p>
                        <p className="faq_para">CU is NOT just a set of videos with incredible content and letting people figure it out from there. You get a step-by-step daily structure that will tell you exactly how to integrate the lessons every day. You also have direct access to a charisma coach in the comments for all your questions.</p>
                        <p className="faq_para">That combination has been designed specifically to guarantee you don’t just LEARN about charisma, but LIVE it – every day.</p>
                        <div className="faq_flex">
                            <div className="faq_imsage">
                                <img className="faq_image" src="./Mask Group (3).svg" alt="no image" />
                            </div>
                            <div>
                                <p className="faq_para">I had already started watching the confidence module, so I tried to break people out of their pattern. Before the event, I did the Tony-thing so I felt great leaving the house.</p>
                                <p className="faq_para">When the event started, I just started talking with the employees at a stand and instead of asking what kind of company they were, I asked how they were doing. I noticed some of them froze for like half a second, then started smiling and answering my question… the response was amazing!</p>
                            </div>
                        </div>
                        <p className="faq_para"><b>Anton G.</b></p>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Faq