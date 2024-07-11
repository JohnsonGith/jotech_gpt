import React from 'react'
import './brand.css'
import { google, slack, atlassian, dropbox, shopify } from './imports';

const Brand = () => {
  return (
    <div className="gpt3__brand section__padding">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="brand__wrapper">
              <img src={google} alt="Google" />
              <img src={slack} alt="Slack" />
              <img src={atlassian} alt="Atlassian" />
              <img src={dropbox} alt="Dropbox" />
              <img src={shopify} alt="Shopify" />
            </div>
          </div>
        </div>

    </div>
    </div>
  )
}

export default Brand
