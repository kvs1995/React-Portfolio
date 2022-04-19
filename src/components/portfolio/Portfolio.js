//CSS Imports
import './portfolio.css';

//Image Imports
import fillin1 from '../../images/blackfiller.jpeg'

//Icon Imports
import { GithubFilled, AlignCenterOutlined,RightSquareOutlined, RightSquareTwoTone, FileTwoTone, CodeTwoTone } from '@ant-design/icons';

//Layout Antd Imports
import { Card, Col, Row } from 'antd';
import { Carousel } from 'react-bootstrap'
import { useState } from 'react'
//Variable Declaration
const { Meta } = Card;
const cardIcons = [ <FileTwoTone key="more-info" />, <CodeTwoTone key="code" /> ]

export default function Portfolio() {
  
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
  return(
    <>
      {/* <Row gutter={18} className="card-container">
        <Col span={6} className="card-col">
          <Card hoverable className='individual-cards' id='project1' cover={ <img alt="fillin" src={fillin1}/> }actions={cardIcons}>
            <Meta title="Project 1 Title" description="Project 1 Description"/>
          </Card>
        </Col>

        <Col span={6} className="card-col">
          <Card hoverable className='individual-cards' id='project2' cover={ <img alt="fillin" src={fillin1}/> }actions={cardIcons}>
            
            <Meta title="Project 2 Title" description="Project 2 Description"/>
          </Card>
        </Col>

        <Col span={6} className="card-col">
          <Card hoverable className='individual-cards' id='project3' cover={ <img alt="fillin" src={fillin1}/> } actions={cardIcons}>
            <Meta title="Project 3 Title" description="Project 3 Description" />
          </Card>
        </Col>
      </Row> */}
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Row gutter={18} className="portfolio-container">
          <Carousel.Item>
            
          </Carousel.Item>
        </Row>
      </Carousel>

    </>
  )
}