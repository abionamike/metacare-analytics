import { Calendar } from "../assets"
import LineChart from "./LineChart"

const AnalyticsBox = ({ mainTitle, timeTitle, lineColor }) => {
  return (
    <div className='chart-container'>
      <div className="chart">
        <div className='chart-top'>
          <div className='chart-top-left'>
            <h2>{mainTitle}</h2>
            <div className='rate'>
              <p>+4.14%</p>
            </div>
          </div>
          <div className='chart-top-right'>
            <div style={{ backgroundColor: lineColor }} className='dot' />
            <p>High Priority</p>
            <div className='chart-top-divider' />
            <div className='calendar'>
              <span>This Month</span>
              <Calendar />
            </div>
          </div>
        </div>
        <div className="chart-bottom">
          <LineChart lineColor={lineColor} />
        </div>
      </div>
      <div className="time-container">
        <div className="time">
          <p>{timeTitle}</p>
          <h3>30 Mins</h3>
        </div>
        <div className="time">
          <p>Response Time</p>
          <h3>1 Hour 30 Mins</h3>
        </div>
      </div>
    </div>
  )
}

export default AnalyticsBox