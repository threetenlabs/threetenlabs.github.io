import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import GooglePlayButton from '@theme/GooglePlayButton';
import AppStoreButton from '@theme/AppStoreButton';

const Redirect: React.FC = () => {
  const [display, setDisplay] = useState('none');
  const [userAgent, setUserAgent] = useState('');
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const promoter = params.get('x') || 'threetenlabs';
  const utmMedium = params.has('x') ? 'influencer' : 'website';

  const iOSUrl = `https://apps.apple.com/us/app/y-a-s-s/id6472488148?ct=2024install&pt=${promoter}`;
  const androidUrl = `https://play.google.com/store/apps/details?id=com.threetenlabs.spidersolitaire&utm_source=threetenlabswebsite&utm_medium=${utmMedium}&utm_campaign=2024install&utm_content=${promoter}`;

  useEffect(() => {
    var ua = navigator.userAgent.toLowerCase();
    setUserAgent(ua);
    var isAndroid = ua.indexOf("android") > -1;
    var isiOS = /iPad|iPhone|iPod/.test(ua);

    if (isiOS) {
      window.location.href = iOSUrl;
    } else if (isAndroid) {
      window.location.href = androidUrl;
    } else {
      setDisplay('flex');
    }
  }, []);

  return (
    <div style={{display: display, flexDirection: 'column', alignItems: 'center', gap: '20px'}}>
      <div className="row">
      <p>User Agent: {userAgent}</p>
        <div className="col col--12--center yassIcon">
          <img src="/img/yass/playstore.png" alt="Y.A.S.S. Solitaire" />
        </div>
      </div>
      <div className="row" style={{display: 'flex', justifyContent: 'space-around'}}>
        <div style={{marginRight: '10px'}}>
          <AppStoreButton
            url={iOSUrl}
            theme={"light"}
            height={60}
            className={"custom-style"}
          />
        </div>
        <div style={{marginLeft: '10px'}}>
          <GooglePlayButton
            url={androidUrl}
            theme={"light"}
            height={60}
            className={"custom-style"}
          />
        </div>
      </div>
    </div>    
  );
};

export default Redirect;