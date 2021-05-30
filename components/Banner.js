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
            <div className="banners_box">
                <h1 className="banners_heading">Relationships <span className="masive">MASSIVELY</span> impact the quality of your life</h1>
                <h4 className="banners_subHeading">Relationships control your:</h4>
                <p className="bulletpoint">success in business</p>
                <p className="bulletpoint">success with dating</p>
                <p className="bulletpoint">ability to materialize a larger vision</p>
                <p className="bullet_para">…success in these all comes down to the quality of the relationships in your life, and your ability to create amazing new ones on command.</p>
            </div>
        </div>
    )
}
export default Banner