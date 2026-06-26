import "./ProgressBar.css";

function ProgressBar({ total, completed }) {

  const percentage =
    total === 0
      ? 0
      : Math.round((completed / total) * 100);

  return (

    <div className="progress-container">

      <div className="progress-header">

        <div>

          <h2>Today's Progress</h2>

          <p>Keep going! You're doing great.</p>

        </div>

        <div className="progress-percentage">

          {percentage}%

        </div>

      </div>

      <div className="progress-bar">

        <div
          className="progress-fill"
          style={{
            width: `${percentage}%`,
          }}
        ></div>

      </div>

      <div className="progress-info">

        <div className="info-card">

          <h3>{completed}</h3>

          <p>Completed</p>

        </div>

        <div className="info-card">

          <h3>{total - completed}</h3>

          <p>Pending</p>

        </div>

        <div className="info-card">

          <h3>{total}</h3>

          <p>Total Tasks</p>

        </div>

      </div>

    </div>

  );

}

export default ProgressBar;