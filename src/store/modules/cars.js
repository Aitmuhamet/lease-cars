import trucksData from '@/data/trucks.json'
import carsAndMinivans from '@/data/cars_and_minivans.json'
import suvs from '@/data/suvs.json'
import electricVehicles from '@/data/electric_vehicles.json'

export default {
  namespaced: true,
  state: () => ({
    carsSelection: {
      title: "Choose your car",
      categories: {
        1: { name: "Car and Minivan", id: 1, content: carsAndMinivans.cars_and_minivans },
        2: { name: "Trucks", id: 2, content: trucksData.trucks },
        3: { name: "Crossovers & SUVs", id: 3, content: suvs.suvs },
        4: { name: "Electrified", id: 4, content: electricVehicles.electric_vehicles },
      },
      activeCategoryId: 1,
    },
    posts: {
      1: {title: 'An easier way to buy your next Toyota', imgSrc: 'posts-1.jpg'},
      2: {title: 'A Guide to Road-Tripping With Pets', imgSrc: 'posts-2.jpg'},
    }
  }),

  getters: {
    carsSelectionData: (state) => state.carsSelection,
    currentCategory: (state) => {
      return state.carsSelection.categories[state.carsSelection.activeCategoryId];
    },
    postsData: (state) => state.posts
  },
  mutations: {
    setActiveCategory(state, id) {
      state.carsSelection.activeCategoryId = id;
    },
  },
};
