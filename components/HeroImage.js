import React from 'react'

const HeroImage = ({ newData }) => {
    return (
        <>
            {newData.map((el,i) => (
                <div className="heroImage" key={i}>
                    <div className="heroFlex">
                        <div clasName="bookImage">
                            <img className="bookimg" src={el.image} alt="no image" />
                        </div>
                        <div className="bookHeading">
                            <p className="first_heading">{el.text1}</p>
                            <p className="second_Heading">{el.text2}</p>
                            <p className="third_Heading">{el.text3}</p>
                            <p className="Fourth_Heading">{el.text4}</p>
                        </div>
                    </div>
                </div>
            ))}
        </>

    )
}

export default HeroImage

