import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">To see of not to see</h1>
        <p className="hero__subtitle mb-10   ">{siteConfig.tagline}</p>
         <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/koksmat/ui/">
              <div className="">
           Support us</div>
          </Link>
        </div> 
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`To see of not to see... `}
      description="Supporting people with hidden disabilities">
      <HomepageHeader />
      <main>
        {/* <HomepageFeatures /> */}
        <section>
          <div className="container">
            
            </div>
        </section>
      </main>
    </Layout>
  );
}
