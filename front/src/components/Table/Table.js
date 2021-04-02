import React from 'react';

function Table(props) {
  return (
    <table className="table table-secondary">
      <tbody>
        <tr className="table-secondary">
          <td onMouseOver={() => console.log('mouse')} onClick={() => console.log('work')} className="table-secondary">200</td>
          <td className="table-secondary">400</td>
          <td className="table-secondary">600</td>
          <td className="table-secondary">800</td>
          <td className="table-secondary">1000</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Table;
