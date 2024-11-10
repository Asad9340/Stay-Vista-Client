import useRole from './../../../hooks/useRole';
import AdminStatistics from './AdminStatistics';
import GuestStatistics from './GuestStatistics';
import HostStatistics from './HostStatistics';
function Statistics() {
  const [role] = useRole();
  return (
    <div>
      {role === 'admin' && <AdminStatistics />}
      {role === 'host' && <HostStatistics />}
      {role === 'guest' && <GuestStatistics />}
    </div>
  );
}

export default Statistics;
