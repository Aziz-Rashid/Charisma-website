import React from 'react'

const Profile = () => {
    const [togle, settogle] = React.useState(false)
    return (
        <div>
            <div className="paragraphs">
                <div className="p-2">
                    <div className="box-pra">
                        <p className="box-pra2">You want to talk to them… But you hesitate. That voice in your head throws you off. <b>You let an opportunity pass. Again.</b></p>
                        <p className="box-pra3">Or worse, you DO try, and after a few minutes of terrible, forced conversation, they excuse themselves to get away.</p>
                        <h3 className="box-pra4">It’s okay – that’s normal… I started out that way, too. </h3>
                        <p className="box-pra5">I spent most of my life unsure of how to handle myself in these moments –  <b>some of the most important moments of life.</b></p>
                    </div>
                </div>
            </div>
            <div className={togle === true ? "profile_box" : "profile_box2"} style={{ height: togle === false ? '800px' : '500px' }}>
                <div className="profile_container">
                    <div >
                        <img className="markgroup" src="./MaskGroup.png" alt="no image" />
                        <div className="boxx">
                            <h3 className="boxx1">So how did I eventually make the change?</h3>
                            <p className="boxx2">I mean, you know the story… now 4.5 million subscribers tune into our YouTube channel on confidence and charisma.</p>
                            <p className="boxx3">Am I perfect at it? No way. Come on, let’s get real. I’m a normal guy!</p>
                            <p className="boxx4">But, according to an incredible YouTube community all over the world and thousands of people we’ve trained, my results have been pretty damn impressive,<br /> and I couldn’t be more grateful for how charisma has changed my life.</p>
                            <p className="boxx3">And even better:<b> I wasn’t born with these skills. I started as a shy, quiet person. Leveling up my charisma wasn’t an accident – I know exactly what it takes.</b></p>
                            <h1 className="heading_boxx">What I’m trying to say is, because I studied and learned charisma, I can teach it.</h1>
                            <p className="boxx3">I want you to travel the same path I did.</p>
                        </div>
                    </div>
                    <div className="new">
                        <div>
                            <img className="sign" src="./“.png" alt="no image" />
                        </div>
                        <h1 className="charlie">Hey i'm Charlie</h1>
                        <p className="charlie_para">Cofounder, Charisma on Command</p>
                        <p className="charlie_para2">Look, you probably already know the happy ending of my story. Maybe you know me from YouTube, or as one of “The Charisma Guys</p>
                        <p className="charlie_para2">The truth is, “charismatic & confident” is NOT how my story began… <b style={{ color: 'white' }}>you’d be surprised to know where I started:</b></p>
                        <div className={togle === true ? "lg" : "lg2"}>
                            <p className="boxx3">See, I wasn’t always that guy. I wasn’t always great with people or confident in my own skin.</p>
                            <p className="boxx3">Seriously.</p>
                            <p className="boxx3">Growing up, I got top marks in school, played pickup sports, and had a close group of friends. But in front of an attractive girl or room full of people, I couldn’t even begin to be myself.</p>
                            <p className="boxx3">My palms would start to sweat, my throat would tighten, and I’d start overthinking everything, all at the worst possible moments.</p>
                            <p className="boxx3">The truth is, I always was (and will be) an introvert. </p>
                            <p className="boxx8"><b><i>I even won “Most Likely To Break Out Of His Shell” in high school! I was “the shy guy”.</i></b></p>
                            <p className="boxx3">Honestly, I was too awkward to go after the relationships and lifestyle I wanted. Since you’re here, I’m guessing you can relate to that. I know, it sucks. And that was my reality for far too long.</p>
                            <p className="boxx8"><b>Want to hear a funny story?</b></p>
                            <p className="boxx3">You won’t believe how badly I bombed my first kiss:</p>
                        </div>
                        <button className="Group_conf2" onClick={() => settogle(!togle)}>My award for being the shyest kid in school</button>
                    </div>
                </div>
            </div>
            <div className={togle === true ? "mar_botom" : "mar_botom2"}>
                <h1 className="baner_color">I saw that charisma was not a fixed trait, like height or eye color. <span className="heighlight">I <span className="heig">learned that charisma</span> is a skill.</span></h1>
            </div>
        </div>
    )
}
export default Profile