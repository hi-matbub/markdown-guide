import React, {useEffect} from 'react'
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
/* bootstrap */
import Container from 'react-bootstrap/Container'
/* AOS */
import AOS from 'aos';
import 'aos/dist/aos.css';

const colors = {
  facebook : {background: '#1877F2', color: '#EEE'},
  spotify : {background: '#36baa2'},
  freecodecamp: {background: '#f1be32'},
  docusaurus: {background: '#3ecc5f'},
  u2: {background: '#30e4f7'},
  bloc: {background: '#3e29ef', color: '#EEE'},
  shipmonk: {background: '#46a147'},
  freelance: {background: '#FFC72C'}
}

const projectData = [
  {
    title: 'Docusaurs',
    desc: 'Modifed plugins examples in documentation using MDX, ESLint, Github Actions and Git.',
    dataAOS: "fade-left",
    color: colors.docusaurus,
    company: 'Facebook',
    dates: '2020',
    link: '',
    linkTitle: '',
    projOrg: styles.right
  },
  {
    title: 'Jest',
    desc: 'Version control using Node, ESLint, GitHub Actions and Git.',
    dataAOS: "fade-right",
    color: colors.facebook,
    company: 'Facebook',
    dates: 'Present',
    link: '',
    linkTitle: '',
    projOrg: styles.left
  },

  {
    title: 'Backstage.io',
    desc: 'Modified Social Sharing Images and SEO data while complying with Docusaurus\' migration docs. ',
    dataAOS: "fade-left",
    color: colors.spotify,
    company: 'Spotify',
    dates: '2020',
    link: '',
    linkTitle: '',
    projOrg: styles.right
  },
  {
    title: 'FreeCodeCamp.org',
    desc: 'Modified User Profile page and tests suites using React, Jest, ESLint, GitHub Actions and Git.',
    dataAOS: "fade-right",
    color: colors.freecodecamp,
    company: 'FreeCodeCamp',
    dates: '2020',
    link: '',
    linkTitle: '',
    projOrg: styles.left
  },
  {
    title: 'Web Development Mentor at UCLA',
    desc: 'Displays mastery of knowledge and presents advanced concepts to Students. Works with Firebase, REST APIs, Node, Express, MongoDB, React, HTML, CSS, JavaScript and jQuery.',
    dataAOS: "fade-left",
    color: colors.u2,
    company: 'U2',
    dates: 'Present',
    link: '',
    linkTitle: '',
    projOrg: styles.right
  },
  {
    title: 'Web Development Bootcamp',
    desc: 'Commited 1200+ hours to learning modern industry standards and tech such as React, Node, Jest, Mocha and Chai.',
    dataAOS: "fade-right",
    color: colors.bloc,
    company: 'Bloc',
    dates: '2019 - 2020',
    link: '',
    linkTitle: '',
    projOrg: styles.left
  },
  {
    title: 'Tech Support Manager',
    desc: 'Assists clients and trains staff in proprietary CMS. Displays mastery of knowledge and makes judgement calls with the companys best intrests in mind. ',
    dataAOS: "fade-left",
    company: 'Shipmonk',
    color: colors.shipmonk,
    dates: '2017 - 2019',
    link: '',
    linkTitle: '',
    projOrg: styles.right
  },
  {
    title: 'Full Stack Developer',
    desc: 'Developed funnels designed for client acquisition. Intergrates and automates databases, email and notification services using APIs.',
    dataAOS: "fade-right",
    dates: '2012 - 2019',
    color: colors.freelance,
    link: '',
    linkTitle: '',
    projOrg: styles.left
  },
  {
    title: 'Data Migrations',
    desc: 'Migrates databases into various CMS.',
    dataAOS: "fade-left",
    dates: '2007 - 2013',
    color: colors.freelance,
    link: '',
    linkTitle: '',
    projOrg: styles.right
  },
  {
    title: 'Data Management',
    desc: 'Wrote my first line of code, implemented JavaScript to assist with repitious tasks associated with Micrsoft Excel.',
    dataAOS: "fade-right",
    dates: '2007 - 2012',
    color: colors.freelance,
    link: '',
    linkTitle: '',
    projOrg: styles.left
  },
]


const Project = (props) => {
  return (
    <div className={clsx( styles.full, props.projOrg)} data-aos={props.dataAOS}>
      <div className={styles.project}>

        <div className={styles.projLogo_cont}>
          <div style={props.color} className={styles.projLogo}>
            <span className={styles.bigL}>{props.title.charAt(0)}</span>
            <span className={styles.littleL}>{props.company ? props.company.charAt(0) : null}</span>
          </div>
        </div>

        <div className={styles.projectContent}>
          <h2>{props.title}</h2>
          {props.company ? <span className={styles.row}>
                            <h3>{props.company}</h3>
                            <h4>{props.dates}</h4>
                          </span> :
                          <span className={styles.row}>
                            <h4>{props.dates}</h4>
                          </span>}
          <div className={styles.projectDesc}>
            <p>{props.desc}</p>
            <a href={props.link}>{props.linkTitle}</a>
          </div>
        </div>
      </div>
    </div>
  )
}

const Works = () => {

  useEffect(() => {
    AOS.init();
  })

  return(
    <Layout title='Works'>
      <Container>
        {projectData.map((props, idx) => (
          <Project key={idx} {...props} />
        ))}
        <p className={styles.marginTop}>2020 | Mat Bub</p>
      </Container>
    </Layout>
  )
}

export default Works
