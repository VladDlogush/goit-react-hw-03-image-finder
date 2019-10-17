import axios from 'axios';

const getImages = (currentPage, query) => {
  return axios
    .get(
      `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${query}&page=${currentPage}&per_page=12&key=13633512-2e4920fb59ca05e5eb038b80e`,
    )
    .then(response => response.data.hits)
    .catch(err => console.log(err));
};

export default getImages;
