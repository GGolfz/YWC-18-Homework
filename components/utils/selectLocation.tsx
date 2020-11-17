import React, { Fragment } from 'react'
import { Select } from 'antd'
import Icon from '../icon/icon'
const { Option } = Select
const SelectLocation = ({ border, width, province, current, handleChange }) => {
  return (
    <Fragment>
      <Select
        value={current}
        onChange={handleChange}
        style={{ width: width }}
        bordered={border}
      >
        <Option value="near">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Icon type="location" />
            <span>พื้นที่ใกล้ฉัน</span>
          </div>
        </Option>
        <Option value="all">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Icon type="location-all" />
            <span>สถานที่ทั้งหมด</span>
          </div>
        </Option>
        {province.map((el, index) => {
          return (
            <Option value={el} key={index}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <span>{el}</span>
              </div>
            </Option>
          )
        })}
      </Select>
    </Fragment>
  )
}
export default SelectLocation
