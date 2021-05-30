import React from 'react'

const Banner = ({ newData }) => {
    return (
        <div>
            {newData.map(el => (
                el.bannersData.map(data => (
                    <div className="b-ner" key={data.key}>
                        <p className="b-ners">{data.paragraph1}</p>
                        <p className="b-ners">{data.paragraph2}</p>
                        <p className="b-ners">{data.paragraph3}</p>
                        <h1 className="b-ners2">{data.heading4}</h1>
                        <p className="b-ners">{data.paragraph5}</p>
                        <p className="b-ners"><b>{data.paragraph6}</b></p>
                        <p className="b-ners">{data.paragraph7}</p>
                    </div>
                ))
            ))}
            {newData.map(el => (
                el.bannerBox.map(data => (
                    <div className="banners_box">
                        <h1 className="banners_heading">{data.Relationships} <span className="masive">{data.masive}</span> {data.Relationships2}</h1>
                        <h4 className="banners_subHeading">{data.name}</h4>
                        <p className="bulletpoint">{data.bullet1}</p>
                        <p className="bulletpoint">{data.bullet2}</p>
                        <p className="bulletpoint">{data.bullet3}</p>
                        <p className="bullet_para">{data.para}</p>
                    </div>
                ))
            ))}
            <div className="containers_block">
                <div className="containers_block2">
                <h2 className="conatiener">I want to show you how to create the relationships, friendships, and life you’ve always dreamed of.</h2>
                <div className="conatiners_box">
                    <h4 className="parag">Let me paint you a picture:</h4>
                    <p className="parag2">You’re that person with their chest up, head held high.</p>
                    <p className="parag3">You easily speak through a smile… you always seem to know exactly what to say.</p>
                    <p className="parag4">You have the confidence to walk up and introduce yourself or strike up a conversation with anyone… and you leave them thinking:</p>
                    <p className="parag5">"Wow... I need to see them again"</p>
                </div>
                </div>
            </div>

        </div>
    )
}
export default Banner