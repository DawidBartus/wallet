const dataObjects = [
  {
    date: "2023-07-18",
    type: true,
    category: "Category 1",
    comment: "Comment 1 for Category 1",
    sum: 100,
  },
  {
    date: "2023-07-19",
    type: false,
    category: "Category 2",
    comment: "Comment 2 for Category 2",
    sum: 200,
  },
  {
    date: "2023-07-20",
    type: true,
    category: "Category 1",
    comment: "Comment 3 for Category 1",
    sum: 150,
  },
  {
    date: "2023-07-21",
    type: false,
    category: "Category 3",
    comment: "Comment 4 for Category 3",
    sum: 50,
  },
  {
    date: "2023-07-22",
    type: true,
    category: "Category 2",
    comment: "Comment 5 for Category 2",
    sum: 300,
  },
  {
    date: "2023-07-23",
    type: true,
    category: "Category 1",
    comment: "Comment 6 for Category 1",
    sum: 120,
  },
  {
    date: "2023-07-24",
    type: false,
    category: "Category 3",
    comment: "Comment 7 for Category 3",
    sum: 75,
  },
  {
    date: "2023-07-25",
    type: true,
    category: "Category 2",
    comment: "Comment 8 for Category 2",
    sum: 250,
  },
  {
    date: "2023-07-26",
    type: true,
    category: "Category 1",
    comment: "Comment 9 for Category 1",
    sum: 180,
  },
  {
    date: "2023-07-27",
    type: false,
    category: "Category 3",
    comment: "Comment 10 for Category 3",
    sum: 90,
  },
  {
    date: "2023-07-18",
    type: true,
    category: "Category 1",
    comment: "Comment 1 for Category 1",
    sum: 100,
  },
  {
    date: "2023-07-19",
    type: false,
    category: "Category 2",
    comment: "Comment 2 for Category 2",
    sum: 200,
  },
  {
    date: "2023-07-20",
    type: true,
    category: "Category 1",
    comment: "Comment 3 for Category 1",
    sum: 150,
  },
  {
    date: "2023-07-21",
    type: false,
    category: "Category 3",
    comment: "Comment 4 for Category 3",
    sum: 50,
  },
  {
    date: "2023-07-22",
    type: true,
    category: "Category 2",
    comment: "Comment 5 for Category 2",
    sum: 300,
  },
  {
    date: "2023-07-23",
    type: true,
    category: "Category 1",
    comment: "Comment 6 for Category 1",
    sum: 120,
  },
  {
    date: "2023-07-24",
    type: false,
    category: "Category 3",
    comment: "Comment 7 for Category 3",
    sum: 75,
  },
  {
    date: "2023-07-25",
    type: true,
    category: "Category 2",
    comment: "Comment 8 for Category 2",
    sum: 250,
  },
  {
    date: "2023-07-26",
    type: true,
    category: "Category 1",
    comment: "Comment 9 for Category 1",
    sum: 180,
  },
  {
    date: "2023-07-27",
    type: false,
    category: "Category 3",
    comment: "Comment 10 for Category 3",
    sum: 90,
  },
  {
    date: "2023-07-18",
    type: true,
    category: "Category 1",
    comment: "Comment 1 for Category 1",
    sum: 100,
  },
  {
    date: "2023-07-19",
    type: false,
    category: "Category 2",
    comment: "Comment 2 for Category 2",
    sum: 200,
  },
  {
    date: "2023-07-20",
    type: true,
    category: "Category 1",
    comment: "Comment 3 for Category 1",
    sum: 150,
  },
  {
    date: "2023-07-21",
    type: false,
    category: "Category 3",
    comment: "Comment 4 for Category 3",
    sum: 50,
  },
  {
    date: "2023-07-22",
    type: true,
    category: "Category 2",
    comment: "Comment 5 for Category 2",
    sum: 300,
  },
  {
    date: "2023-07-23",
    type: true,
    category: "Category 1",
    comment: "Comment 6 for Category 1",
    sum: 120,
  },
  {
    date: "2023-07-24",
    type: false,
    category: "Category 3",
    comment: "Comment 7 for Category 3",
    sum: 75,
  },
  {
    date: "2023-07-25",
    type: true,
    category: "Category 2",
    comment: "Comment 8 for Category 2",
    sum: 250,
  },
  {
    date: "2023-07-26",
    type: true,
    category: "Category 1",
    comment: "Comment 9 for Category 1",
    sum: 180,
  },
  {
    date: "2023-07-27",
    type: false,
    category: "Category 3",
    comment: "Comment 10 for Category 3",
    sum: 90,
  },
  {
    date: "2023-07-18",
    type: true,
    category: "Category 1",
    comment: "Comment 1 for Category 1",
    sum: 100,
  },
  {
    date: "2023-07-19",
    type: false,
    category: "Category 2",
    comment: "Comment 2 for Category 2",
    sum: 200,
  },
  {
    date: "2023-07-20",
    type: true,
    category: "Category 1",
    comment: "Comment 3 for Category 1",
    sum: 150,
  },
  {
    date: "2023-07-21",
    type: false,
    category: "Category 3",
    comment: "Comment 4 for Category 3",
    sum: 50,
  },
  {
    date: "2023-07-22",
    type: true,
    category: "Category 2",
    comment: "Comment 5 for Category 2",
    sum: 300,
  },
  {
    date: "2023-07-23",
    type: true,
    category: "Category 1",
    comment: "Comment 6 for Category 1",
    sum: 120,
  },
  {
    date: "2023-07-24",
    type: false,
    category: "Category 3",
    comment: "Comment 7 for Category 3",
    sum: 75,
  },
  {
    date: "2023-07-25",
    type: true,
    category: "Category 2",
    comment: "Comment 8 for Category 2",
    sum: 250,
  },
  {
    date: "2023-07-26",
    type: true,
    category: "Category 1",
    comment: "Comment 9 for Category 1",
    sum: 180,
  },
  {
    date: "2023-07-27",
    type: false,
    category: "Category 3",
    comment: "Comment 10 for Category 3",
    sum: 90,
  },
];

export default dataObjects;
