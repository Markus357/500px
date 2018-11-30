import images from './images-processed';

module.exports = {
  current_page: 1,
  feature: "popular",
  filters: {
    category: false,
    exclude: [ 4, 31 ],
  },
  photos: images,
  setImagePage: () => null,
  total_items: 46091,
  total_pages: 1000,
};