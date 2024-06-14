import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ListShops = () => {
  const [shops, setShops] = useState([]);

  useEffect(() => {
    const fetchShops = async () => {
      try {
        const response = await axios.get("/api/shops"); // Assuming endpoint '/api/shops' to get all shops
        setShops(response.data);
      } catch (error) {
        console.error("There was an error fetching the shops!", error);
      }
    };

    fetchShops();
  }, []);

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Shops List</h2>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Shop Name</th>
            <th className="py-2 px-4 border-b">Shop ID</th>
            <th className="py-2 px-4 border-b">Town</th>
          </tr>
        </thead>
        <tbody>
          {shops.map((shop) => (
            <tr key={shop.id}>
              <td className="py-2 px-4 border-b">{shop.name}</td>
              <td className="py-2 px-4 border-b">
                <Link
                  to={`/shop/${shop.id}`}
                  className="text-blue-500 hover:underline"
                >
                  {shop.id}
                </Link>
              </td>
              <td className="py-2 px-4 border-b">{shop.town}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListShops;
