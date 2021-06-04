import React from 'react'

const University = () => {
    return (
        <div className="uni_container">
            <div>
                <img className="n" width="100%" src="./Rectangle 21 (1).svg" alt="no image" />
                <h1 className="position">The more <span className="u"> confident, charismatic </span> you starts today.</h1>
            </div>
            <div className="uni_flex">
                <div>
                    <img className="uni_image" src="./Group2.svg" alt="no image" />
                </div>
                <div className="uni_card">
                    <p className="join_now">- JOIN NOW -</p>
                    <p className="join_now">START BECOMING MORE CHARISMATIC TODAY</p>
                    <ul>
                        <li className="kjh">Lifetime membership to Charisma University</li>
                        <li className="kjh">Access to a Charisma Coach inside</li>
                        <li className="kjh">TWO Bonus Modules</li>
                        <li className="kjh">Provide 10 years of clean water to someone in need</li>
                        <li className="kjh">100% money-back guarantee</li>
                    </ul>
                    <div style={{ width: "50%", margin: 'auto' }}>
                        <button className="btnn"><a href="https://charisma.samcart.com/products/charisma-university--secured/?_ga=2.11745524.1999199094.1616699180-564006154.1614799887" className="i" target="_blank" >Join Charisma University</a></button>
                    </div>
                </div>
            </div>
            <div>
                <h1 className="uni_n">And how about that <span className="money">money-back guarantee?</span> </h1>
                <div className="mmnj">
                    <button className="unibt">Is it really that good</button>
                </div>
            </div>
        </div>
    )
}
export default University