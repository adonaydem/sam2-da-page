import * as React from "react";
import Footer from "../component/Footer";
import ProjectHeader from "../component/ProjectHeader";
import ProjectLinks from "../component/ProjectLink";
import TextBlock from "../component/TextBlock";
import CiteUs from "../component/Cite/Cite";

const authors = [
  {
    name: "Adonay Demewez Gebremedhin",
    href: "https://adonaydem.github.io/",
    institutions: "1",
  },
  {
    name: "Mohamad Alansari",
    href: "https://scholar.google.com/citations?view_op=search_authors&mauthors=Mohamad+Alansari&hl=en&oi=ao",
    institutions: "2",
  },
  {
    name: "Wessam Shehieb",
    href: "https://scholar.google.com/citations?user=5oaOk_YAAAAJ&hl=en",
    institutions: "1",
  },
  {
    name: "Muzammal Naseer",
    href: "https://scholar.google.com/citations?user=tM9xKA8AAAAJ&hl=en",
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
          title={
            <>
              <span className="hero-title-line">
                Visual Distraction Adversarial Perturbations 
              </span>{" "}
              <span className="hero-title-line">
                on SAM2-Based Video Tracking and Segmentation
              </span>
            </>
          }
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
          publishedAt="✨ Just Accepted at WACV 2027, Code coming soon. ✨"
        />
        <ProjectLinks
          links={[
            { iconId: "archive", label: "Paper", href: paperAsset("paper.pdf") },
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
          making them important foundations for VOT/VOS tasks. We are interested in analysing the adversarial robustness of these trackers. Existing adversarial perturbations largely focus on
          local mask degradation and short-term feature disruption, leaving longer-term
          dynamics and competing-object interference, i.e. <b>distractors</b>, insufficiently
          explored. We introduce a white-box method that uses background
          distractors to disrupt target tracking persistently. Its Counterfactual
          Distractor Search propagates trajectories to find
          plausible competing regions that become increasingly effective under
          perturbation. We further analyze transferability and defence mechanisms that can be used to mitigate such impact.
        </TextBlock>
        <section className="figure-gallery method-gallery">
          <PaperFigure
            alt="Method overview"
            src="method.png"
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
