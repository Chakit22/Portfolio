import { config } from "../config";
import "./styles/CurrentlyBuilding.css";

const CurrentlyBuilding = () => {
  const project = config.currentlyBuilding;

  return (
    <section className="building-section section-container">
      <div className="building-inner">
        <p className="building-eyebrow">{project.eyebrow}</p>
        <div className="building-content">
          <h2>{project.title}</h2>
          <p>{project.description}</p>
        </div>
        <div className="building-tags">
          {project.technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurrentlyBuilding;
