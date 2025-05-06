import { useState } from 'react';
import { useUserStore } from '../store/userStore';

export const UserModal = () => {
  const selectedUser = useUserStore(state => state.selectedUser);
  const updateAddress = useUserStore(state => state.updateAddress);
  const clearSelectedUser = useUserStore(state => state.clearSelectedUser);
  const [address, setAddress] = useState(selectedUser?.address || '');

  const handleSave = () => {
    updateAddress(selectedUser!.id, address);
    clearSelectedUser();
  };

  return (
    <>
    {selectedUser &&
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-4 rounded shadow w-96">
          <h2 className="text-lg font-bold mb-2">User Info</h2>
          <p><b>Username:</b> {selectedUser.username}</p>
          <p><b>Name:</b> {selectedUser.name || '-'}</p>
          <p><b>Email:</b> {selectedUser.email}</p>
          <p><b>Sex:</b> {selectedUser.sex || '-'}</p>
          <p><b>Birthday:</b> {selectedUser.birthday || '-'}</p>
          <div className="mt-2">
            <label>Address</label>
            <input
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full border px-2 py-1"
            />
          </div>
          <div className="flex justify-end mt-4 gap-2">
            <button onClick={clearSelectedUser}>Cancel</button>
            <button onClick={handleSave} className="bg-blue-500 text-white px-3 py-1 rounded">
              Save
            </button>
          </div>
        </div>
      </div>
    }
    </>
  );
};
