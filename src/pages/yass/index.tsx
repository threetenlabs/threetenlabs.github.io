import React from 'react';
import Layout from '@theme/Layout';
import Redirect from '@site/src/components/Redirect';

/**
 * The one Y.A.S.S. link (threetenlabs/yass#295): https://www.threetenlabs.com/yass
 *
 * iPhone/iPad → App Store, Android → Google Play (both tagged campaign
 * `yass-link`), anything else → this page with both store badges. The app's
 * "Tell Your Friends" share (#353) and anything posted publicly use this URL.
 */
export default function YassLink(): JSX.Element {
  return (
    <Layout
      title="Y.A.S.S. Spider Solitaire"
      description="Free Spider Solitaire with a new Deal of the Day every day. Get Y.A.S.S. on the App Store and Google Play.">
      <main style={{ padding: '2rem 0' }}>
        <Redirect campaign="yass-link" />
      </main>
    </Layout>
  );
}
