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
        case 'SEARCH_CHAMPION_TAG':
            const findChamps = () => {
                let find = [];
                state.champs.forEach(e => {
                    if(e.tags.includes(action.payload)) {
                        find.push(e)
                    }
                });
                if(action.payload === 'All') {
                    return find = undefined;
                }
                return find;
            }
            return {
                ...state, 
                find: findChamps()
            }
        default:
            return state;
    };
}

export default reducer;