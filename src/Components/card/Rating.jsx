import React from 'react'

function Rating({stars=''}) {
    const rows = [];
    let star=()=>{
        return <img key={Math.random()} src="/star.png" alt="rate" width={15} height={15}/>
    }
for (let i = 0; i < stars; i++) {
    rows.push(star());
}
  return (
    

            <div className='flex'>
            {rows?.map((row)=>{
                return row;
            })}
            </div>
    
        )
}

export default Rating