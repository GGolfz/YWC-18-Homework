import React, { Fragment, useState } from 'react'
import SelectLocation from '../utils/selectLocation'
import SelectPrice from '../utils/selectPrice'
import RadioSelect from '../utils/radioSelect'
const FilterBox = ({
  categories,
  handleChangeCategory,
  currentCategory,
  province,
  handleChangeProvince,
  currentProvince,
  price,
  handleChangePrice,
  currentPrice,
  handleChangeSubCategory,
  currentSubCategory,
}) => {
  return (
    <Fragment>
      <div>
        <div className="filterbox-title">ประเภทร้านค้า</div>
        <div className="filterbox-content">
          <RadioSelect
            current={currentCategory}
            data={categories}
            handleChange={handleChangeCategory}
            property="name"
          />
        </div>
        <div className="filterbox-title">จังหวัด/ใกล้ฉัน</div>
        <div className="filterbox-content">
          <SelectLocation
            width={'100%'}
            border={true}
            province={province}
            handleChange={handleChangeProvince}
            current={currentProvince}
          />
        </div>
        <div className="filterbox-title">ราคา</div>
        <div className="filterbox-content">
          <SelectPrice
            width={'100%'}
            border={true}
            price={price}
            handleChange={handleChangePrice}
            current={currentPrice}
          />
        </div>
        {currentCategory != 'ทั้งหมด' ? (
          <Fragment>
            <div className="filterbox-title">ประเภท {currentCategory}</div>
            <div className="filterbox-content">
              <RadioSelect
                current={currentSubCategory}
                data={
                  categories.find((el) => el.name == currentCategory)
                    ?.subcategories
                }
                handleChange={handleChangeSubCategory}
                property={null}
              />
            </div>
          </Fragment>
        ) : null}
      </div>
      <style jsx>
        {`
          .filterbox-title {
            font-weight: bold;
            margin-bottom: 1rem;
            font-size: 1rem;
          }
          .filterbox-content {
            margin-bottom: 1.5rem;
          }
        `}
      </style>
    </Fragment>
  )
}
export default FilterBox
