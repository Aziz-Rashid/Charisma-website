import React from 'react'

const Charisma = ({ newData }) => {
    return (
        <div>
            {newData.map(el => (
                el.Charisma.map(data => (
                    <div className="charisma_bg">
                        <div className="charisma_size">
                            <img className="charismImage" src={data.image1} alt="no image" />
                        </div>
                        <div className="charisma_size">
                            <img className="charismImage2" src={data.image2} alt="no image" />
                        </div>
                        <div className="charisma_size">
                            <img className="charismImage" src={data.image3} alt="no image" />
                        </div>
                        <div className="charisma_size">
                            <img className="charismImage" src={data.image4} alt="no image" />
                        </div>
                    </div>

                ))
            ))}
            <div>

                <div className="bgs">
                    {newData.map(el => (
                        el.Charismabox.map(data => (
                            <div className="bgss">
                                <div>
                                    <img src={data.image} alt="no image" />
                                </div>
                                <div className="life_box" >
                                    <h4 style={{ fontSize: "24px" }}><b>"{data.heading}"</b></h4>
                                    <p style={{ fontStyle: 'italic', fontSize: '19px' }}>{data.para}</p>
                                    <p style={{ fontStyle: 'italic', fontSize: '19px' }}>{data.para1}</p>
                                    <p style={{ fontStyle: 'italic', fontSize: '19px' }}>{data.authoName}</p>
                                </div>
                            </div>

                        ))
                    ))}
                </div>
            </div>
            {newData.map(el => (
                el.charismaBanner.map(data => (
                    <div className="charisma_bg">
                        <h1 className="headinss">{data.Heading} <span className="masive">{data.HeadingColor}</span></h1>
                        <p className="charisma_paragraph">{data.para}</p>
                    </div>
                ))
            ))}
            {newData.map(el => (
                el.charismaBoard.map(data => (
                    <div className="charismaBorder">
                        <p className="charismaBorder_para1">{data.para}</p>
                        <div className="conttu">
                            <p className="contty_yelo">{data.para1}</p>
                            <p className="contty_yelo2">{data.para2}</p>
                            <p className="contty_yelo3">"{data.para3}"</p>
                        </div>
                        <p className="contty_yelo4">{data.para4}</p>
                        <h2 className="charisma2">{data.para5}</h2>
                        <p className="contty_yelo2">{data.para6}</p>
                        <p className="contty_yelo2"><b>{data.para7}</b></p>
                        <p className="contty_yelo2">{data.para8} <b>{data.para8_bold}</b></p>
                    </div>
                ))
            ))}
            {newData.map(el => (
                el.card.map(data => (
                    <div className="join">
                        <div className="join1">
                            <img src={data.image} alt="no image" />
                        </div>
                        <div className="join2">
                            <h1 className="joinHeading">"{data.Heading}"</h1>
                            <p className="joinParagraph">{data.paragraph}</p>
                            <button className="join_btn">{data.button}</button>
                        </div>
                    </div>
                ))
            ))}
        </div>
    )
}
export default Charisma