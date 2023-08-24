// Write your code here
import './index.css'
import {PieChart, Pie, Legend, Cell} from 'recharts'

const VaccinationByGender = props => {
  const {vaccinationByGender} = props
  return (
    <div>
      <h1>Vaccination By Gender</h1>
      <PieChart width={1000} height={300}>
        <Pie
          cx="70%"
          cy="40%"
          data={vaccinationByGender}
          startAngle={0}
          endAngle={180}
          innerRadius="40%"
          outerRadius="70%"
          dataKey="count"
        >
          <Cell name="Male" fill="#5a8dee" />
          <Cell name="Female" fill="#f54394" />
          <Cell name="Others" fill="#2cc6c6" />
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

export default VaccinationByGender
