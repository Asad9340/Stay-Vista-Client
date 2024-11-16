
import Container from '../Shared/Container';
import Heading from '../Shared/Heading';
import LoadingSpinner from '../Shared/LoadingSpinner';
import useAxiosCommon from '../../hooks/useAxiosCommon';
import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';
import Room from './Room';

const Rooms = () => {
  const axiosCommon = useAxiosCommon();
  // eslint-disable-next-line no-unused-vars
  let [params, setParams] = useSearchParams();
  let searchParams = params.get('category');
  const { data: rooms = [], isLoading } = useQuery({
    queryKey: ['rooms', searchParams],
    queryFn: async () => {
      const { data } = await axiosCommon.get(`/rooms?category=${searchParams}`);
      return data;
    },
  });

  if (isLoading) return <LoadingSpinner />;

  return (
    <Container>
      {rooms && rooms.length > 0 ? (
        <div className="pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {rooms.map(room => (
            <Room key={room._id} room={room} />
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center min-h-[calc(100vh-300px)]">
          <Heading
            center={true}
            title="No Rooms Available In This Category!"
            subtitle="Please Select Other Categories."
          />
        </div>
      )}
    </Container>
  );
};

export default Rooms;
