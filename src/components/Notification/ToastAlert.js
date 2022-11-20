import { toast } from 'react-toastify';

const toastAlert = error => {
  toast.error(`Try again, ${error}`, {
    position: 'top-center',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'colored',
  });
};

export default toastAlert;
