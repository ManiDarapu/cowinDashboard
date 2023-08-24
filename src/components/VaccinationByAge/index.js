// Write your code here
import './index.css'
import {PieChart, Pie, Legend, Cell} from 'recharts'

const VaccinationByAge = props => {
  const {vaccinationByAge} = props
  return (
    <div>
      <h1>Vaccination By Age</h1>
      <PieChart width={1000} height={300}>
        <Pie
          cx="70%"
          cy="40%"
          data={vaccinationByAge}
          startAngle={0}
          endAngle={360}
          innerRadius="40%"
          outerRadius="70%"
          dataKey="count"
        >
          <Cell name="18-44" fill="#64c2a6" />
          <Cell name="45-60" fill="#2cc6c6" />
          <Cell name="Above 60" fill="#5a8dee" />
        </Pie>
        <Legend
          iconType="circle"
          layout="vertical"
          verticalAlign="middle"
          align="right"
        />
      </PieChart>
    </div>
  )
}

export default VaccinationByAge
