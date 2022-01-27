import React from "react";
import Card from "../UI/Card/Card";

const DataList = (props) => {
  return (
    <React.Fragment>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {props.list.map((data) => (
          <Card key={data.id} title={data.title} body={data.body} />
        ))}
      </div>
    </React.Fragment>
  );
};

export default DataList;
