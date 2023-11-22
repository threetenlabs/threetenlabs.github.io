import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

import Typed from '@theme/Typed';

import SvgHero from '@site/src/svg/Hero';
import SvgGame from '@site/src/svg/Game';
import SvgGameBg from '@site/src/svg/CreateBg';
import SvgCompany from '@site/src/svg/Company';
import SvgCompanyBg from '@site/src/svg/DevelopBg';
import SvgExplore from '@site/src/svg/Explore';
import SvgExploreBg from '@site/src/svg/ExploreBg';
import SvgArrowRight from '@site/src/svg/ArrowRight';

function Hero() {
  return (
    <header className="rds-hero">
      <div className="container">
        <div className="row">
          <div className="col col--12">
            <div className="row">
              <div className="col col--7">
                <h1 className="hero-title">ThreeTen Labs</h1>

                <h2 className="hero-subtitle">
                  <Typed
                    strings={['>_ Life is Better With Playmates']}
                    typeSpeed={75}
                  />
                </h2>
              </div>
              <div className="col col--5">
                <SvgHero
                  width="300px"
                  color="#FFFFFF"
                  className="illustration"
                />
              </div>
            </div>
            <div className="boxes">
              <div className="box box-create">
                <SvgGameBg color="#FFFFFF" className="bg" />
                <span className="icon">
                  <SvgGame color="#FFFFFF" />
                </span>
                <div className="text">
                  <h3 className="title">Games</h3>
                  <p className="description">Simple and fun mobile games.</p>
                  <span className="more">
                    View Games <SvgArrowRight color="#DC382C" />
                  </span>
                </div>
                <a href={useBaseUrl('/games/')} className="link">
                  Read More
                </a>
              </div>

              <div className="box box-develop">
                <SvgCompanyBg color="#FFFFFF" className="bg" />
                <span className="icon">
                  <SvgCompany color="#FFFFFF" />
                </span>
                <div className="text">
                  <h3 className="title">Company</h3>
                  <p className="description">Learn more about our company.</p>
                  <span className="more">
                    Take a look <SvgArrowRight color="#DC382C" />
                  </span>
                </div>
                <a href={useBaseUrl('/company/')} className="link">
                  Read More
                </a>
              </div>

              <div className="box box-explore">
                <SvgExploreBg color="#FFFFFF" className="bg" />
                <span className="icon">
                  <SvgExplore color="#FFFFFF" />
                </span>
                <div className="text">
                  <h3 className="title">Support</h3>
                  <p className="description">
                    Get help with our games and services.
                  </p>
                  <span className="more">
                    Contact Us
                    <SvgArrowRight color="#DC382C" />
                  </span>
                </div>
                <a href={useBaseUrl('/support/')} className="link">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Hero;
