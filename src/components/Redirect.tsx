import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import GooglePlayButton from '@theme/GooglePlayButton';
import AppStoreButton from '@theme/AppStoreButton';
import { useHistory } from 'react-router-dom';

const Redirect: React.FC = () => {
    const [display, setDisplay] = useState('none');
    const location = useLocation();
    const history = useHistory();
    const params = new URLSearchParams(location.search);
    const promoter = params.get('x') || 'threetenlabs';
    const utmMedium = params.has('x') ? 'influencer' : 'website';

    const iOSUrl = 'https://apps.apple.com/app/apple-store/id6472488148?pt=126749548&ct=${promoter}&mt=8';
    const androidUrl = 'https://play.google.com/store/apps/details?id=com.threetenlabs.spidersolitaire&utm_source=threetenlabswebsite&utm_medium=${utmMedium}&utm_campaign=2024install&utm_content=${promoter}';


  useEffect(() => {
    var ua = navigator.userAgent.toLowerCase();
    var isAndroid = ua.indexOf("android") > -1;
    var isiOS = /iPad|iPhone|iPod/.test(ua);

    if (isiOS) {
        setTimeout(function(){window.location.replace(iOSUrl);},250);     
    } else if (isAndroid) {
        setTimeout(function(){window.location.replace(androidUrl);},250);     
    } else {
      setDisplay('flex');
    }
  }, []);

  return (
    <div style={{display: display, flexDirection: 'column', alignItems: 'center', gap: '20px', maxWidth: '90%', margin: '0 auto', padding: '20px'}}>
      <div className="row">
        <div className="col col--12--center yassIcon">
          <img src="/img/yass/playstore.png" alt="Y.A.S.S. Solitaire" />
        </div>
      </div>
      <div className="row" style={{display: 'flex', justifyContent: 'space-around', flexWrap: 'nowrap'}}>
        <div style={{marginRight: '10px', flex: '1'}}>
            <AppStoreButton
                url={iOSUrl}
                theme={"light"}
                height={50} // Adjust the height as needed
                className={"custom-style"}
            />
        </div>
        <div style={{marginLeft: '10px', flex: '1'}}>
            <GooglePlayButton
                url={androidUrl}
                theme={"light"}
                height={50} // Adjust the height as needed
                className={"custom-style"}
            />
        </div>
    </div>
        
    <div className="row">
        <p>
            "In a world brimming with Spider Solitaire games, we thought, "Why not add one more?" Introducing "Y.A.S.S - Yet Another Spider Solitaire," the game that dares to tread where many have tread before, but with a few delightful twists!
            <br/><br/>
            Why Y.A.S.S?
            <br/><br/>
            Sure, you've probably played Spider Solitaire more times than you've hit the snooze button, but Y.A.S.S brings a fresh charm to this age-old classic. Here's why our game stands out in the deck:
            <br/><br/>
            Choose Your Challenge: Whether you're a one-suit wonder or a four-suit fiend, we've got you covered. With 1, 2, and 4 suit difficulty levels, Y.A.S.S caters to the cautious beginner and the daring expert alike.
            <br/><br/>
            Unlimited Hints & Undos: Because everyone deserves a second chance...or third...or maybe a fourth. Made a wrong move? Our unlimited undos are like your favorite comfort blanket - always there when you need them.
            <br/><br/>
            Deal Sharing: Think you've nailed a tough deal? Challenge friends to beat your score with the same cards. It's like sending a postcard, but with more bragging rights.
            <br/><br/>
            Climb the Leaderboards: Showcase your solitaire prowess and rise up the ranks. Remember, it's not just about playing; it's about playing to become a legend."
        </p>
    </div>
</div>   
  );
};

export default Redirect;