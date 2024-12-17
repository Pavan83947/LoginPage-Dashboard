import 'react'
import '../App.css'
import Card from './Card'
import Header from './Header'
import Bargraph from './Bargraph'
import Linegraph from './Linegraph'
import RadialBar from './RadialBar'
import SalesTrendChart from './SalesTrend'
import PieChart from './Piechart1'
function Dashboard() {
  const data = [
    { month: '1', value: 1259 },
    { month: '2', value: 2000 },
    { month: '3', value: 800 },
    { month: '4', value: 2525 },
    { month: '5', value: 3000 },
    { month: '6', value: 4500 },
  ];
  return (
    <>
      <Header/>
      <div className='flex'>
      <div className='main'>
        <div className='cards-div'>
          <span className='text-2xl font-bold ml-6 '>Dashboard</span>
          <div className='flex'>
            <Card heading={"Target"} percentage={"+55%"} values={"189"} />
            <Card heading={"Achieved"} percentage={"+25%"} values={"2,983,79"} />
            <Card heading={"Order Executed"} percentage={"-5%"} values={"449"} />
            <Card heading={"Pending Orders"} percentage={"+11%"} values={"576"} />
            <Card heading={"Outstanding"} percentage={"-15%"} values={"45,557"} />
          </div>
          <div className='flex datas-div mr-10'>
            <Bargraph data={data}/>
          <div className=''>
            <Linegraph/>
          <div className='flex '>
            <RadialBar/>
            <SalesTrendChart/>
            <PieChart/>
            <PieChart/>
          </div>
          </div>
          </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default Dashboard;
