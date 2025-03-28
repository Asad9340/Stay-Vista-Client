import { useState } from 'react';
import AddRoomForm from '../../../components/Dashboard/AddRoomForm/AddRoomForm';
import { imgbbImageUpload } from '../../../api/utils/imageUpload';
import useAuth from '../../../hooks/useAuth';
import toast from 'react-hot-toast';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';

function AddRoom() {
  const { user, setLoading } = useAuth();
  const [loading, setIsLoading] = useState(false);
  const [files, setFiles] = useState([]);
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const handleChange = e => {
    setFiles(e.target.files);
  };
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);

  const { mutateAsync } = useMutation({
    mutationFn: async roomData => {
      const { data } = await axiosSecure.post(`/add-room`, roomData);
      return data;
    },
    onSuccess: () => {
      console.log('Data Saved Successfully');
      toast.success('Room Added Successfully!');
      navigate('/dashboard/my-listings');
      setLoading(false);
    },
  });

  const handleAddRoom = async e => {
    setIsLoading(true);
    e.preventDefault();
    const form = e.target;
    const location = form.location.value;
    const category = form.category.value;
    const title = form.title.value;
    const price = form.price.value;
    const guests = form.total_guest.value;
    const bedrooms = form.bedrooms.value;
    const bathrooms = form.bathrooms.value;
    const description = form.description.value;

    // Image upload handling
    let imgCollection = [];
    for (let i = 0; i < files.length; i++) {
      const imageUrl = await imgbbImageUpload(files[i]);
      imgCollection.push(imageUrl);
    }

    try {
      const roomData = {
        location,
        category,
        title,
        from: state[0].startDate,
        to: state[0].endDate,
        image: imgCollection, // now handling multiple images
        price,
        guests,
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
      await mutateAsync(roomData);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  return (
    <div>
      <AddRoomForm
        state={state}
        setState={setState}
        handleAddRoom={handleAddRoom}
        handleChange={handleChange}
        files={files} 
        loading={loading}
      />
    </div>
  );
}

export default AddRoom;
