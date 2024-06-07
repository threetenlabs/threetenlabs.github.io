import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import GooglePlayButton from '@theme/GooglePlayButton';
import AppStoreButton from '@theme/AppStoreButton';

export const BedlamRedirect: React.FC = () => {
  const [display, setDisplay] = useState('none');
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const promoter = params.get('x') || 'threetenlabs';
  const utmMedium = params.has('x') ? 'influencer' : 'website';

  const iOSUrl = `https://apps.apple.com/app/apple-store/id6472488148?pt=126749548&ct=${promoter}&mt=8`;
  const androidUrl = `https://play.google.com/store/apps/details?id=com.threetenlabs.spidersolitaire&utm_source=threetenlabswebsite&utm_medium=${utmMedium}&utm_campaign=2024install&utm_content=${promoter}`;

  useEffect(() => {
    const ua = navigator.userAgent.toLowerCase();
    const isAndroid = ua.indexOf('android') > -1;
    const isiOS = /iPad|iPhone|iPod/.test(ua);

    if (isiOS) {
      setTimeout(function () {
        window.location.replace(iOSUrl);
      }, 250);
    } else if (isAndroid) {
      setTimeout(function () {
        window.location.replace(androidUrl);
      }, 250);
    } else {
      setDisplay('flex');
    }
  }, []);

  return (
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
          <img src="/img/bedlam/feature.png" alt="Bedlam Games" />
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

      <div className="row">
        <p>Bedlam Games: Where Chaos Is Just Another Day in Paradise!</p>
        <p>
          Step into the world of Bedlam Games, a revolutionary multiplayer
          gaming platform that transforms your living room into a hub of fun and
          madness. Inspired by the likes of Jackbox.tv, Bedlam Games offers a
          variety of engaging games where your mobile device becomes the
          controller, and your TV or computer screen becomes the central game
          board.
          <br />
          <br />
          Why Bedlam Games?
          <br />
          <br />
          Unleash Creativity: Play a variety of games in various categories such
          as drawing, trivia, adventure, and puzzles that will be sure to test
          your skills.
          <br />
          <br />
          Engaging Atmosphere: Our games are designed with rich, colorful
          graphics and a chaotic, fun atmosphere that keeps everyone
          entertained. You can play in a single place all together, or remotely,
          the choice is yours.
          <br />
          <br />
          Games and content is constantly updated, so you'll never run out of
          new challenges. Download Bedlam Games today and bring the chaos to
          your next game night.
          <br />
          <br />
        </p>
      </div>
    </div>
  );
};
