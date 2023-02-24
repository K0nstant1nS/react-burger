const initialState = {
  orders: [
    {
      ingredients: [
        "60d3b41abdacab0026a733c6",
        "60d3b41abdacab0026a733c8",
        "60d3b41abdacab0026a733c9",
        "60d3b41abdacab0026a733ce",
        "60d3b41abdacab0026a733d1",
        "60d3b41abdacab0026a733d1",
      ],
      _id: "",
      status: "done",
      number: 0,
      createdAt: "2021-06-23T14:43:22.587Z",
      updatedAt: "2021-06-23T14:43:22.603Z",
    },
    {
      ingredients: [
        "60d3b41abdacab0026a733c6",
        "60d3b41abdacab0026a733c8",
        "60d3b41abdacab0026a733c9",
        "60d3b41abdacab0026a733ce",
        "60d3b41abdacab0026a733d1",
        "60d3b41abdacab0026a733d1",
        "60d3b41abdacab0026a733d1",
        "60d3b41abdacab0026a733d3",
      ],
      _id: "",
      status: "done",
      number: 0,
      createdAt: "2021-06-23T14:43:22.587Z",
      updatedAt: "2021-06-23T14:43:22.603Z",
    },
    {
      ingredients: [
        "60d3b41abdacab0026a733c6",
        "60d3b41abdacab0026a733c8",
        "60d3b41abdacab0026a733c9",
        "60d3b41abdacab0026a733ce",
        "60d3b41abdacab0026a733d1",
        "60d3b41abdacab0026a733d1",
        "60d3b41abdacab0026a733d1",
        "60d3b41abdacab0026a733d3",
      ],
      _id: "",
      status: "done",
      number: 0,
      createdAt: "2021-06-23T14:43:22.587Z",
      updatedAt: "2021-06-23T14:43:22.603Z",
    },
    {
      ingredients: [
        "60d3b41abdacab0026a733c6",
        "60d3b41abdacab0026a733c8",
        "60d3b41abdacab0026a733c9",
        "60d3b41abdacab0026a733ce",
        "60d3b41abdacab0026a733d1",
        "60d3b41abdacab0026a733d1",
        "60d3b41abdacab0026a733d1",
        "60d3b41abdacab0026a733d3",
      ],
      _id: "",
      status: "done",
      number: 0,
      createdAt: "2021-06-23T14:43:22.587Z",
      updatedAt: "2021-06-23T14:43:22.603Z",
    },
    {
      ingredients: [
        "60d3b41abdacab0026a733c6",
        "60d3b41abdacab0026a733c8",
        "60d3b41abdacab0026a733c9",
        "60d3b41abdacab0026a733ce",
        "60d3b41abdacab0026a733d1",
        "60d3b41abdacab0026a733d1",
        "60d3b41abdacab0026a733d1",
        "60d3b41abdacab0026a733d3",
      ],
      _id: "",
      status: "done",
      number: 0,
      createdAt: "2021-06-23T14:43:22.587Z",
      updatedAt: "2021-06-23T14:43:22.603Z",
    },
    {
      ingredients: [
        "60d3b41abdacab0026a733c6",
        "60d3b41abdacab0026a733c8",
        "60d3b41abdacab0026a733c9",
        "60d3b41abdacab0026a733ce",
        "60d3b41abdacab0026a733d1",
        "60d3b41abdacab0026a733d1",
        "60d3b41abdacab0026a733d1",
        "60d3b41abdacab0026a733d3",
      ],
      _id: "",
      status: "inWork",
      number: 1234,
      createdAt: "2021-06-23T14:43:22.587Z",
      updatedAt: "2021-06-23T14:43:22.603Z",
    },
    {
      ingredients: [
        "60d3b41abdacab0026a733c6",
        "60d3b41abdacab0026a733c8",
        "60d3b41abdacab0026a733c9",
        "60d3b41abdacab0026a733ce",
        "60d3b41abdacab0026a733d1",
        "60d3b41abdacab0026a733d1",
        "60d3b41abdacab0026a733d1",
        "60d3b41abdacab0026a733d3",
      ],
      _id: "",
      status: "done",
      number: 12345,
      createdAt: "2021-06-23T14:43:22.587Z",
      updatedAt: "2021-06-23T14:43:22.603Z",
    },
    {
      ingredients: [
        "60d3b41abdacab0026a733c6",
        "60d3b41abdacab0026a733c8",
        "60d3b41abdacab0026a733c9",
        "60d3b41abdacab0026a733ce",
        "60d3b41abdacab0026a733d1",
        "60d3b41abdacab0026a733d1",
        "60d3b41abdacab0026a733d1",
        "60d3b41abdacab0026a733d3",
      ],
      _id: "",
      status: "done",
      number: 167,
      createdAt: "2021-06-23T14:43:22.587Z",
      updatedAt: "2021-06-23T14:43:22.603Z",
    },
    {
      ingredients: [
        "60d3b41abdacab0026a733c6",
        "60d3b41abdacab0026a733c8",
        "60d3b41abdacab0026a733c9",
        "60d3b41abdacab0026a733ce",
        "60d3b41abdacab0026a733d1",
        "60d3b41abdacab0026a733d1",
        "60d3b41abdacab0026a733d1",
        "60d3b41abdacab0026a733d3",
      ],
      _id: "",
      status: "done",
      number: 1365,
      createdAt: "2021-06-23T14:43:22.587Z",
      updatedAt: "2021-06-23T14:43:22.603Z",
    },
    {
      ingredients: [
        "60d3b41abdacab0026a733c6",
        "60d3b41abdacab0026a733c8",
        "60d3b41abdacab0026a733c9",
        "60d3b41abdacab0026a733ce",
        "60d3b41abdacab0026a733d1",
        "60d3b41abdacab0026a733d1",
        "60d3b41abdacab0026a733d1",
        "60d3b41abdacab0026a733d3",
      ],
      _id: "",
      status: "inWork",
      number: 1267,
      createdAt: "2021-06-23T14:43:22.587Z",
      updatedAt: "2021-06-23T14:43:22.603Z",
    },
    {
      ingredients: [
        "60d3b41abdacab0026a733c6",
        "60d3b41abdacab0026a733c8",
        "60d3b41abdacab0026a733c9",
        "60d3b41abdacab0026a733ce",
        "60d3b41abdacab0026a733d1",
        "60d3b41abdacab0026a733d1",
        "60d3b41abdacab0026a733d1",
        "60d3b41abdacab0026a733d3",
      ],
      _id: "",
      status: "inWork",
      number: 1908,
      createdAt: "2021-06-23T14:43:22.587Z",
      updatedAt: "2021-06-23T14:43:22.603Z",
    },
    {
      ingredients: [
        "60d3b41abdacab0026a733c6",
        "60d3b41abdacab0026a733c8",
        "60d3b41abdacab0026a733c9",
        "60d3b41abdacab0026a733ce",
        "60d3b41abdacab0026a733d1",
        "60d3b41abdacab0026a733d1",
        "60d3b41abdacab0026a733d1",
        "60d3b41abdacab0026a733d3",
      ],
      _id: "",
      status: "done",
      number: 1000,
      createdAt: "2021-06-23T14:43:22.587Z",
      updatedAt: "2021-06-23T14:43:22.603Z",
    },
  ],
};

export function ordersReducer(state = initialState, action) {
  switch (action.type) {
    default: {
      return state;
    }
  }
}
