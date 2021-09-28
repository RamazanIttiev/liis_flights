import City from '../../../assets/City.jpg';
import City2 from '../../../assets/City2.jpg';
import City3 from '../../../assets/City3.jpg';

const initialState = {
  photos: [
    { id: 1, img: City },
    { id: 2, img: City2 },
    { id: 3, img: City3 },
    { id: 4, img: City },
    { id: 5, img: City2 },
    { id: 6, img: City3 },
  ],
};

const photos = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default photos;
