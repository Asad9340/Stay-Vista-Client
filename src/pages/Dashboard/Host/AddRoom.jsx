import { useState } from 'react';
import AddRoomForm from '../../../components/Dashboard/AddRoomForm/AddRoomForm';
import axios from 'axios';

function AddRoom() {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: 'selection',
    },
  ]);
  const handleAddRoom = async e => {
    e.preventDefault();
    const form = e.target;
    const location = form.location.value;
    const category = form.category.value;
    const title = form.title.value;
    const image = form.image.files[0];
    const price = form.price.value;
    const total_guest = form.total_guest.value;
    const bedrooms = form.bedrooms.value;
    const bathrooms = form.bathrooms.value;
    const description = form.description.value;
    // Upload image to your server using FormData
    const formData = new FormData();
    formData.append('image', image);
    const { data } = await axios.post(
      `https://api.imgbb.com/1/upload?key=${
        import.meta.env.VITE_IMGBB_API_KEY
      }`,
      formData
    );
    const imageUrl = data.data.display_url;
  };
  return (
    <div>
      <AddRoomForm
        state={state}
        setState={setState}
        handleAddRoom={handleAddRoom}
      />
    </div>
  );
}

export default AddRoom;
