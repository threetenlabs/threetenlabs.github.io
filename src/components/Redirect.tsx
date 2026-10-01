import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Head from '@docusaurus/Head';
import GooglePlayButton from '@theme/GooglePlayButton';
import AppStoreButton from '@theme/AppStoreButton';

/** Which store a visitor's device belongs to, or null for everything else. */
export function storePlatform(
  userAgent: string,
  maxTouchPoints = 0,
): 'ios' | 'android' | null {
  const ua = userAgent.toLowerCase();
  if (ua.includes('android')) return 'android';
  // The pattern used to be /iPad|iPhone|iPod/ tested against the *lowercased*
  // user agent, which can never match, so every iPhone got the desktop page
  // instead of the App Store. iPadOS 13+ also reports itself as a Mac; a
  // touch screen is what gives it away.
  if (/iphone|ipod|ipad/.test(ua)) return 'ios';
  if (ua.includes('macintosh') && maxTouchPoints > 1) return 'ios';
  return null;
}

type RedirectProps = {
  /** App Store `ct` / Play `utm_content` when the link carries no `x=` promoter. */
  campaign?: string;
};

const Redirect: React.FC<RedirectProps> = ({ campaign = 'threetenlabs' }) => {
  const [display, setDisplay] = useState('none');
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  // A shared game (`/games/yass/?shareId=…`) is its own campaign, so installs
  // that came from players sharing are visible separately in both consoles.
  const isShare = params.has('shareId');
  const promoter = params.get('x') || (isShare ? 'share' : campaign);
  const utmMedium = params.has('x') ? 'influencer' : isShare ? 'share' : 'website';

  const iOSUrl = `https://apps.apple.com/app/apple-store/id6472488148?pt=126749548&ct=${promoter}&mt=8`;
  const androidUrl = `https://play.google.com/store/apps/details?id=com.threetenlabs.spidersolitaire&utm_source=threetenlabswebsite&utm_medium=${utmMedium}&utm_campaign=2024install&utm_content=${promoter}`;

  useEffect(() => {
    const platform = storePlatform(navigator.userAgent, navigator.maxTouchPoints);
    if (platform === 'ios') {
      setTimeout(() => window.location.replace(iOSUrl), 250);
    } else if (platform === 'android') {
      setTimeout(() => window.location.replace(androidUrl), 250);
    } else {
      setDisplay('flex');
    }
  }, []);

  return (
    <>
    <Head>
      {/* Apple's Smart App Banner: Get/Open above the page in Safari, even where the redirect doesn't run. */}
      <meta name="apple-itunes-app" content="app-id=6472488148" />
    </Head>
    <div
      style={{
        display: display,
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px',
        maxWidth: '90%',
        margin: '0 auto',
        padding: '20px',
      }}>
      <div className="row">
        <div className="col col--12--center yassIcon">
          <img src="/img/yass/playstore.png" alt="Y.A.S.S. Solitaire" />
        </div>
      </div>
      <div
        className="row"
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          flexWrap: 'nowrap',
        }}>
        <div style={{ marginRight: '10px', flex: '1' }}>
          <AppStoreButton
            url={iOSUrl}
            theme={'light'}
            height={50} // Adjust the height as needed
            className={'custom-style'}
          />
        </div>
        <div style={{ marginLeft: '10px', flex: '1' }}>
          <GooglePlayButton
            url={androidUrl}
            theme={'light'}
            height={50} // Adjust the height as needed
            className={'custom-style'}
          />
        </div>
      </div>

      <div className="row" style={{ justifyContent: 'center', textAlign: 'center' }}>
        <p style={{ fontSize: '1.15rem', maxWidth: '40rem' }}>
          <strong>Y.A.S.S.: Yet Another Spider Solitaire.</strong> Free Spider
          Solitaire with a new Deal of the Day every day, at 1, 2 and 4 suits.
          Climb the leaderboards, earn achievements, and play as a guest without
          signing up.
        </p>
      </div>
      <div
        className="row"
        style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', alignItems: 'flex-start' }}>
        <img src="/img/yass/layout.png" alt="The Y.A.S.S. board" style={{ maxHeight: '420px', maxWidth: '100%', borderRadius: '12px' }} />
      </div>
      <div className="row">
        <p>
          "In a world brimming with Spider Solitaire games, we thought, "Why not
          add one more?" Introducing "Y.A.S.S - Yet Another Spider Solitaire,"
          the game that dares to tread where many have tread before, but with a
          few delightful twists!
          <br />
          <br />
          Why Y.A.S.S?
          <br />
          <br />
          Sure, you've probably played Spider Solitaire more times than you've
          hit the snooze button, but Y.A.S.S brings a fresh charm to this
          age-old classic. Here's why our game stands out in the deck:
          <br />
          <br />
          Choose Your Challenge: Whether you're a one-suit wonder or a four-suit
          fiend, we've got you covered. With 1, 2, and 4 suit difficulty levels,
          Y.A.S.S caters to the cautious beginner and the daring expert alike.
          <br />
          <br />
          Unlimited Hints & Undos: Because everyone deserves a second
          chance...or third...or maybe a fourth. Made a wrong move? Our
          unlimited undos are like your favorite comfort blanket - always there
          when you need them.
          <br />
          <br />
          Deal Sharing: Think you've nailed a tough deal? Challenge friends to
          beat your score with the same cards. It's like sending a postcard, but
          with more bragging rights.
          <br />
          <br />
          Climb the Leaderboards: Showcase your solitaire prowess and rise up
          the ranks. Remember, it's not just about playing; it's about playing
          to become a legend."
        </p>
      </div>
    </div>
    </>
  );
};

export default Redirect;
