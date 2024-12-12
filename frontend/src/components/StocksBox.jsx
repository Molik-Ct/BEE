import { useState, useEffect } from "react";
import logo from '../assets/FINVUE.png'

const StocksContainer = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <div class="mt-6 h-[12rem] w-108 mx-4 px-8 py-4 opacity-65 bg-white rounded-lg">
      <div class="flex justify-between items-center">
        <h2 class="text-black font-extrabold text-3xl">Profile</h2>
      </div>

      <div className="mx-8 flex justify-between">
        <div className="my-2 flex flex-col text-lg font-bold">
          <h1>First Name: <span className="font-normal">{user ? user.FirstName : 'Guest'}</span></h1>
          <h1>Last Name: <span className="font-normal">{user ? user.LastName : 'Guest'}</span></h1>
          <h1>Email: <span className="font-normal">{user ? user.email : 'email'}</span></h1>
        </div>

        <img className="h-24 w-32" src={logo} alt="" />
      </div>

        <span className="relative top-2 left-48 text-sm">© FinVue 2024</span>
    </div>
  );
};

export default StocksContainer;
