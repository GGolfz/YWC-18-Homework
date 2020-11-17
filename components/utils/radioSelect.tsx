import React, {Fragment} from 'react'
import { Radio } from 'antd'
const RadioSelect = ({current,data,handleChange,property}) => {
    return (
        <Fragment>
            <Radio.Group value={current} onChange={handleChange}>
            <Radio value="ทั้งหมด">ทั้งหมด</Radio>
            {data?.map((el, index) => {
              return (
                <Radio
                  style={{ display: 'block', lineHeight: '32px' }}
                  key={index}
                  value={property ? el[property] : el}
                >
                  {property ? el[property] : el}
                </Radio>
              )
            })}
          </Radio.Group>
        </Fragment>
    )
}
export default RadioSelect;