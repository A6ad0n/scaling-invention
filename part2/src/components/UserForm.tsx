import { useState } from 'react';
import { useUserStore } from '../store/userStore';

export const UserForm = () => {
  const addUser = useUserStore(state => state.addUser);
  const setAddingUserId = useUserStore(state => state.setAddingUserId);
  const [username, setUsername] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');

  const handleAdd = () => {
    const newUser = {
      id: Date.now().toString(),
      username,
      address,
      email,
      name: '',
      sex: '',
      birthday: '',
    };
    setAddingUserId(newUser.id);
    addUser(newUser);
    setUsername('');
    setAddress('');
    setEmail('');
    setTimeout(() => {
      setAddingUserId(null);
    }, 500);
  };

  return (
     <div className="flex gap-4 mb-6">
      <input
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="flex-1 border border-gray-300 px-3 py-2 rounded"
      />
      <input
        placeholder="Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        className="flex-1 border border-gray-300 px-3 py-2 rounded"
      />
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1 border border-gray-300 px-3 py-2 rounded"
      />
      <button
        onClick={handleAdd}
        className="bg-green-600 hover:bg-green-700 transition transform hover:scale-105 text-white px-4 py-2 rounded"
      >
        Add
      </button>
    </div>
  );
};
