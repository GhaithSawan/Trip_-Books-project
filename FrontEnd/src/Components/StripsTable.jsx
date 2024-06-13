import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';

function StripsTable({ Strips, Check_In, Check_Out }) {
  let checkInDate = new Date(Check_In).toISOString().split("T")[0];
  let checkOutDate = new Date(Check_Out).toISOString().split("T")[0];
  function handelReservation() {
    alert("Reservation completed")
  }
  return (
    <Table responsive style={{ textAlign: "center" }}>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Available to</th>
          <th>Rate</th>
          <th>Reservation</th>
        </tr>
      </thead>
      <tbody>
        {
          Strips?.map((e, index) => {
            const createdAt = new Date(e?.createdAt).toISOString().split("T")[0]
            const expiresAt = new Date(e?.expiresAt).toISOString().split("T")[0]
            if (createdAt == checkInDate && expiresAt == checkOutDate ) {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{e?.name}</td>
                  <td>{e?.expiresAt.split("T")[0]}</td>
                  <td>{e?.Rate}</td>
                  <td>
                    <Button variant="primary" onClick={handelReservation}>Reservation</Button>{' '}
                  </td>
                </tr>
              )
            }else{
              console.log("1234");
            }
          })
        }
      </tbody>
    </Table>
  );
}

export default StripsTable;