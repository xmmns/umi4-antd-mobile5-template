export default {
  namespace: 'projectDetail',
  state: {
    detail: {},
  },

  effects: {
    // *queryUser({ payload }, { call, put }) {
    //   const { data } = yield call(queryUser, payload);
    //   yield put({ type: 'queryUserSuccess', payload: data });
    // },
  },

  reducers: {
    setProjectDetail(state, { payload }) {
      console.log('setProjectDetail setProjectDetail', payload);
      return {
        ...state,
        detail: payload,
      };
    },
  },

  test(state) {
    console.log('test');
    return state;
  },
};