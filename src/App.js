import React, { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import List from "./components/List/List";
import store from "./utils/store";
import StoreApi from "./utils/storeApi";
import InputContainer from "./components/Input/InputContainer";
import { makeStyles } from "@material-ui/core/styles";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import TopBar from "./components/TopBar";
import Filters from "./components/Filter";

const useStyle = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    background: "rgb(0, 121, 191)",
    width: "100%",
    overflowY: "auto",
  },
  listContainer: {
    display: "flex",
  },
}));

export default function App() {
  const [data, setData] = useState(store);
  const [filteredData, setFilteredData] = useState(store);
  const [open, setOpen] = useState(false);
  const [filters, setFilter] = useState({
    name: "",
    status: "",
  });

  const classes = useStyle();
  const addMoreCard = (title, listId) => {
    console.log(title, listId);

    const newCardId = uuid();
    const newCard = {
      id: newCardId,
      title,
    };

    const list = data.lists[listId];
    list.cards = [...list.cards, newCard];

    const newState = {
      ...data,
      lists: {
        ...data.lists,
        [listId]: list,
      },
    };
    setData(newState);
  };

  useEffect(() => {
    filterUpdated(filters);
  }, [data]);

  const addMoreList = (title) => {
    const newListId = uuid();
    const newList = {
      id: newListId,
      title,
      cards: [],
    };
    const newState = {
      listIds: [...data.listIds, newListId],
      lists: {
        ...data.lists,
        [newListId]: newList,
      },
    };
    setData(newState);
  };

  const updateListTitle = (title, listId) => {
    const list = data.lists[listId];
    list.title = title;

    const newState = {
      ...data,
      lists: {
        ...data.lists,
        [listId]: list,
      },
    };
    setData(newState);
  };

  const onDragEnd = (result) => {
    const { destination, source, draggableId, type } = result;
    if (!destination) {
      return;
    }
    if (type === "list") {
      const newListIds = data.listIds;
      newListIds.splice(source.index, 1);
      newListIds.splice(destination.index, 0, draggableId);
      return;
    }

    const sourceList = data.lists[source.droppableId];
    const destinationList = data.lists[destination.droppableId];
    const draggingCard = sourceList.cards.filter(
      (card) => card.id === draggableId
    )[0];

    if (source.droppableId === destination.droppableId) {
      sourceList.cards.splice(source.index, 1);
      destinationList.cards.splice(destination.index, 0, draggingCard);
      const newSate = {
        ...data,
        lists: {
          ...data.lists,
          [sourceList.id]: destinationList,
        },
      };
      setData(newSate);
    } else {
      sourceList.cards.splice(source.index, 1);
      destinationList.cards.splice(destination.index, 0, draggingCard);

      const newState = {
        ...data,
        lists: {
          ...data.lists,
          [sourceList.id]: sourceList,
          [destinationList.id]: destinationList,
        },
      };
      setData(newState);
    }
  };

  const filterUpdated = (filter) => {
    let items = Object.keys(data.lists).map((key) => data.lists[key]);
    let filterUpdated = items;
    if (filter.name)
      filterUpdated = items.map((item) => {
        const cards = item.cards.filter((card) => {
          return (
            card.title.toLowerCase().includes(filter.name.toLowerCase()) &&
            (filter.status ? filter.status === item.id : true)
          );
        });
        return { ...item, cards };
      });
    else if (!filter.name && filter.status)
      filterUpdated = items.map((item) => {
        if (item.id !== filter.status) {
          return { ...item, cards: [] };
        }
        return item;
      });


    const updatedData = {
      ...data,
      lists: filterUpdated.reduce((acc, item) => {
        return { ...acc, [item.id]: item };
      }, {}),
    };
    setFilteredData(updatedData);
  };

  return (
    <StoreApi.Provider value={{ addMoreCard, addMoreList, updateListTitle }}>
      <div className={classes.root}>
        <TopBar setOpen={setOpen} />

        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="app" type="list" direction="horizontal">
            {(provided) => (
              <div
                className={classes.listContainer}
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {filteredData.listIds.map((listId, index) => {
                  const list = filteredData.lists[listId];
                  return <List list={list} key={listId} index={index} />;
                })}
                <InputContainer type="list" />
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
        <Filters
          open={open}
          setOpen={setOpen}
          data={data}
          filterUpdated={filterUpdated}
          filters={filters}
          setFilter={setFilter}
        />
      </div>
    </StoreApi.Provider>
  );
}
