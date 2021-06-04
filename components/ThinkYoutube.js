import React from 'react'
import { UsergroupDeleteOutlined, StarOutlined } from '@ant-design/icons';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import StarIcon from '@material-ui/icons/Star';
import CountUp from 'react-countup';
const ThinkYoutube = ({ newData }) => {
    console.log(newData)
    return (
        <>
            {newData.map((el, i) => (
                <div className="thinkyoutube_container" key={i}>
                    <div>
                        <img className="thinkyoutube_image" src={el.thinkyoutube_image} alt="no image" />
                    </div>
                    <div className="thinkyoutube_size">
                        <p className="thinkyoutube_mainHeading">{el.thinkyoutube_mainHeading}</p>
                        <p className="thinkyoutube_paragraph">{el.thinkyoutube_paragraph} </p>
                        <p className="thinkyoutube_sub_heading">{el.thinkyoutube_sub_heading}</p>
                        {el.ThinkyoutubeData.map((data) => (
                            <>
                                <div className="thinkyoutbe_box" key={data.key}>
                                    <h4 className="thinkyoutube_box_heading">{data.thinkyoutube_box_heading}</h4>
                                    <p className="thinkyoutube_box_paragraph">{data.thinkyoutube_box_paragraph}</p>
                                </div>
                            </>
                        ))}
                        <div className="count">
                            <div>
                                <UsergroupDeleteOutlined style={{ fontSize: '60px !important' }} className="iconuser" />
                                <div style={{ color: 'white', marginTop: '10px' }}>
                                    <CountUp style={{ color: 'white !important', fontSize: '25px', fontWeight: '800' }} start={el.countStart} end={el.countEnd} duration={3.75} separator="," /><span style={{ fontSize: '25px', fontWeight: 'bold' }}>+</span>
                                </div>
                                <p style={{ color: '#B0B0B0' }}>Cu Students</p>
                            </div>
                        </div>
                        <div className="count2">
                            <div>
                                <StarIcon color="action" style={{ width: '25px !important', color: 'yellow !important' }} />
                                <StarIcon color="primary" style={{ width: '30px !important', color: 'yellow !important' }} className="iconuser" />
                                <StarIcon color="primary" style={{ width: '30px !important', color: 'yellow !important' }} className="iconuser" />
                                <StarIcon color="primary" style={{ width: '30px !important', color: 'yellow !important' }} className="iconuser" />
                                <StarHalfIcon color="action" style={{ width: '25px !important', color: 'yellow !important' }} className="iconuser" />
                                <div style={{ color: 'white', marginTop: '10px' }}>
                                    <CountUp style={{ color: 'white !important', fontSize: '25px', fontWeight: '800', paddingRight: '10px' }} start={el.reviewstartCount} end={el.reviewEndCount} duration={3.75} separator="," /><span style={{ fontSize: '25px', fontWeight: 'bold' }}>reviews</span>
                                </div>
                                <p style={{ color: '#B0B0B0' }}>4.4 star average</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            {newData.map(el => (
                el.lifeboxData.map(data => (
                    <div className="bgs" key={data.key}>
                        <div className="bgss">
                            <div>
                                <img src={data.lifeimg} alt="no image" />
                            </div>
                            <div className="life_box">
                                <h4>"{data.lifeboxHeading}"</h4>
                                <p>{data.lifeboxpara}</p>
                                <p>{data.name}</p>
                            </div>
                        </div>
                    </div>
                ))
            ))}
        </>
    )
}
export default ThinkYoutube


{/* <div className="thinkyoutube_container">
                    <div>
                        <img className="thinkyoutube_image" src="./image4.png" alt="no image" />
                    </div>
                    <div className="thinkyoutube_size">
                        <h3 className="thinkyoutube_mainHeading">Think the YouTube videos are great?</h3>
                        <p className="thinkyoutube_paragraph">Glad you think so! But just wait till you check out Charisma University. </p>
                        <p className="thinkyoutube_sub_heading">Here’s what makes CU different:</p>
                        <div className="thinkyoutbe_box">
                            <h4 className="thinkyoutube_box_heading">PROVEN, ACTION FOCUSED CURRICULUM</h4>
                            <p className="thinkyoutube_box_paragraph">You'll know exactly where to start and what to do next. Daily
                            action items ensure your Charisma transforms.
                    </p>
                        </div>
                        <div className="thinkyoutbe_box">
                            <h4 className="thinkyoutube_box_heading">EXCLUSIVE CONTENT</h4>
                            <p className="thinkyoutube_box_paragraph">Techniques, tactics and excercise not available anywhere else the trun charisma into unthinking habit.</p>
                        </div>
                        <div className="thinkyoutbe_box">
                            <h4 className="thinkyoutube_box_heading">COMMUNITY</h4>
                            <p className="thinkyoutube_box_paragraph">Learn and grow with peers. A charisma is also there to give direct support and answer questions.
                    </p>
                        </div>
                        <div className="thinkyoutbe_box">
                            <h4 className="thinkyoutube_box_heading">RESULT GUARANTEE</h4>
                            <p className="thinkyoutube_box_paragraph">You're guarantee to get result you are happy with. if you aren't satisfied. You can get 100% of your money back.
                    </p>
                        </div>
                        <div className="count">
                            <div>
                                <UsergroupDeleteOutlined style={{ fontSize: '60px !important' }} className="iconuser" />
                                <div style={{ color: 'white', marginTop: '10px' }}>
                                    <CountUp style={{ color: 'white !important', fontSize: '25px', fontWeight: '800' }} start={0} end={5000} duration={3.75} separator="," /><span style={{ fontSize: '25px', fontWeight: 'bold' }}>+</span>
                                </div>
                                <p style={{ color: '#B0B0B0' }}>Cu Students</p>
                            </div>
                        </div>
                        <div className="count2">
                            <div>
                                <StarIcon color="action" style={{ width: '25px !important' }} className="iconusser" />
                                <StarIcon color="primary" style={{ width: '30px !important', color: 'yellow !important' }} className="iconuser" />
                                <StarIcon color="primary" style={{ width: '30px !important', color: 'yellow !important' }} className="iconuser" />
                                <StarIcon color="primary" style={{ width: '30px !important', color: 'yellow !important' }} className="iconuser" />
                                <StarHalfIcon color="action" style={{ width: '25px !important' }} className="iconuser" />
                                <div style={{ color: 'white', marginTop: '10px' }}>
                                    <CountUp style={{ color: 'white !important', fontSize: '25px', fontWeight: '800', paddingRight: '10px' }} start={0} end={1969} duration={3.75} separator="," /><span style={{ fontSize: '25px', fontWeight: 'bold' }}>reviews</span>
                                </div>
                                <p style={{ color: '#B0B0B0' }}>4.4 star average</p>
                            </div>
                        </div>
                    </div>
                </div> */}