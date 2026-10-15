import * as React from "react";
import Footer from "../component/Footer";
import ProjectHeader from "../component/ProjectHeader";
import TextBlock from "../component/TextBlock";
import ProjectLinks from "../component/ProjectLink";
import CiteUs from "../component/Cite/Cite";

const authors = [
  {
    name: "Adonay Demewez Gebremedhin",
    href: "https://openreview.net/profile?id=~Adonay_Demewez_Gebremedhin1",
    institutions: "1",
  },
  {
    name: "Mohamad Alansari",
    href: "https://openreview.net/profile?id=~Mohamad_Alansari1",
    institutions: "2",
  },
  {
    name: "Wessam Shehieb",
    href: "https://openreview.net/profile?id=~Wessam_Shehieb2",
    institutions: "1",
  },
  {
    name: "Muzammal Naseer",
    href: "https://openreview.net/profile?id=~Muzammal_Naseer1",
    institutions: "2,3",
  },
];

function paperAsset(path) {
  const basePath =
    process.env.NODE_ENV === "production"
      ? process.env.NEXT_PUBLIC_BASE_PATH || ""
      : "";

  return `${basePath}/paper-assets/${path}`;
}

function publicAsset(path) {
  const basePath =
    process.env.NODE_ENV === "production"
      ? process.env.NEXT_PUBLIC_BASE_PATH || ""
      : "";

  return `${basePath}/${path}`;
}

function PaperFigure({ src, alt }) {
  const asset = paperAsset(src);

  return (
    <figure className="paper-figure">
      <a aria-label={`Open full-resolution ${alt}`} href={asset}>
        <img alt={alt} className="paper-screenshot" loading="lazy" src={asset} />
      </a>
    </figure>
  );
}

export default function Home() {
  return (
    <>
      <main className="page-shell">
        <ProjectHeader
          title="Distractors are the Real Enemy: Visual Distraction Adversarial Perturbations on SAM2-Based Video Tracking and Segmentation"
          authors={authors.map((author) => (
            <a href={author.href} key={author.name}>
              {author.name}<sup>{author.institutions}</sup>
            </a>
          ))}
          institutions={
            <>
              <span><sup>1</sup> Ajman University, UAE</span>
              <span><sup>2</sup> Khalifa University, UAE</span>
              <span><sup>3</sup> University of Western Australia, Australia</span>
            </>
          }
          publishedAt="✨ We just got accepted to WACV 2027, paper coming soon ✨"
        />
        <ProjectLinks
          links={[
            { iconId: "archive", label: "Paper", disabled: true },
            { iconId: "github", label: "Code", disabled: true },
            { iconId: "huggingface", label: "Model", disabled: true },
          ]}
        />
        <section aria-label="Supplementary qualitative comparison" className="project-video">
          <video
            autoPlay
            className="project-video-player"
            controls
            loop
            muted
            playsInline
            poster={paperAsset("supplementary-video-poster.png")}
            preload="metadata"
          >
            <source src={publicAsset("video.mp4")} type="video/mp4" />
            Your browser does not support the video element.
          </video>
        </section>
        <TextBlock title="Summary">
          Promptable video trackers such as SAM2 achieve accurate and robust performance
          through strong temporal consistency, making them important foundations for
          downstream video understanding and tracking. Existing attacks largely focus on
          local mask degradation and short-term feature disruption, leaving longer-term
          dynamics and competing-object interference from distractors insufficiently
          explored. We introduce DistractAttack, a white-box attack that uses background
          distractors to disrupt target tracking persistently. Its Counterfactual
          Distractor Search propagates clean and attacked trajectories in parallel to find
          plausible competing regions that become increasingly effective under
          perturbation.
        </TextBlock>
        <section aria-label="DistractAttack method" className="figure-gallery method-gallery">
          <PaperFigure
            alt="DistractAttack method overview"
            src="distractattack-method.png"
          />
        </section>
        <CiteUs
          heading="Reference"
          entryType="inproceedings"
          citationKey="gebremedhin2027distractors"
          title="Distractors are the Real Enemy: Visual Distraction Adversarial Perturbations on SAM2-Based Video Tracking and Segmentation"
          authors={authors.map((author) => author.name)}
          booktitle="Proceedings of the IEEE/CVF Winter Conference on Applications of Computer Vision (WACV)"
          year="2027"
        />
      </main>
      <Footer />
    </>
  );
}
