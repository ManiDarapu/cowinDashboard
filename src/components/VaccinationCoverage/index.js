/* eslint-disable no-unused-vars */
// Write your code here
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import './index.css'

const VaccinationCoverage = props => {
  const {last7Days} = props
  const {vaccineData, dose1, dose2} = last7Days
  const DataFormatter = number => {
    if (number > 1000) {
      return `${(number / 1000).toString()}k`
    }
    return number.toString()
  }
  return (
    <div className="vaccination">
      <h1>Vaccination Coverage</h1>
      <BarChart
        width={1000}
        height={300}
        data={last7Days}
        margin={{
          top: 5,
        }}
      >
        <XAxis
          dataKey="vaccineData"
          tick={{
            stroke: 'gray',
            strokeWidth: 1,
          }}
          tickFormatter={vaccineData}
        />
        <YAxis
          tickFormatter={DataFormatter}
          tick={{
            stroke: 'gray',
            strokeWidth: 0,
          }}
        />
        <Legend
          wrapperStyle={{
            padding: 30,
          }}
        />
        <Bar dataKey="dose1" name="Dose1" fill="#5a8dee" barSize="20%" />
        <Bar dataKey="dose2" name="Dose2" fill="#f54394" barSize="20%" />
      </BarChart>
      )
    </div>
  )
}

export default VaccinationCoverage
