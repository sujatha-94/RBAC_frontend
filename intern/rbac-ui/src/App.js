import React from 'react';
import './App.css';
import UserManagement from './components/UserManagement/UserManagement';
import RoleManagement from './components/RoleManagement/RoleManagement';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Role-Based Access Control (RBAC) Dashboard</h1>
      </header>
      <main>
        <div className="container">
          <section>
            <h2>User Management</h2>
            <UserManagement />
          </section>
          <section>
            <h2>Role Management</h2>
            <RoleManagement />
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
