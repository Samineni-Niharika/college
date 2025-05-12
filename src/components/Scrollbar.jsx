import React from 'react'

function Scrollbar({data}) {
    let upco=data.filter(item => item.recrut=='y')
    console.log(upco)
    let a=[]
    upco.map((item)=>(
        a.push(item.Club)

    ))
    let ab = [...new Set(a)];
    
    
    return (
        <div>
            <div className=' bg-red-700 items-center text-white text-center'>
                <div className='p-1  bar'>
                    <h1>
                    ⚠️ {ab.join(', ')} {ab.length > 1 ? 'are' : 'is'} recruiting
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default Scrollbar
