import React from 'react'
import Grid from '@material-ui/core/Grid';
const Catagory = ({ newData }) => {
    const [togle, setTogle] = React.useState(false)
    const [id,setid] = React.useState('')
    return (
        <div>
            <div className="skill_box2">
                <h3 className="catagory_conatiner">Have you ever felt nervous (or completely blank) in the following situations?</h3>
                <p className="para_cont">...so have other Charisma University students - check out what they have to say:</p>
            </div>
            <div className="catagory_flex">
                {newData.map(el => (
                    el?.catagoryData?.map(data => (
                        <Grid item xs={12} sm={6} lg={4} xl={4}>
                        <div className="catagory_flex_hover">
                            <div>
                                <img style={{ padding: '30px 0', }} src={data.catagoryImg} alt="no image" />
                            </div>
                            <div>
                                <h3 className="largegroup2">{data.CatagoryName}</h3>
                                <p className={togle === true && id == data.key ? "btn-para2" : "btn-para"}>{data.catagoryText} </p>
                            </div>
                            <button onClick={() =>{
                                setid(data.key)
                                setTogle(!togle)
                            }} className="Group_conf">{togle === true && id == data.key  ? "Back" : data.catagoryButtonName}</button>
                        </div>
                        </Grid>
                    ))
                ))}
            </div>
        </div>
    )
}
export default Catagory