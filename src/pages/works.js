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

const openSoure= {
  title: 'Open Source',
  controbutions: [
    {
      title: 'Docusaurs',
      desc: 'Modifed plugins examples in documentation using MDX, ESLint, Github Actions and Git.',
      company: 'Facebook'
    },
    {
      title: 'Jest',
      desc: 'Version control using Node, ESLint, GitHub Actions and Git.',
      company: 'Facebook'
    },
    {
      title: 'Backstage.io',
      desc: 'Modified Social Sharing Images and SEO data while complying with Docusaurus\' migration docs. ',
      company: 'Shopify'
    },
    {
      title: 'FreeCodeCamp',
      desc: 'Modified User Profile page and tests suites using React, Jest, ESLint, GitHub Actions and Git.',
      company: 'FreeCodeCamp'
    }

  ]
}

const freelance = {
    title: 'Full Stack Developer',
    dates: '2007 - 2019',
    works: [
      'SEO expert',
      'Developed funnels designed for client acquisition using HTML, CSS, JavaScript and PHP.',
      'Intergrates and automates databases, email and notification services using APIs.',
      'Migrates databases into various CMS.',
      'Implemented JavaScript to assist with repitious tasks associated with Micrsoft Excel.',
    ]
  }

const projectData = [
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
  }
]



const Freelance = (props) => {
  return(
    <div className={clsx( styles.full, props.projOrg)} data-aos={props.dataAOS}>
      <div className={styles.project}>

        <div className={styles.projLogo_cont}>
          <div style={props.color} className={styles.projLogo}>
            <span className={styles.bigL}>{freelance.title.charAt(0)}</span>
          </div>
        </div>

        <div className={styles.projectContent}>
          <h2>{freelance.title}</h2>
          <h3>{freelance.dates}</h3>
          <div className={styles.projectDesc}></div>
          <ul>
           <li>
             <p>{freelance.works[0]}</p>
           </li>
           <li>
             <p>{freelance.works[1]}</p>
           </li>
           <li>
             <p>{freelance.works[2]}</p>
           </li>
           <li>
             <p>{freelance.works[3]}</p>
           </li>
           <li>
             <p>{freelance.works[4]}</p>
           </li>
          </ul>

        </div>
      </div>
    </div>
  )
}

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
            <span className={styles.row}>
              {props.company ? <h3>{props.company}</h3> : null}
              <h4>{props.dates}</h4>
            </span>
          <div className={styles.projectDesc}>
            <p>{props.desc}</p>
            <a href={props.link}>{props.linkTitle}</a>
          </div>
        </div>
      </div>
    </div>
  )
}


const OpenSource = (props) => {
  return (
    <div className={clsx( styles.full, props.projOrg)} data-aos={props.dataAOS}>
      <div className={styles.project}>

        <div className={styles.projLogo_cont}>
          <div style={props.color} className={styles.projLogo}>
            <span className={styles.bigL}>{openSoure.title.charAt(0)}</span>
            <span className={styles.littleL}>{openSoure.title.charAt(5)}</span>
          </div>
        </div>

        <div className={styles.projectContent}>
          <h2>{openSoure.title}</h2>
          <div className={styles.projectDesc}></div>
          <ul>
           <li>
             <h3>{openSoure.controbutions[0].title}</h3>
             <h4>{openSoure.controbutions[0].company}</h4>
             <p>{openSoure.controbutions[0].desc}</p>
           </li>
           <li>
             <h3>{openSoure.controbutions[1].title}</h3>
             <h4>{openSoure.controbutions[1].company}</h4>
             <p>{openSoure.controbutions[1].desc}</p>
           </li>
           <li>
             <h3>{openSoure.controbutions[2].title}</h3>
             <h4>{openSoure.controbutions[2].company}</h4>
             <p>{openSoure.controbutions[2].desc}</p>
           </li>
           <li>
             <h3>{openSoure.controbutions[3].title}</h3>
             <h4>{openSoure.controbutions[3].company}</h4>
             <p>{openSoure.controbutions[3].desc}</p>
           </li>
          </ul>

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
        <OpenSource />
        {projectData.map((props, idx) => (
          <Project key={idx} {...props} />
        ))}
        <Freelance />
        <p className={styles.marginTop}>2020 | Mat Bub</p>
      </Container>
    </Layout>
  )
}

export default Works
