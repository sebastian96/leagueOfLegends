const reducer = (state, action) => {
    switch(action.type) {
        case 'SEARCH_CHAMPION':
            const findChamp = () => {
                let find = [];
                state.champs.forEach(e => {
                    const name = e.name.toLowerCase();
                    if(name.search(action.payload.toLowerCase()) !== -1) {
                        find.push(e);
                    }
                });
                if(action.payload === '') {
                    return find = undefined;
                }
                return find;
            }
            return {
                ...state,
                find: findChamp()
            }
        case 'GET_CHAMPION':
            return {
                ... state,
                champ: state.champs.find(champ => champ.id === action.payload)
            }
        default:
            return state;
    };
}

export default reducer;