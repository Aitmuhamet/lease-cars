export default {
  namespaced: true,
  state: () => ({
    carSelection: {
      title: 'Choose your car',
      categories: [
        { name: 'Car and Minivan', id: 1, content:['1']},
        { name: 'Trucks', id: 2, content: ['2']},
        { name: 'Crossovers & SUVs', id: 3, content: ['3']},
        { name: 'Electrified', id: 4, content: ['4']},
      ],
      activeCategoryId: 1,
      activeCategory: null
    }
  }),
  
  getters: {
    getCarsSelection: (state) => state.carSelection,
  },
  mutations: {
    setActiveCategory(state, id) {
      
      state.activeCategoryId = id;
      state.activeCategory = state.categories.find(category => category.id === id)
    }
  }
}