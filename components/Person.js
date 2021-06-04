import React from 'react'
import ClearIcon from '@material-ui/icons/Clear';
import DoneIcon from '@material-ui/icons/Done';

const Person = ({ newData }) => {
    return (
        <div>
            <div className="person_bg">
                <h4 className="personHeading">Ever seen this happen?</h4>
                <div className="personFlex">
                    {newData.map(el => (
                        el.Person_1_Details.map(data => (
                            <div className="person1" key={data.key}>
                                <h3>{data.name}</h3>
                                <img className="personImg" src={data.img} alt="no image" />
                                <div>
                                    <p><DoneIcon className="doneSign" /> {data.point1}</p>
                                    <p><DoneIcon className="doneSign" /> {data.point2}</p>
                                    <p><DoneIcon className="doneSign" /> {data.point3}</p>
                                    <p><ClearIcon className="xsign" /> {data.point4}</p>
                                    <p><ClearIcon className="xsign" />{data.point5}</p>
                                    <p><ClearIcon className="xsign" />{data.point6}</p>
                                </div>
                                <h3 className="personh">{data.details1}</h3>
                                <h3 className="personh2">{data.detailsHeading}</h3>
                            </div>
                        ))
                    ))}
                    {newData.map(el => (
                        el.Person_2_Details.map(data => (
                            <div className="person2" key={data.key}>
                                <h3>{data.name}</h3>
                                <img className="personImg" src={data.img} alt="no image" />
                                <div>
                                    <p><DoneIcon className="doneSign"  /> {data.point1}</p>
                                    <p><DoneIcon className="doneSign"  /> {data.point2}</p>
                                    <p><DoneIcon className="doneSign"  /> {data.point3}</p>
                                    <p><DoneIcon className="doneSign"  /> {data.point4}</p>
                                    <p><DoneIcon className="doneSign"  />{data.point5}</p>
                                    <p><DoneIcon className="doneSign"  />{data.point6}</p>
                                </div>
                                <h3 className="personh">{data.details1}</h3>
                                <h3 className="personh2">{data.detailsHeading}</h3>
                            </div>

                        ))
                    ))}
                </div>
                {newData.map(el => (
                    el.Persons_Headings.map(data => (
                        <span key={data.key}>
                            <h1 className="perso">{data.Heading1}</h1>
                            <p className="perso2">{data.Heading2} <span className="bord">{data.Heading2Bold}</span></p>
                            <p className="perso3">{data.Heading3}</p>
                            <h1 className="chrismas">{data.Heading4}</h1>

                        </span>
                    ))
                ))}
            </div>
            {newData.map(el => (
                el.Persons_conatiner_Data.map(data => (
                    <div className="personContainer" key={data.key}>
                        <h3 className="charisma2">{data.Heading}</h3>
                        <p className="bnr4">{data.para}</p>
                        <p className="boxx8">{data.para2} <b>{data.para2Bold}</b></p>
                        <p className="boxx8">{data.para3}</p>
                        <p className="bnr4">{data.para4}</p>
                        <h2 className="personn">{data.para5}</h2>
                        <p className="boxx8">{data.para6} <b>{data.para6Bold}</b></p>
                    </div>

                ))
            ))}
        </div>
    )
}
export default Person