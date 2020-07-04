import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import details from './details.mdx'
import Works from './works'

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Home`}
      description="Full Stack Cloud Engineer">
        <Works/>

        {/* {details } */}
      {/* <main className={clsx('hero', styles.heroBanner)}> 
        <div className="container">
          <div>

            <div className={styles.buttons}>
              <p>{'Well versed in Full Stack Development. I am passionate about modern tech and making a positive impact within the community.'}        
              <br/><br/>{' - Mat'}</p>
            </div>
            <div className={styles.rows}>
              <Link
                className={clsx(
                  'button button--outline button--primary button--md',
                  styles.getStarted,
                  styles.marg
                )}
                to={useBaseUrl('works/')}>
                Works
              </Link>
            </div>
          </div>
        </div>
      </main>
      */}
    </Layout>
  );
}

export default Home;
