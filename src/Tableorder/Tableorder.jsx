import "./Tableorder.css"

function Tableorder(){
   const tabledata= [
        { "orderId": "1001", "customer": "John Doe", "amount": "$120" },
        { "orderId": "1002", "customer": "Jane Smith", "amount": "$250" },
        { "orderId": "1003", "customer": "Alice Johnson", "amount": "$75" }
        ]
    return(
        <div id="table">
            <h1>Table Orders</h1>
                <table border="2px">
                    <thead>
                 <tr>
                  <th>OrderId</th>
                  <th>Customer</th>
                  <th>Amount</th>
                </tr>
                </thead>
                <tbody>
                    {
    tabledata.map((element)=>(
        <tr>
        <td>{element.orderId}</td>
         <td>{element.customer}</td>
         <td>{element.amount}</td>
        </tr>
        ))}
     </tbody>
    </table>
    </div>
    )
}
export default Tableorder;