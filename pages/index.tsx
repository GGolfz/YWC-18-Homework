import { Button } from 'antd'
import Axios from 'axios'
import React, { Fragment, useEffect, useState } from 'react'
import FilterBox from '../components/layout/filterBox'
import Header from '../components/layout/header'
import MerchantBox from '../components/layout/merchantBox'
import Nav from '../components/layout/nav'
import Navigate from '../components/utils/navigate'
const Home = () => {
  const [province, setProvince] = useState([])
  const [categories, setCategories] = useState([])
  const [priceRange, setPriceRange] = useState([])
  const [merchant, setMerchant] = useState([])
  const [currentProvince, setCurrentProvince] = useState('near')
  const [currentCategory, setCurrentCategory] = useState('ร้านอาหารและเครื่องดื่ม')
  const [currentPrice, setCurrentPrice] = useState('')
  const [currentSubCategory, setCurrentSubCategory] = useState('ทั้งหมด')
  const changeProvince = (val) => {
    setCurrentProvince(val)
  }
  const changePrice = (val) => {
    setCurrentPrice(val)
  }
  const changeCategories = (e) => {
    setCurrentCategory(e.target.value)
  }
  const changeSubCategory = (e) => {
    setCurrentSubCategory(e.target.value)
  }
  useEffect(() => {
    Axios.get('https://panjs.com/ywc18.json').then((res) => {
      const { categories, provinces, priceRange, merchants } = res.data
      setCategories(categories)
      setProvince(provinces)
      setPriceRange(priceRange)
      setMerchant(merchants)
    })
  }, [])
  return (
    <Fragment>
      <Header />
      <div className="background">
        <Nav
          province={province}
          current={currentProvince}
          handleChange={changeProvince}
        />
        <Navigate />
        <div className="content" style={{ paddingBottom: '3rem' }}>
          <div
            style={{ fontSize: '1.5em', fontWeight: 600, marginBottom: '3rem' }}
          >
            ผลการค้นหา{' '}
            {currentCategory + (currentCategory != 'ทั้งหมด' ? ' ทั้งหมด' : '')}
          </div>
          <div className="sub-content" style={{ display: 'flex' }}>
            <div
              className="desktop"
              style={{
                width: '25%',
                border: '1px solid rgba(160,174,192)!important',
                background: '#fff',
                padding: '1rem',
              }}
            >
              <FilterBox
                currentCategory={currentCategory}
                categories={categories}
                handleChangeCategory={changeCategories}
                province={province}
                currentProvince={currentProvince}
                handleChangeProvince={changeProvince}
                price={priceRange}
                currentPrice={currentPrice}
                handleChangePrice={changePrice}
                currentSubCategory={currentSubCategory}
                handleChangeSubCategory={changeSubCategory}
              />
            </div>
            <div className="merchant-list" style={{ flex: '1' }}>
              {merchant.map((el, index) => {
                return (<div style={{marginBottom:'.5 rem'}}><MerchantBox key={index} data={el} price={priceRange} /></div>)
              })}
              <div className="button-seemore" style={{marginTop:'3rem',display:'flex',justifyContent:'center'}}>
                <Button style={{width:'384px',height:'50px'}}>ดูเพิ่มเติม</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
export default Home
