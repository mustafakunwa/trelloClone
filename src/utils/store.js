const cards = [
  {
    id: 'card-1',
    title: 'Create a Kanban board',
  },
  {
    id: 'card-2',
    title: 'Add a card',
  },
  {
    id: 'card-3',
    title: 'Add Drag and Drop',
  },
  {
    id: 'card-4',
    title: 'Add a list',
  },
  {
    id: 'card-5',
    title: 'Add a Filters',
  }
];

const data = {
  lists: {
    'list-1': {
      id: 'list-1',
      title: 'Todo',
      cards,
    },
    'list-2': {
      id: 'list-2',
      title: 'In Progress',
      cards: [],
    },
    'list-3': {
      id: 'list-3',
      title: 'Done',
      cards: [],
    },
  },
  listIds: ['list-1', 'list-2','list-3'],
};

export default data;
