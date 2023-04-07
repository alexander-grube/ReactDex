import { Button } from "@mui/material";
import "./App.css";

import MUIDataTable, { MUIDataTableColumnDef, MUIDataTableOptions } from "mui-datatables";

const columns: MUIDataTableColumnDef[] = [
  {
    name: "Name",
    options: {
      filter: true,
    },
  },
  {
    name: "Company",
    options: {
      filter: false,
    },
  },
  {
    name: "City",
    options: {
      filter: true,
    },
  },
  {
    name: "State",
    options: {
      filter: true,
    },
  },
];

const data = [
  ["Joe James", "Test Corp", "Yonkers", "NY"],
  ["John Walsh", "Test Corp", "Hartford", "CT"],
  ["Bob Herm", "Test Corp", "Tampa", "FL"],
  ["James Houston", "Test Corp", "Dallas", "TX"],
];

const options: MUIDataTableOptions = {
  filterType: "checkbox",
};

function App() {
  return (
    <div className="App">
      <Button variant="contained" color="primary">
        BRUHHH
      </Button>
      <MUIDataTable
        title={"Employee List"}
        data={data}
        columns={columns}
        options={options}
      />
    </div>
  );
}

export default App;
