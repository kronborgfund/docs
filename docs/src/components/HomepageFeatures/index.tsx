import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
// import img1 =from "@site/static/Step1.png"
// import img2 from "@site/static/img/Step2.png"
// import img3 from "@site/static/img/Step3.png"
const img1 = require('@site/static/img/Step1.png').default;
const img2 = require('@site/static/img/Step2.png').default;
const img3 = require('@site/static/img/Step3.png').default;

type FeatureItem = {
  title: string;
  img: string
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Killer Apps that can be maintained',
    img: img1,
    description: (
      <>
      Microsoft 365 automation using whatever admin interfaces Microsofts provides, including unattende PowerShell execution. 
      Also covers full DevOps pipeline utilizing Azure DevOps, GitHub, and Azure.
            </>
    ),
  },
  {
    title: 'Using your Microsoft 365',
    img: img2,
    description: (
      <>
        The more complicated you make it, the harder it will be to control. We have a deep insight in to which tools will work for a given task.
      </>
    ),
  },
  {
    title: 'Hosted on your Kubernetes cluster ',
    img: img3,
    description: (
      <>
     You get everything running in your very own Azure Kubernetes Service (AKS) cluster. Come with GitOps repository 
     containing all bootstrap code and automatic deployment pipelines.
      </>
    ),
  },
];

function Feature({title, img, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureSvg} src={img}></img>
        {/* <Svg className={styles.featureSvg} role="img" /> */}
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
