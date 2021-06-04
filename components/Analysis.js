import React from 'react'
import DoneIcon from '@material-ui/icons/Done';
const Analysis = () => {
    return (
        <div className="ana_conatiner">
            <div className="ana_block">
                <h1 className="ana_heading">Training Videos. Action Guides.<br /><span className="ana_heading_bold">Lifetime <span className="uuy">access & </span> updates.</span></h1>
                <p className="ana_para">Even if the price goes up. We want CU to be as helpful as possible.</p>
            </div>
            <div className="ana_box">
                <h1 className="ana_box_heading">How do I become a member of Charisma University?</h1>
                <p className="ana">To cover all of this charismatic goodness in our private coaching program used to take 3 months and a $6,000 investment.</p>
                <p className="ana_border">We want this program to be a spectacular investment for you... that means you expect a better return than what you put in initially.</p>
                <p className="ana">Were client results way, way more valuable than $6,000? Hell, yes!</p>
                <p className="ana">One of my clients, <b>within TWO months:</b></p>
                <div style={{ display: 'flex', marginRight: '50px', marginLeft: '20px' }}>
                    <div>
                        <p className="ana_new"><DoneIcon className="doneSign" /> Earned a promotion</p>
                    </div>
                    <div>
                        <p className="ana_new"><DoneIcon className="doneSign" />Got a pay raise </p>
                    </div>
                </div>
                <p className="ana">…all using the new habits we had coached him through.</p>
                <p className="ana_para2">Best part is, all we taught him is now covered in just HALF of the current CU course.</p>
                <p className="ana_italic">See, we eventually started realizing that almost all the advice we were giving to clients was nearly identical… </p>
                <p className="ana_para2">So I decided to distill EVERYTHING I used to teach into Charisma University.</p>
            </div>
            <div className="ana_boxx">
                <p className="anaa">That lowered the cost from this:</p>
                <div className="line">$6,000</div>
                <p className="anaa">...to just $597</p>
                <div className="line2"><div className="lin">30%</div><div className="li">30%</div></div>
                <p className="anaa">...or even 6 monthly pays of $99.50</p>
                <div className="line2"><div className="lin2">10%</div><div className="li2">90%</div></div>
                <p className="lineText">...for the same exact training from our private coaching program,<span className="li_color"> PLUS a community of people to answer questions and never-ending instant access to future CU content</span> </p>
            </div>
            <div className="ss">
                <h1 className="charisma2">Yep, just $99.50 today to unlock the entirety of CU.</h1>
                <p className="ssnew">Or if you want to pay all at once, you can do that too.</p>
                <p className="ssnew">So if you’re ready to commit to elevating your charisma, relationships, and leadership,<b> there’s never going to be a better time than now.</b></p>
                <div className="jj">
                    <p>And one more thing...</p>
                </div>
            </div>
        </div>
    )
}
export default Analysis