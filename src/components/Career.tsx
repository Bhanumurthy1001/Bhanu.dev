import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My work <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior Data / Performance Engineer</h4>
                <h5>KUBE IT</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Built high-throughput data platforms using Python, SQL, Azure
              Data Factory, Databricks, Docker, Kubernetes, and observability
              tooling with focus on latency, throughput, and reliability.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior Data Engineer</h4>
                <h5>Oportun</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Developed AWS-based data pipelines, streaming workflows, Redshift
              and Snowflake models, validation frameworks, and production
              monitoring for high-volume financial data systems.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Engineer</h4>
                <h5>TruWeather Solutions</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Delivered GCP data workflows with Dataflow, BigQuery, GCS,
              Pub/Sub, Cloud Composer, and Vertex AI for aviation and weather
              datasets with cost and performance optimization.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
