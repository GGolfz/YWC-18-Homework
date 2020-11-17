import { Breadcrumb } from 'antd'
import React, { Fragment } from 'react'

const Navigate = () => {
  return (
    <Fragment>
      <Breadcrumb className="navigate" style={{background:'#27397C',color:'white !important'}}>
        <Breadcrumb.Item><a href="#" style={{color:'white',textDecoration:'underline'}}>หน้าแรก</a></Breadcrumb.Item>
        <Breadcrumb.Item><span style={{color:'white',fontWeight:'bold'}}>ค้นหา</span></Breadcrumb.Item>
      </Breadcrumb>
    </Fragment>
  )
}
export default Navigate
