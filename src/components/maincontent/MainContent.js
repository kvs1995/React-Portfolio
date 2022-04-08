import './maincontent.css';
import { Card, Col, Row } from 'antd';
import { GithubFilled, AlignCenterOutlined,RightSquareOutlined, RightSquareTwoTone, FileTwoTone, CodeTwoTone } from '@ant-design/icons';
const { Meta } = Card;
export default function MainContent({clicked}) {
  return(
    <div className='main-content-main'>
      <div className="site-card-wrapper card-container">
        <Row gutter={16}>
          <Col span={8}>
            <Card 
              hoverable 
              id='project1' 
              className='individual-cards' 
              // cover={<img alt="" src=""/>}
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
              // cover={<img alt="" src=""/>}
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
              // cover={<img alt="" src=""/>}
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
      </div>
    </div>
  )
}