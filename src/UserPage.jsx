import React from 'react';

function UserPage({ user, onLogout }) {
  const handleLogout = () => {
    onLogout();
  };

  return (
    <>
      <h2>Hey there, {user.firstName} {user.lastName}!</h2>
      {'Happy Shopping!'}
      <button onClick={handleLogout}><br />Logout</button>
    </>
  );
}

export default UserPage;
