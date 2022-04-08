import './portfolio.css';
import fillin1 from '../../images/background.png'
import fillin2 from '../../images/background3.png'
import fillin3 from '../../images/IMG_0053.PNG'
import { GithubFilled, AlignCenterOutlined,RightSquareOutlined, RightSquareTwoTone, FileTwoTone, CodeTwoTone } from '@ant-design/icons';
import { Card, Col, Row } from 'antd';

const { Meta } = Card;
export default function Portfolio() {
  return(
    <>
        <Row gutter={16}>
          <Col span={8}>
            <Card 
              hoverable 
              id='project1' 
              className='individual-cards' 
              cover={<img alt="fillin" src={fillin1}/>}
              actions={[
                <FileTwoTone key="more-info" />,
                <CodeTwoTone key="code" />
              ]}
            >
              
              <Meta 
                title="Project 1 Title"
                description="Project 1 Description"
                />
            </Card>
          </Col>
          <Col span={8}>
          <Card 
              hoverable 
              id='project2' 
              className='individual-cards' 
              cover={<img alt="fillin" src={fillin2}/>}
              actions={[
                <FileTwoTone key="more-info" />,
                <CodeTwoTone key="code" />
              ]}
            >
              
              <Meta 
                title="Project 2 Title"
                description="Project 2 Description"
                />
            </Card>
          </Col>
          <Col span={8}>
          <Card 
              hoverable 
              id='project' 
              className='individual-cards' 
              cover={<img alt="fillin" src={fillin3}/>}
              actions={[
                <FileTwoTone key="more-info" />,
                <CodeTwoTone key="code" />
              ]}
            >
              
              <Meta 
                title="Project 3 Title"
                description="Project 3 Description"
                />
            </Card>
          </Col>
        </Row>
       

    </>
  )
}