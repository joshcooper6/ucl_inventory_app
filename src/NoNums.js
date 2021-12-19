import React from 'react'
import OpenApp from 'react-open-app'

export default function NoNums() {
    let src1 = 'https://thumbs.gfycat.com/AmusedRemoteIrishwolfhound-size_restricted.gif'
    let src2 = 'https://images.squarespace-cdn.com/content/v1/52e4acabe4b0fe48e4d68193/1608413914621-NMA6A1H1UKNA061190BT/UCL-05072011-0303253.jpg'
    let src3 = 'https://images.squarespace-cdn.com/content/v1/52e4acabe4b0fe48e4d68193/1390721139533-5ODH9EXI5AK82SSUW9M5/IMG_7057.jpg'
    let src4 = 'https://images.squarespace-cdn.com/content/v1/52e4acabe4b0fe48e4d68193/1501014821609-YOQAXU6QM2FET2EQMNRE/JessicaOdaPhotography07.03.16+UCL11.JPG'
    let srcs = [src1, src2, src3, src4 ]
    let rn = Math.floor(Math.random() * srcs.length)
    
    return (
        <div id="no_nums">
            <div id="check_7shifts">
                <h1>No numbers needed today! :)</h1>
                    <div id="col1">
                        <p>However, check 7shifts just to be sure...</p>
                        <img src="https://media0.giphy.com/media/MZXmFVrbMA1qSDNGOt/giphy.gif" className="icon" />
                        <OpenApp href="https://app.7shifts.com/log_book">
                            <img src="https://www.7shifts.com/images/media-kit-2018/orange-icon.png" className="icon"/>
                        </OpenApp>
                    </div>
            </div>
            <img src={srcs[rn]} className="imgfit" />
        </div>
    )
}