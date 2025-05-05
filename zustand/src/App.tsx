import { useEffect, useRef } from 'react';
import { UserList } from '@components/UserList';
import { UserForm } from '@components/UserForm';
import { UserModal } from '@components/UserModal';
import { useUserStore } from './store/userStore';

const App = () => {
  const addUser = useUserStore(state => state.addUser);
  const loaded = useRef<boolean>(false);

  useEffect(() => {
    if (loaded.current) return;
    loaded.current = true;
    fetch('/mock-users.json')
      .then((res) => res.json())
      .then((data) => {
        data.forEach((user: any) => addUser(user));
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 px-[5vw] py-[3vh]">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow p-6">
        <h1 className="text-3xl font-semibold mb-6 text-gray-800 text-center">User Management</h1>
        <UserForm />
        <UserList />
        <UserModal />
      </div>
    </div>
  );
};

export default App;
