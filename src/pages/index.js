import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';


function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Matthew Bub's Web Developer Showcase`}
      description="Professional Software Engineering specializing in JavaScript, AWS and GraphQL">
      <main className={clsx('hero', styles.heroBanner)}>
        <div className="container">
          <div>

            <div className={styles.buttons}>
              <p>Well versed in Full Stack Development. I am passionate about modern tech and making a positive impact within the community.
              <br/><br/> A Minimalist by nature, I spent my childhood riding bike's in the local fields and fishing with my dad.
              <br/><br/> I spent my early working career freelanceing in Web Development. I am thankful that I have been able to do what I love for "work" these past 13 years. I look forward to many, many more.
              <br/><br/> - Mat</p>
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
    </Layout>
  );
}

export default Home;
