import React from 'react'

function Animals() {
    let animals: string[] = ['Cat', 'Dog', 'Bird'];

  return (<>
    <div>Animals</div>
    <ul>
        { animals.map((animal, index) => 
            <li key={`animals-${index}`}>{animal}
            </li>)}
    </ul>
  </>)
}

export default Animals