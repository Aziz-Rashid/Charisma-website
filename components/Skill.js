import React from 'react'
import { CloseOutlined } from '@ant-design/icons';
import Catagory from './Catagory'
const Skill = ({newData}) => {
    return (
        <div className="skill-container">
            <div className="skill_box">
                <h2>What if you had the skills to ‘turn it on’ and wow any room - or person - at a <span className="borderskill">moment’s</span> notice?</h2>
                <p style={{ color: '#C4C4C4', fontSize: '20px', paddingTop: '40px' }}>Let’s face it, too often we pass up the biggest opportunities and the life we want simply because we:</p>
                <div className="skillFlex">
                    <div>
                        
                        <p style={{color:'#F6F6F6',fontSize:'16px'}}><CloseOutlined style={{ fontSize: '20px',color:'red',paddingRight:'10px' }} />don't have the confidence to go for it </p>
                    </div>
                    <div>
                
                        <p style={{color:'#F6F6F6',fontSize:'16px'}}> <CloseOutlined style={{ fontSize: '20px',color:'red',paddingRight:'10px' }}/>don't have the skill to influence how other people feel</p>
                    </div>
                </div>
            </div>
            <Catagory newData={newData} />
        </div>
    )
}
export default Skill