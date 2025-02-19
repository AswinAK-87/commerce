import React from 'react'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

import Clock from '../components/UI/Clock';

import Helmet from '../components/Helmet/Helmet'
import heroImg from '../assets/images/hero-img.png'
import '../styles/Home.css';

import { Container, Row, Col } from 'reactstrap'

import Services from '../Services/Services';
import ProductList from '../components/UI/ProductList';

import counterImg  from '../assets/images/counter-timer-img.png'

import useGetData from '../custom-hooks/useGetData';
const Home = () => {

const {data:products, loading} = useGetData('products')
console.log(products)

  const [trendingProduct, setTrendingProduct] =useState([]);
  const [bestSalesProduct, setBestSalesProduct] =useState([])
  const [mobileProduct, setMobileProduct] =useState([])
  const [wirelessProduct, setWirelesProduct] =useState([])
  const [popularProduct, setPopularProduct] =useState([])

  const year=new Date().getFullYear();

  useEffect(() => {
    const filterdTrendingProducts = products.filter(item => item.category === 'chair');
    const filterdBestSalesProducts = products.filter(item => item.category === 'sofa');
    const filterdMobileProducts = products.filter(item => item.category === 'mobile');
    const filterWirelessProducts = products.filter(item => item.category === 'wireless');
    const filterPoplarProducts = products.filter(item => item.category === 'watch');

    setTrendingProduct(filterdTrendingProducts)
    setBestSalesProduct(filterdBestSalesProducts)
    setMobileProduct(filterdMobileProducts)
    setWirelesProduct(filterWirelessProducts)
    setPopularProduct(filterPoplarProducts)
  },[products]);
  return (
    <Helmet title={"Home"}>
      <section className="hero__section">
        <Container>
          <Row>
            <Col lg='6' md='6'>
              <div className="hero__content">
                 <p className="hero__subtitle">Trending Products in {year}</p>
                 <h2>Make your Interior More Minimalistic & Modern</h2>
                 <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                  Totam iure qui voluptas quis similique eaque exercitationem quam quos dolor, 
                  </p>
                  <motion.button whileTap={{scale:1.2}} className="buy__btn"><Link to='/shop'>SHOP NOW </Link> </motion.button>
              </div>
            </Col>
            <Col lg6='6' md='6'>
              <div className="hero__img">
                <img src={heroImg} alt='' />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    <Services />
    <section className="trending__products">
      <Container>
        <Row>
          <Col lg='12' className='text-center'>
            <h2 className="section__title">Trending Products</h2>
          </Col>
          {
            loading ? <h5 className='fw-bold'>Loading....</h5> : 
            <ProductList data={trendingProduct}/>
          }
          
        </Row>
      </Container>
    </section>

    <section className="best__sales">
    <Container>
        <Row>
          <Col lg='12' className='text-center'>
            <h2 className="section__title">Best Sales</h2>
          </Col>
          {
            loading ? <h5 className='fw-bold'>Loading....</h5> : 
            <ProductList data={bestSalesProduct}/>
          }
          
        </Row>
      </Container>
    </section>
    <section className="timer__count">
      <Container>
        <Row>
          <Col lg='6' md='12' className='count__down-col'>
            <div className="clock__top-content">
              <h5 className='text-white fs-6 mb-2'>Limited Offers</h5>
              <h4 className='text-white fs-5 mb-2'>Qualitiy Arm Chairs</h4>
            </div>
            <Clock />
            <motion.button whileTap={{scale:1.2}} className="buy__button store__btn"><Link to='/shop'>Visit Store</Link>
            </motion.button>
          </Col>
          <Col lg='6' md='12' className='text-end counter__img'>
            <img src={counterImg} alt='' />
          </Col>
        </Row>
      </Container>
    </section>
    <section className="new__arrivals">
      <Container>
        <Row>
          <Col lg='12' className='text-center mb-5'>
            <h2 className="section__title">
              New Arrivals
            </h2>
          </Col> 
          {
            loading ? <h5 className='fw-bold'>Loading....</h5> : 
            <ProductList data={mobileProduct}/>
          }
                    {
            loading ? <h5 className='fw-bold'>Loading....</h5> : 
            <ProductList data={wirelessProduct}/>
          }
        
        </Row>
      </Container>
    </section>
    <section className="popular__category">
      <Container>
        <Row>
          <Col lg='12' className='text-center mb-5'>
            <h2 className="section__title">
              Popular In Category
            </h2>
          </Col> 
          {
            loading ? <h5 className='fw-bold'>Loading....</h5> : 
            <ProductList data={popularProduct}/>
          }
          
        </Row>
      </Container>
    </section>
    </Helmet>
  )
}

export default Home