import React from 'react'
import { Row, Col } from 'antd'

export default function Card(props) {
    return (
        <div>
            <Row gutter={16}>
                <Col className="gutter-row" span={6}>
                    {props.data.map((val) => (
                        <div>
                            <h1>val.headline</h1>
                        </div>
                    ))}
                </Col>
            </Row>
        </div>
    )
}
