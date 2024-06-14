import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ShopDetail = () => {
  const { id } = useParams();
  const [shop, setShop] = useState(null);

  useEffect(() => {
    const fetchShop = async () => {
      try {
        const response = await axios.get(`/api/shops/${id}`); // Assuming endpoint '/api/shops/:id' to get shop details
        setShop(response.data);
      } catch (error) {
        console.error("There was an error fetching the shop details!", error);
      }
    };

    fetchShop();
  }, [id]);

  if (!shop) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Shop Details</h2>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p>
          <strong>Name:</strong> {shop.name}
        </p>
        <p>
          <strong>Email:</strong> {shop.email}
        </p>
        <p>
          <strong>Phone:</strong> {shop.phone}
        </p>
        <p>
          <strong>Address:</strong> {shop.address}
        </p>
        <p>
          <strong>Town:</strong> {shop.town}
        </p>
        <p>
          <strong>Business Type:</strong> {shop.business}
        </p>
        <p>
          <strong>Business Status:</strong> {shop.business_status}
        </p>
      </div>
    </div>
  );
};

export default ShopDetail;
