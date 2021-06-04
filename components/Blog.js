import React from 'react'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
const Blog = () => {
    return (
        <div className="blog_container">
            <div className="blogs">
                <img className="whatsInside" src="./What's inside.svg" alt="no image " />
            </div>
            <div className="blog_box">
                <div className="blogimage">
                    <img className="whatsInside2" src="./image 15.svg" alt="no image" />
                </div>
                <div className="blogg">
                    <div className="x">
                        <button className="btnblog">
                            <ArrowUpwardIcon style={{ color: 'yellow' }} />
                        </button>
                        <p className="joinParagraph">Everything you need to level up your charisma</p>
                    </div>
                </div>
            </div>
            <div className="blog_box2">
                <div className="blogg2">
                    <div className="x2">
                        <button className="btnblog">
                            <ArrowUpwardIcon style={{ color: 'yellow' }} />
                        </button>
                        <h2 style={{color:'white'}}>Daily action videos</h2>
                        <p className="joinParagraph">Follow along with the curriculum proven to get you inspiring and impressing everyone you meet.</p>
                    </div>
                </div>
                <div className="blogimage">
                    <img className="whatsInside3" src="./image 15.svg" alt="no image" />
                </div>
            </div>
            <div className="blog_box">
                <div className="blogimage">
                    <img className="whatsInside2" src="./image 15.svg" alt="no image" />
                </div>
                <div className="blogg">
                    <div className="x">
                        <button className="btnblog">
                            <ArrowUpwardIcon style={{ color: 'yellow' }} />
                        </button>
                        <h1 style={{color:'white'}}>Daily implementation guide</h1>
                        <p className="joinParagraph">Action items take 2 to 20 minutes to implement. The key to success is habit development.</p>
                    </div>
                </div>
            </div>
            <div className="blog_box2">
                <div className="blogg2">
                    <div className="x2">
                        <button className="btnblog">
                            <ArrowUpwardIcon style={{ color: 'yellow' }} />
                        </button>
                        <h2 style={{color:'white'}}>A thriving community</h2>
                        <p className="joinParagraph">Learn and grow with peers and CU Charisma Coaches.</p>
                    </div>
                </div>
                <div className="blogimage">
                    <img className="whatsInside3" src="./image 15.svg" alt="no image" />
                </div>
            </div>
        </div>
    )
}
export default Blog