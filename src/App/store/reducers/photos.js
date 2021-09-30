import Hotel from '../../../assets/Hotel.jpg';
import Hotel2 from '../../../assets/Hotel2.jpg';
import Hotel3 from '../../../assets/Hotel3.jpg';

const initialState = [
  { id: 1, img: Hotel },
  { id: 2, img: Hotel2 },
  { id: 3, img: Hotel3 },
  { id: 4, img: Hotel },
  { id: 5, img: Hotel2 },
  { id: 6, img: Hotel3 },
];

const photos = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default photos;
