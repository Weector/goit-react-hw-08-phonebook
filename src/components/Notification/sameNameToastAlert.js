import { toast } from 'react-toastify';

const toastAlert = item => {
  toast.error(`${item} Ooops`, {
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
