export const createLoadingReducers = (builder, thunk) => {
    builder
        .addCase(thunk.pending, (state) => {
            state.loading = true;
        })
        .addCase(thunk.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
};