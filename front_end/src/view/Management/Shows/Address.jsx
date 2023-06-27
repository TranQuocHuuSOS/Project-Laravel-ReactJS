import React, { Component } from 'react';
import DataTable from "react-data-table-component";
import axios from "axios";

class Address extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: [],
    };
  }

  async componentDidMount() {
    await axios.get("http://localhost:8000/api/get-address").then((res) => {
      this.setState(() => ({ address: res.data }));
    });
  }

  render() {
    const columns = [
      {
        name: "Address ID",
        selector: "address_id",
        sortable: true,
      },
      {
        name: "Number",
        selector: "number",
        sortable: true,
      },
      {
        name: "Street",
        selector: "street",
        sortable: true,
      },
      {
        name: "Ward",
        selector: "ward",
        sortable: true,
        wrap: true,
      },
      {
        name: "District",
        selector: "district",
        sortable: true,
      },
    ];

    return (
      <div className="list_apartment">
        <DataTable
          title="Show Address"
          columns={columns}
          data={this.state.address}
          paginationPerPage={10}
          defaultSortField="id"
          pagination
        />
      </div>
    );
  }
}

export default Address;
