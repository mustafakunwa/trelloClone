import React, { useEffect, useState } from "react";
import {
  Drawer,
  Typography,
  Divider,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Clear from "@material-ui/icons/Clear";

const useStyle = makeStyles((theme) => ({
  drawerPaper: {
    width: "400px",
  },
  title: {
    fontSize: "1.2rem",
    fontWeight: "bold",
  },
  titleContainer: {
    marginTop: theme.spacing(2),
    display: "flex",
    justifyContent: "space-around",
    marginBottom: theme.spacing(2),
  },
  menuContainer: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    margin: theme.spacing(2),
  },
}));
export default function Filter({
  setOpen,
  open,
  data,
  filterUpdated,
  filters,
  setFilter,
}) {
  const classes = useStyle();
  const [statuses, setStatus] = useState([]);

  useEffect(() => {
    const listStatus = Object.keys(data.lists).map((key) => data.lists[key]);
    setStatus(listStatus);
  }, [data]);

  const filterChange = (value, key) => {
    setFilter({
      ...filters,
      [key]: value,
    });
    filterUpdated({
      ...filters,
      [key]: value,
    });
  };
  return (
    <Drawer
      open={open}
      onClose={() => setOpen(!open)}
      anchor="right"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.titleContainer}>
        <Typography className={classes.title}> Filters</Typography>
        <Clear onClick={() => setOpen(!open)} />
      </div>
      <Divider />

      <div className={classes.menuContainer}>
        <TextField
          style={{ width: "100%" }}
          value={filters.name}
          onChange={(e) => filterChange(e.target.value, "name")}
          placeholder="Name"
          label="Name"
        />

        <FormControl fullWidth>
          <InputLabel>Status</InputLabel>
          <Select
            value={filters.status}
            label="Status"
            onChange={(e) => filterChange(e.target.value, "status")}
          >
            <MenuItem value="">None</MenuItem>
            {statuses.map((status) => (
              <MenuItem key={status.id} value={status.id}>
                {status.title}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </Drawer>
  );
}
