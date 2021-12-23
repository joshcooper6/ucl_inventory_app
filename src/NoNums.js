import React from 'react'

export default function NoNums() {
    let src1 = 'https://thumbs.gfycat.com/AmusedRemoteIrishwolfhound-size_restricted.gif'
    let src2 = 'https://images.squarespace-cdn.com/content/v1/52e4acabe4b0fe48e4d68193/1608413914621-NMA6A1H1UKNA061190BT/UCL-05072011-0303253.jpg'
    let src3 = 'https://images.squarespace-cdn.com/content/v1/52e4acabe4b0fe48e4d68193/1390721139533-5ODH9EXI5AK82SSUW9M5/IMG_7057.jpg'
    let src4 = 'https://images.squarespace-cdn.com/content/v1/52e4acabe4b0fe48e4d68193/1501014821609-YOQAXU6QM2FET2EQMNRE/JessicaOdaPhotography07.03.16+UCL11.JPG'
    let srcs = [src1, src2, src3, src4 ]
    let rn = Math.floor(Math.random() * srcs.length)

    return (
        <div id="no_nums">
                <h1>No numbers today!</h1>
                <a href="https://app.7shifts.com/log_book" target="_blank">
                    <div id="col1_cntnr">
                        <div id="col1">
                            <p>Click here to check 7shifts for any special requests from management</p>
                            <img src="https://www.7shifts.com/images/media-kit-2018/orange-icon.png" className="result_buttons icon" id="sevenicon"/>
                        </div>
                    </div>
                </a>
            <img src={srcs[rn]} className="imgfit" id="no_nums_ucl_stock_img" />
        </div>
    )
}