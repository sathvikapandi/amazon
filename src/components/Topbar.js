import React from 'react'
import { Link } from 'react-router-dom'

export default function Topbar() {
  return (
   <>
   <div className='col-12 topbar'>
    <ul>
        <li><Link to='Home'>Home</Link></li>
        <li><Link to='Groceries'>Groceries</Link></li>
        <li><Link to='Deals'>Deals</Link></li>
        <li><Link to='Mobiles'>Mobiles</Link></li>
        <li><Link to='Fashion'className='colo'>Fashion</Link></li>
        <li><Link to='Prime'>Prime</Link></li>
        <li><Link to='Electronics'>Electronics</Link></li>
        <li><Link to='Beauty'>Beauty</Link></li>
        <li><Link to='Travel'>Travel</Link></li>
        <li><Link to='Appliances'>Appliances</Link></li>
        <li><Link to='Furniture'>Furniture</Link></li>
        <li><Link to='More'>More</Link></li>
    </ul>
   </div>
   </>
  )
}
