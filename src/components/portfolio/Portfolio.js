//CSS Imports
import './portfolio.css';

//Image Imports
import fillin1 from '../../images/background.png'
import fillin2 from '../../images/background3.png'
import fillin3 from '../../images/IMG_0053.PNG'

//Icon Imports
import { GithubFilled, AlignCenterOutlined,RightSquareOutlined, RightSquareTwoTone, FileTwoTone, CodeTwoTone } from '@ant-design/icons';

//Layout Antd Imports
import { Card, Col, Row } from 'antd';

//Variable Declaration
const { Meta } = Card;
const cardIcons = [ <FileTwoTone key="more-info" />, <CodeTwoTone key="code" /> ]

export default function Portfolio() {

  return(
    <>
      <Row gutter={15} className="card-container">
        <Col span={5} className="card-col">
          <Card hoverable className='individual-cards' id='project1' cover={ <img alt="fillin" src={fillin1}/> }actions={cardIcons}>
            <Meta title="Project 1 Title" description="Project 1 Description"/>
          </Card>
        </Col>

        <Col span={5} className="card-col">
          <Card hoverable className='individual-cards' id='project2' cover={ <img alt="fillin" src={fillin2}/> }actions={cardIcons}>
            
            <Meta title="Project 2 Title" description="Project 2 Description"/>
          </Card>
        </Col>

        <Col span={5} className="card-col">
          <Card hoverable className='individual-cards' id='project3' cover={ <img alt="fillin" src={fillin3}/> } actions={cardIcons}>
            <Meta title="Project 3 Title" description="Project 3 Description" />
          </Card>
        </Col>
      </Row>
    </>
  )
}