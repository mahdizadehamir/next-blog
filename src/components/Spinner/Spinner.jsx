'use client';
import { ClipLoader } from 'react-spinners';
const overRide = {
  display: 'block',
  margin: '0 auto',
};
function Spinner() {
  return (
    <ClipLoader
      size={50}
      aria-label="Loading Spinner"
      data-testid="loader"
      color="#ddd"
      cssOverride={overRide}
    />
  );
}

export default Spinner;
