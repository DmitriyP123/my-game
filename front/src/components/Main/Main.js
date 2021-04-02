import React from 'react';
import { useSelector } from 'react-redux'
function Main(props) {
  const store = window.localStorage.getItem('currentState')
  const Authorized = useSelector((state) => state)

  return (
    <div>
    <div>3125456543213456432345</div>
    </div>
  );
}

export default Main;
