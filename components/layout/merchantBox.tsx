import React, { Fragment } from 'react'
import Facility from '../utils/facility'
const MerchantBox = ({ data, price }) => {
  const renderOpen = () => {
    if (data.isOpen == 'N') {
      return <div className="tag close">ปิดแล้ว</div>
    } else if (data.isOpen == 'Y') {
      return <div className="tag open">เปิดอยู่</div>
    } else {
      return null
    }
  }
  const renderPrice = () => {
    return [
      ...Array(data.priceLevel).fill(1),
      ...Array(4 - data.priceLevel).fill(0),
    ].map((el) => {
      return (
        <span style={{ color: `${el == 1 ? '#222222' : '#bbbbbb'}` }}>฿</span>
      )
    })
  }
  return (
    <Fragment>
      <div
        className="flex"
        style={{
          flexWrap: 'wrap',
          width: '100%',
          border: '1px solid #e2e8f0',
          padding: '5px',
          background: '#fff',
        }}
      >
        <div
          className="shop-image"
          style={{
            objectFit: 'cover',
            overflow: 'hidden',
          }}
        >
          <img
            style={{
              width: '100%',
              height: '100%',
              maxWidth: '100%',
              maxHeight: '100%',
              objectFit: 'cover',
            }}
            src={data.coverImageId}
            alt="merchant-img"
          />
        </div>
        <div style={{ flex: '1', padding: '1rem 1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span className="shop-title">{data.shopNameTH}</span> {renderOpen()}
          </div>
          <div className="shop-content">
            <span>{data.subcategoryName}</span>
            <span style={{ margin: '0 1rem' }}>|</span>{' '}
            <span>{renderPrice()}</span>{' '}
            <span style={{ margin: '0 1rem' }}>|</span>
            <span>
              {data.addressDistrictName} {data.addressProvinceName}
            </span>
          </div>
          <div
            style={{
              height: '1px',
              width: '65%',
              background: 'rgb(238, 238, 238)',
              margin: '1rem 0',
            }}
          ></div>
          <div
            className="shop-content"
            dangerouslySetInnerHTML={{ __html: data.highlightText }}
          ></div>
          {data.recommendedItems.length > 0 ? (
            <div style={{ marginTop: '.3rem' }}>
              <span style={{ fontWeight: 600 }}>สินค้าแนะนำ: </span>
              <span className="shop-content">
                {data.recommendedItems.join(', ')}
              </span>
            </div>
          ) : null}
          {data.facilities.length > 0 ? (
            <div className="flex" style={{ marginTop: '1rem' }}>
              {data.facilities.map((el) => {
                return (
                  <div style={{ marginRight: '.5rem' }}>
                    <Facility type={el} />
                  </div>
                )
              })}
            </div>
          ) : null}
        </div>
      </div>
      <style jsx>
        {`
          .shop-title {
            font-size: 1.3rem;
            font-weight: bold;
          }
          .shop-content {
            color: rgb(153, 153, 153);
          }
        `}
      </style>
    </Fragment>
  )
}
export default MerchantBox
