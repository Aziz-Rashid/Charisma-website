import React from 'react'
import ClearIcon from '@material-ui/icons/Clear';
import DoneIcon from '@material-ui/icons/Done';
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
                        <p className="bulletpoint"><DoneIcon className="doneSign" />{data.bullet1}</p>
                        <p className="bulletpoint"><DoneIcon className="doneSign" />{data.bullet2}</p>
                        <p className="bulletpoint"><DoneIcon className="doneSign" />{data.bullet3}</p>
                        <p className="bullet_para">{data.para}</p>
                    </div>
                ))
            ))}
            <div className="containers_block">
                {newData.map(el => (
                    el.containerBlock.map(data => (
                        <div className="containers_block2">
                            <h2 className="conatiener">{data.heading}</h2>
                            <div className="conatiners_box">
                                <h4 className="parag">{data.name}</h4>
                                <p className="parag2">{data.name2}</p>
                                <p className="parag3">{data.name3}</p>
                                <p className="parag4">{data.name4}</p>
                                <p className="parag5">"{data.name5}"</p>
                            </div>
                            <p className="bnr">{data.name6}</p>
                            <p className="bnr2">{data.name7}</p>
                            <p className="bnr3">{data.name8} <b>{data.namebold}</b></p>
                            <p className="bnr4">{data.name10}</p>
                            <p className="bnr5">{data.name11}</p>
                        </div>
                    ))
                ))}
            </div>
            <div className="nm">
                <div className="nm2">
                    <h2 className="nm3">There's an <span className="imp"> important</span> truth your parents probably didn't tell you <span className="grow">growing up</span></h2>
                </div>
            </div>
            {newData.map(el => (
                el.BannersData.map(data => (
                    <div className="grow">
                        <div className="grow2">
                            <h2 className="growHeading">{data.heading}</h2>
                            <p className="boxx8">{data.para1}</p>
                            <p className="bnr4"><DoneIcon style={{ fontWeight: 'bold',  color: 'white', marginRight: '10px', background: 'green', borderRadius: '25px' }} />{data.bullet1}</p>
                            <p className="bnr4"><ClearIcon style={{ fontWeight: 'bold', color: 'white', marginRight: '10px', background: 'red', borderRadius: '25px' }} />{data.bullet2}</p>
                            <p className="bnr4"><ClearIcon style={{ fontWeight: 'bold', color: 'white', marginRight: '10px', background: 'red', borderRadius: '25px' }} />{data.bullet3}</p>
                            <p className="bnr4"><ClearIcon style={{ fontWeight: 'bold', color: 'white', marginRight: '10px', background: 'red', borderRadius: '25px' }} />{data.bullet4}</p>
                            <p className="boxx8">{data.paras}</p>
                            <p className="boxx8"><b>{data.para2bold}</b>{data.para2}</p>
                            <p className="boxx8">{data.para4}</p>
                            <h3 className="hh">{data.lastHead}</h3>
                        </div>
                    </div>
                ))
            ))}
        </div>
    )
}
export default Banner