import React, { Fragment } from 'react'
import { prefix } from '../../utils/constant'
const Facility = ({ type }) => {
  return (
    <Fragment>
      <div
        style={{
          border: '1px solid rgb(108, 191, 95)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '32px',
          height: '32px',
          borderRadius: '20px',
        }}
      >
        <img
          style={{ height: '1.2rem', width: '1.2rem' }}
          src={prefix + '/image/' + type + '.png'}
          alt="facility"
        />
      </div>
    </Fragment>
  )
}
export default Facility
