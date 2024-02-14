import React from 'react';

function UserPage({ user, onLogout }) {
  const handleLogout = () => {
    onLogout();
  };

  return (
    <>
      <h2>Welcome, {user.firstName} {user.lastName}!</h2>
      <h5>(This is your page)</h5>
      {/* Add user-specific content here */}
      <button onClick={handleLogout}>Logout</button>
    </>
  );
}

export default UserPage;
