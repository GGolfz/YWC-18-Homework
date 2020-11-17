import { Input } from 'antd'
import React, { Fragment } from 'react'
import SelectLocation from '../utils/selectLocation'
import Icon from '../icon/icon'
import { prefix } from '../../utils/constant'
const Nav = ({ province, current, handleChange }) => {
  return (
    <Fragment>
      <div className="flex justify-center nav" style={{ alignItems: 'center' }}>
        <div style={{ paddingRight: '2rem' }}>
          <img
            className="desktop"
            style={{ height: '40px', width: 'auto' }}
            src={prefix + '/image/halfhalf-logo.png'}
            alt="logo-desktop"
          />
          <img
            className="mobile"
            style={{ height: '40px', width: 'auto' }}
            src={prefix + '/image/halfhalf-logo-mini.png'}
            alt="logo-mobile"
          />
        </div>
        <div
          style={{
            display: 'flex',
            flex: '1',
            border: '1px solid #d9d9d9',
            borderRadius: '8px',
            padding: '.25rem 0',
            overflow: 'hidden',
            fontSize: '1.2em',
            height: '100%',
            alignItems: 'center',
          }}
        >
          <div
            className="desktop"
            style={{
              borderRight: '1px solid #d9d9d9',
              height: '2rem',
            }}
          >
            <SelectLocation
              width={200}
              handleChange={handleChange}
              border={false}
              current={current}
              province={province}
            />
          </div>
          <Input
            bordered={false}
            style={{ padding: '0 0 0 8px', height: '2rem' }}
            suffix={
              <Fragment>
                <div
                  style={{
                    display: 'flex',
                    height: '100%',
                    alignItems: 'center',
                    background: '#f8f8f8',
                    padding: '0 1.5rem',
                  }}
                >
                  <Icon type="search" />
                </div>
              </Fragment>
            }
            placeholder="ค้นหา ชื่อ ร้านอาหาร และเครื่องดื่ม ร้านธงฟ้า ร้านค้า OTOP และสินค้าทั่วไป"
          />
        </div>
        <div className="mobile" style={{ paddingLeft: '.75rem' }}>
          <img
            src={prefix + '/image/filter.png'}
            style={{ height: '20px', width: 'auto' }}
          ></img>
        </div>
      </div>
    </Fragment>
  )
}
export default Nav
