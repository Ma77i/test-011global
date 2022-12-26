
const Stocks = ({item}) => {

  return (
    <tr>
      <td className='border'>{item.Tikcer}</td>
      <td className='border'>{item.Price}</td>
    </tr>
  )
}

export default Stocks