import React, { Fragment } from 'react'
import Head from 'next/head'
import {prefix} from '../../utils/constant'
const Header = () => {
  return (
    <Fragment>
      <Head>
        <link
          rel="preload"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
          href={prefix + '/font/IBMPlexSansThai-Bold.woff2'}
        />
        <link
          rel="preload"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
          href={prefix + '/font/IBMPlexSansThai-SemiBold.woff2'}
        />
        <link
          rel="preload"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
          href={prefix + '/font/IBMPlexSansThai.woff2'}
        />
      </Head>
    </Fragment>
  )
}
export default Header
