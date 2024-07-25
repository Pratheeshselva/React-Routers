import React from 'react'
import Card from 'react-bootstrap/Card';
import '../index.css'


function Cards({ img, content, author, date, readtime }) {

  return <>

    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img className='cardimg' variant="top" src={img} />
      <Card.Body>
        <Card.Text className='cardcontent'>
          {content}
        </Card.Text>
        <Card.Text className='author'>
          {author}
        </Card.Text>
        <div >
          <Card.Text className='dateandreadtime'>
            <div>
              {date} </div> <div>{readtime}</div>
          </Card.Text>
        </div>



      </Card.Body>
    </Card>
  </>
}

export default Cards