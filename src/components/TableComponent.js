import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { Container, Button } from "reactstrap";
import { faInfo } from "@fortawesome/free-solid-svg-icons";

const columns = [
  {
    dataField: "title",
    text: "Title",
    align: 'center',
    headerAlign: 'center',
    headerStyle: () => {
        return { width:"20%" }
    }
  },
  {
    dataField: "showTime",
    text: "Show Time",
    align: 'center',
    headerAlign: 'center',
    headerStyle: () => {
        return { width:"15%" }
    }
  },
  {
    dataField: "link",
    text: "Action",
    align: 'center',
    headerAlign: 'center',
    formatter: (rowContent, row) => {
        return (
            <div>
                <Button color="dark">
                    <FontAwesomeIcon icon={faInfo} /> Detail
                </Button>
            </div>
        )
    },
    headerStyle: () => {
        return { width:"10%" }
    }
  }
];

const TableComponent = (props) => {
  return (
    <Container>
        <div className="table">
            <BootstrapTable keyField="id" data={props.movies} columns={columns} bordered={ false }/>
        </div>
    </Container>
  );
};

export default TableComponent;
