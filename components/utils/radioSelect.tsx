import React, { Fragment } from 'react'
import { Radio } from 'antd'
const RadioSelect = ({ current, data, handleChange, property }) => {
  return (
    <Fragment>
      <Radio.Group value={current} onChange={handleChange}>
        <Radio value="ทั้งหมด">ทั้งหมด</Radio>
        {data?.map((el, index) => {
          if (index > 0 && data[index] != data[index - 1]) {
            return (
              <Radio
                style={{ display: 'block', lineHeight: '32px' }}
                key={index}
                value={property ? el[property] : el}
              >
                {property ? el[property] : el}
              </Radio>
            )
          } else {
            return null
          }
        })}
      </Radio.Group>
    </Fragment>
  )
}
export default RadioSelect
