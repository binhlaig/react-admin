import React from 'react'
import "./single.scss"
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Chart from '../../components/chart/Chart';
import List from '../../components/table/Table';

const Single = () => {
  return (
    <div className='single'>
      <Sidebar/>
      <div className="singleContainer">
        <Navbar/>
          <div className="top">
            <div className="left">
              <div className="editButton">Edit</div>
              <h1 className="title">Information</h1>
              <div className="item">
               <img className='itemImg'
               src='https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
               alt='' 
               />
               <div className="details">
                     <h1 className="itemTitle">Sai</h1>
                 <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">sai@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+95 90 7718 7892</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">4-15-30 higashi-nakano,nakano ward, tokyo</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">Japan</span>
                </div>
               </div>
              </div>
            </div>
            <div className="right">
               <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
            </div>

          </div>
          <div className="bottom">
              <h1 className="title">Last Transactions</h1>
                 <List/>
          </div>
      </div>

    </div>
  )
}

export default Single
