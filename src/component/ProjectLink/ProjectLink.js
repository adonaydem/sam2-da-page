import React from "react";
import Icon from "../Icon/Icon";

function ProjectLinks({ links }) {
  return (
    <nav aria-label="Project links" className="project-links">
      {links.map((link) => {
        const contents = (
          <>
            <Icon size="20" id={link.iconId} />
            {link.label}
          </>
        );

        return link.disabled ? (
          <span
            aria-disabled="true"
            className="project-link project-link--disabled"
            key={link.label}
            title="Coming soon"
          >
            {contents}
          </span>
        ) : (
          <a className="project-link" href={link.href} key={link.label}>
            {contents}
          </a>
        );
      })}
    </nav>
  );
}
export default ProjectLinks;
