import React from 'react'
import { Row, Col } from 'antd'


const adsData = [
    {
        id:1,
        companyId:3,
        primaryText:'The world’s leading CRM is ready to help you simplify the business part of your small business.',
        headline:'Salesforce for Small Business',
        description:'',
        cta:'Sign Up',
        imageUrl:'https://scontent-lax3-1.xx.fbcdn.net/v/t39.35426-6/272836524_2153961231425063_357450253016481676_n.jpg?stp=dst-jpg_s600x600&_nc_cat=104&ccb=1-7&_nc_sid=cf96c8&_nc_ohc=L2Nkkg2Lb7AAX8MFWMk&_nc_ht=scontent-lax3-1.xx&oh=00_AT-m5FwsdNtjj4Eg_tpLTCYnXD2agiVZIYmPNukPVcQpgg&oe=62FF1CFB'
  
    },
    {
        id:2,
        companyId:1,
        primaryText:'We like where you’re going with this.',
        headline:'Relaxed Fit Mens Jeans',
        description:'',
        cta:'',
        imageUrl:''
  
  },
    { 
        id:3,
        companyId:6,
        primaryText:'Teva x Cotopaxi is back! Celebrate eternal summer with limited-edition Teva x Cotopaxi Original Universal sandals in bold new colors.',
        headline:'Made With Recycled Plastic',
        description:'',
        cta:'',
        imageUrl:''
  
    },
  
    { 
        id:4,
        companyId:7,
        primaryText:
        'The Emmy-nominated Netflix comedy special from the late Norm Macdonald is his last gift to the world of comedy he helped shape',
         headline:'',
        description:'',
        cta:'',
        imageUrl:''
  
    },
    { 
        id:5,
        companyId:9,
        primaryText:'Visit Valentino.com, discover the new products and shop now!',
        headline:'',
        description:'',
        cta:'',
        imageUrl:''
  
    },
    { 
        id:6,
        companyId:11,
        primaryText:'Say ‘goodnight’ to sleeping hot 🔥 with Purple products—designed to dissipate heat.',
        headline:'',
        description:'',
        cta:'',
        imageUrl:''
  
    },
    { 
        id:7,
        companyId:10,
        primaryText:'Dark spots. Breakouts. Rosacea. Dull skin. Fine lines. Our formulas are custom-mixed for YOUR skin concerns.',
        headline:'',
        description:'',
        cta:'',
        imageUrl:''
  
    }
  ]

export default function Card() {
    return (
        <div>
            <Row gutter={16}>
                <Col className="gutter-row" span={6}>
                    
                        <div>
                            <h1>dsgdfagfd</h1>
                        </div>
                </Col>
            </Row>
        </div>
    )
}
