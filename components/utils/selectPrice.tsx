import { Fragment } from 'react'
import { Select } from 'antd'
const { Option } = Select
const SelectPrice = ({ border, width, price, current, handleChange }) => {
  return (
    <Fragment>
      <Select
        value={current == '' ?null:current}
        onChange={handleChange}
        style={{ width: width }}
        bordered={border}
        placeholder="กรุณาเลือก"
      >
        {price.map((el, index) => {
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
export default SelectPrice
