import React from 'react'

const Book = ({ newData }) => {
    const [togle, setTogle] = React.useState(false)
    const [togle2, setTogle2] = React.useState(false)
    const [togle3, setTogle3] = React.useState(false)
    const [togle4, setTogle4] = React.useState(false)
    const [togle5, setTogle5] = React.useState(false)
    const [togle6, setTogle6] = React.useState(false)
    return (
        <div>
            {newData.map(el => (
                el.Modules.map(data => (
                    <div className="module1_container">
                        <div>
                            <img className="moduleImage1" src={data.image} alt="no image" />
                        </div>
                        <div className="module1_end">
                            <h2 className="module1_heading">{data.name} </h2>
                            <h1 className="module1_mainHeading">{data.para}</h1>
                            <div className={togle === true ? "module1_view" : "module1_Hide"}>
                                <div className="mmn">
                                    <h1 className="mmHeading">{data.BulletPoints}</h1>
                                    <p className="mmparagraph">{data.BulletPointsData}</p>
                                </div>
                                <div className="mmn">
                                    <h1 className="mmHeading">{data.BulletPoints2}</h1>
                                    <p className="mmparagraph">{data.BulletPointsData2}</p>
                                </div>
                                <div className="mmn">
                                    <h1 className="mmHeading">{data.BulletPoints3}</h1>
                                    <p className="mmparagraph">{data.BulletPointsData3}</p>
                                </div>
                                <div className="mmn">
                                    <h1 className="mmHeading">{data.BulletPoints4}</h1>
                                    <p className="mmparagraph">{data.BulletPointsData4}</p>
                                </div>
                                <div className="mmn">
                                    <h1 className="mmHeading">{data.BulletPoints5}</h1>
                                    <p className="mmparagraph">{data.BulletPointsData5}</p>
                                </div>
                            </div>
                            <button onClick={() => setTogle(!togle)} className="module_button">{togle === true ? "Hide" : "See Inside"}</button>
                        </div>
                    </div>
                ))
            ))}
            {newData.map(el => (
                el.Modules2.map(data => (
                    <div className="module1_container2" key={data.key}>
                        <div className="nnews">
                            <div className="module1_end2">
                                <h2 className="module1_heading2">{data.name}</h2>
                                <h1 className="module1_mainHeading2">{data.para}</h1>
                                <div className={togle2 === true ? "module1_view2" : "module1_Hide2"}>
                                    <div className="mmn2">
                                        <h1 className="mmHeading2">{data.BulletPoints}</h1>
                                        <p className="mmparagraph2">{data.BulletPointsData}</p>
                                    </div>
                                    <div className="mmn2">
                                        <h1 className="mmHeading2">{data.BulletPoints2}</h1>
                                        <p className="mmparagraph2">{data.BulletPointsData2}</p>
                                    </div>
                                    <div className="mmn2">
                                        <h1 className="mmHeading2">{data.BulletPoints3}</h1>
                                        <p className="mmparagraph2">{data.BulletPointsData3}</p>
                                    </div>
                                    <div className="mmn2">
                                        <h1 className="mmHeading2">{data.BulletPoints4}</h1>
                                        <p className="mmparagraph2">{data.BulletPointsData4}</p>
                                    </div>
                                    <div className="mmn2">
                                        <h1 className="mmHeading2">{data.BulletPoints5}</h1>
                                        <p className="mmparagraph2">{data.BulletPointsData5} </p>
                                    </div>
                                </div>
                                <button onClick={() => setTogle2(!togle2)} className="module_button">{togle2 === true ? "Hide" : "See Inside"}</button>
                            </div>
                            <div>
                                <img className="moduleImage1" src="./Group 60.svg" alt="no image" />
                            </div>
                        </div>
                    </div>
                ))
            ))}
            {newData.map(el => (
                el.Modules3.map(data => (
                    <div className="module1_container">
                        <div>
                            <img className="moduleImage1" src={data.image} alt="no image" />
                        </div>
                        <div className="module1_end">
                            <h2 className="module1_heading">{data.name}</h2>
                            <h1 className="module1_mainHeading">{data.para}</h1>
                            <div className={togle3 === true ? "module1_view" : "module1_Hide"}>
                                <div className="mmn">
                                    <h1 className="mmHeading">{data.BulletPoints}</h1>
                                    <p className="mmparagraph">{data.BulletPointsData}</p>
                                </div>
                                <div className="mmn">
                                    <h1 className="mmHeading">{data.BulletPoints2}</h1>
                                    <p className="mmparagraph">{data.BulletPointsData2}</p>
                                </div>
                                <div className="mmn">
                                    <h1 className="mmHeading">{data.BulletPoints3}</h1>
                                    <p className="mmparagraph">{data.BulletPointsData3}</p>
                                </div>
                                <div className="mmn">
                                    <h1 className="mmHeading">{data.BulletPoints4}</h1>
                                    <p className="mmparagraph">{data.BulletPointsData4}</p>
                                </div>
                                <div className="mmn">
                                    <h1 className="mmHeading">{data.BulletPoints5}</h1>
                                    <p className="mmparagraph">{data.BulletPointsData5} </p>
                                </div>
                            </div>
                            <button onClick={() => setTogle3(!togle3)} className="module_button">{togle3 === true ? "Hide" : "See Inside"}</button>
                        </div>
                    </div>
                ))
            ))}
            {newData.map(el => (
                el.Modules4.map(data => (
                    <div className="module1_container2" key={data.key}>
                        <div className="nnews">
                            <div className="module1_end2">
                                <h2 className="module1_heading2">{data.name}</h2>
                                <h1 className="module1_mainHeading2">{data.para}</h1>
                                <div className={togle4 === true ? "module1_view2" : "module1_Hide2"}>
                                    <div className="mmn2">
                                        <h1 className="mmHeading2">{data.BulletPoints}</h1>
                                        <p className="mmparagraph2">{data.BulletPointsData}</p>
                                    </div>
                                    <div className="mmn2">
                                        <h1 className="mmHeading2">{data.BulletPoints2}</h1>
                                        <p className="mmparagraph2">{data.BulletPointsData2}</p>
                                    </div>
                                    <div className="mmn2">
                                        <h1 className="mmHeading2">{data.BulletPoints3}</h1>
                                        <p className="mmparagraph2">{data.BulletPointsData3}</p>
                                    </div>
                                    <div className="mmn2">
                                        <h1 className="mmHeading2">{data.BulletPoints4}</h1>
                                        <p className="mmparagraph2">{data.BulletPointsData4}</p>
                                    </div>
                                    <div className="mmn2">
                                        <h1 className="mmHeading2">{data.BulletPoints5}</h1>
                                        <p className="mmparagraph2">{data.BulletPointsData5} </p>
                                    </div>
                                </div>
                                <button onClick={() => setTogle4(!togle4)} className="module_button">{togle4 === true ? "Hide" : "See Inside"}</button>
                            </div>
                            <div>
                                <img className="moduleImage1" src="./Group 60.svg" alt="no image" />
                            </div>
                        </div>
                    </div>
                ))
            ))}
            {newData.map(el => (
                el.Modules5.map(data => (
                    <div className="module1_container">
                        <div>
                            <img className="moduleImage1" src={data.image} alt="no image" />
                        </div>
                        <div className="module1_end">
                            <h2 className="module1_heading">{data.name}</h2>
                            <h1 className="module1_mainHeading">{data.para}</h1>
                            <div className={togle5 === true ? "module1_view" : "module1_Hide"}>
                                <div className="mmn">
                                    <h1 className="mmHeading">{data.BulletPoints}</h1>
                                    <p className="mmparagraph">{data.BulletPointsData}</p>
                                </div>
                                <div className="mmn">
                                    <h1 className="mmHeading">{data.BulletPoints2}</h1>
                                    <p className="mmparagraph">{data.BulletPointsData2}</p>
                                </div>
                                <div className="mmn">
                                    <h1 className="mmHeading">{data.BulletPoints3}</h1>
                                    <p className="mmparagraph">{data.BulletPointsData3}</p>
                                </div>
                                <div className="mmn">
                                    <h1 className="mmHeading">{data.BulletPoints4}</h1>
                                    <p className="mmparagraph">{data.BulletPointsData4}</p>
                                </div>
                                <div className="mmn">
                                    <h1 className="mmHeading">{data.BulletPoints5}</h1>
                                    <p className="mmparagraph">{data.BulletPointsData5} </p>
                                </div>
                            </div>
                            <button style={{ marginTop: togle5 === true ? '60px' : '0px' }} onClick={() => setTogle5(!togle5)} className="module_button">{togle5 === true ? "Hide" : "See Inside"}</button>
                        </div>
                    </div>
                ))
            ))}
            {newData.map(el => (
                el.Modules6.map(data => (
                    <div className="module1_container2" key={data.key}>
                        <div className="nnews">
                            <div className="module1_end2">
                                <h2 className="module1_heading2">{data.name}</h2>
                                <h1 className="module1_mainHeading2">{data.para}</h1>
                                <div className={togle6 === true ? "module1_view2" : "module1_Hide2"}>
                                    <div className="mmn2">
                                        <h1 className="mmHeading2">{data.BulletPoints}</h1>
                                        <p className="mmparagraph2">{data.BulletPointsData}</p>
                                    </div>
                                    <div className="mmn2">
                                        <h1 className="mmHeading2">{data.BulletPoints2}</h1>
                                        <p className="mmparagraph2">{data.BulletPointsData2}</p>
                                    </div>
                                    <div className="mmn2">
                                        <h1 className="mmHeading2">{data.BulletPoints3}</h1>
                                        <p className="mmparagraph2">{data.BulletPointsData3}</p>
                                    </div>
                                    <div className="mmn2">
                                        <h1 className="mmHeading2">{data.BulletPoints4}</h1>
                                        <p className="mmparagraph2">{data.BulletPointsData4}</p>
                                    </div>
                                    <div className="mmn2">
                                        <h1 className="mmHeading2">{data.BulletPoints5}</h1>
                                        <p className="mmparagraph2">{data.BulletPointsData5} </p>
                                    </div>
                                </div>
                                <button onClick={() => setTogle6(!togle6)} className="module_button">{togle6 === true ? "Hide" : "See Inside"}</button>
                            </div>
                            <div>
                                <img className="moduleImage1" src="./Group 60.svg" alt="no image" />
                            </div>
                        </div>
                    </div>
                ))
            ))}

        </div>
    )

}
export default Book