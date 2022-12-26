import React from 'react'
import Stocks from './Stocks'

const StocksList = ({items}) => {
  return items.map((item, key)=><Stocks key={key} item={item} />)
}

export default StocksList