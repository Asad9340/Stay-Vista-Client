import { useState } from 'react';
import AddRoomForm from '../../../components/Dashboard/AddRoomForm/AddRoomForm';
import { imgbbImageUpload } from '../../../api/utils/imageUpload';
import useAuth from '../../../hooks/useAuth';

function AddRoom() {
  const { user } = useAuth();
  const [file, setFile] = useState('');

  const handleChange = e => {
    setFile(URL.createObjectURL(e.target.files[0]));
  };
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
    const imageUrl = await imgbbImageUpload(image);

    const roomData = {
      location,
      category,
      title,
      image: imageUrl,
      price,
      total_guest,
      bedrooms,
      bathrooms,
      description,
      host: {
        name: user.displayName,
        email: user.email,
        image: user.photoURL,
      },
    };
    console.log(roomData);
  };
  return (
    <div>
      <AddRoomForm
        state={state}
        setState={setState}
        handleAddRoom={handleAddRoom}
        handleChange={handleChange}
        file={file}
      />
    </div>
  );
}

export default AddRoom;
