import React, { Component } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";

import Swal from "sweetalert";
import Select from "react-select";
import $ from "jquery";

// import PropTypes from 'prop-types';

const options = [
  { value: "a", label: "Phòng ngắn hạn" },
  { value: "b", label: "Phòng dài hạn" },
];

class Apartment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apartments: [],
    };

    this.onSubmitHandle = this.onSubmitHandle.bind(this);
    this.deleteApartments = this.deleteApartments.bind(this);
    this.editApartments = this.editApartments.bind(this)
    this.submitEditApartments = this.submitEditApartments.bind(this);
  }

  async componentDidMount() {
    await axios.get("http://127.0.0.1:8000/api/get-apartment").then((res) => {
      this.setState(() => ({ apartments: res.data }));
    });
  }


  async onSubmitHandle(e) {
    e.preventDefault();
    await axios
      .post("http://localhost:8000/api/add-apartment", {
        user_id: $("#inputUser_ID").val(),
        type_room: $("#inputType_room").val(),
        area: $("#inputArea").val(),
        price: $("#inputPrice").val(),
        number_room: $("#inputNumber_room").val(),
        description: $("#inputDescription").val(),
        address_id: $("#inputAddress_id").val(),
      })


      .then((res) => {
        Swal({
          text: "Thêm thành công",
          icon: "success",
          button: "OK",
        });
        $("#closeModalAddBtn").click();
        this.componentDidMount();
      })
      Swal({
        text: "Thêm không thành công",
        icon: "success",
        button: "OK",
      });
  }


  async submitEditApartments(e) {
    e.preventDefault();

    await axios
      .put(`http://localhost:8000/api/edit-apartment/${id}`, {
        user_id: $("#editUser_ID").val(),
        type_room: $("#editType_room").val(),
        area: $("#editArea").val(),
        price: $("#editPrice").val(),
        number_room: $("#editNumber_room").val(),
        description: $("#editDescription").val(),
        address_id: $("#editAddress_id").val(),
      })
      .then(() => {
        Swal({
          text: "Chỉnh sửa thành công",
          icon: "success",
          button: "OK",
        });
        $("#closeModalEditBtn").click();
        this.componentDidMount();
      });
  }

  async editApartments(id) {  // gọi khi người dùng muốn chỉnh sửa một sản phẩm cụ thể
    let apartment = this.state.apartments.find((apartment) => id === apartment_id.id); // lấy thông tin về sản phẩm từ một mảng products trong trạng thái (state) 
    $("#editID").val(apartment.id);
    $("#editUser_ID").val(apartment.user_id);
    $("#editType_room").val(apartment.type_room);
    $("#editPrice").val(apartment.price);
    $("#editArea").val(apartment.area);
    $("#editNumber_room").val(apartment.number_room);
    $("#editDescription").val(apartment.description);
    $("#editAddress_id").val(apartment.address_id);
  }



  async deleteApartments(apartment_id) {
    if (window.confirm(`Bạn muốn xóa sản phẩm có id là ${apartment_id}`)) {
      try {
        await axios.delete(
          `http://localhost:8000/api/delete-apartment/${apartment_id}`,
          {}
        );
        Swal({
          text: "Xóa thành công",
          icon: "success",
          button: "OK",
        });
        this.componentDidMount();
      } catch (error) {
        console.log(error.response.data)
        console.error("Error deleting apartment:", error);
        Swal({
          text: "Xóa không thành công",
          icon: "error",
          button: "OK",
        });
      }
    } else {
      Swal({
        text: "Xóa không thành công",
        icon: "success",
        button: "OK",
      });
    }
  }

  render() {
    const columns = [
      {
        name: "Apartment ID",
        selector: "apartment_id",
        sortable: true,
      },
      {
        name: "User ID",
        selector: "user_id",
        sortable: true,
      },
      {
        name: "Description",
        selector: "description",
        sortable: true,
        wrap: true,
      },
      {
        name: "Price",
        selector: "price",
        sortable: true,
      },
      {
        name: "Number of Rooms",
        selector: "number_room",
        sortable: true,
      },
      {
        name: "Area",
        selector: "area",
        sortable: true,
      },
      {
        name: "Address ID",
        selector: "address_id",
        sortable: true,
      },
      {
        name: "Type of Room",
        selector: "type_room",
        sortable: true,
      },
      {
        name: "Action",
        selector: "apartment_id",
        cell: (row) => (
          <div>
            <button
            data-tag="allowRowEvents"
            className="btn btn-sm btn-warning"
            style={{ width: "60px" }}
            onClick={() => {
              this.editProduct(row.apartment_id);
            }}
            type="button"
            data-toggle="modal"
            data-target="#modelEditProduct"
          >
            Edit
          </button>
            <button
              data-tag="allowRowEvents"
              className="btn btn-sm btn-danger"
              style={{ width: "60px" }}
              onClick={() => this.deleteApartments(row.apartment_id)}
              type="button"
            >
              Delete
            </button>
          </div>
        ),
        compact: true,
      },
    ];

    return (
      <div>
        {/* add product */}
        <div>
          <div
            className="modal fade"
            id="modelAddApartment"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="modelTitleId"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Modal Add Product</h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                    id="closeModalAddBtn"
                  >
                    <span aria-hidden="true">x</span>
                  </button>
                </div>
                <div className="modal-body">
                  <form
                    onSubmit={this.onSubmitHandle}
                    encType="multipart/form-data"
                  >

                    <div className="form-group">
                      <label htmlFor="inputUser_ID">User_ID</label>
                      <input
                        type="number"
                        min={1}
                        className="form-control"
                        name="inputUser_ID"
                        id="inputUser_ID"
                        placeholder="Enter User_ID"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="inputAddress_id">Address_id</label>
                      <input
                        type="number"
                        min={1}
                        className="form-control"
                        name="inputAddress_id"
                        id="inputAddress_id"
                        placeholder="Enter Address_id"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="inputAddress_id">Type_room</label>
                      <Select
                        options={options}
                        name="inputType_room"
                        id="inputType_room"
                        placeholder="Choose an option"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="inputArea">Area</label>
                      <input
                        type="number"
                        min={1}
                        className="form-control"
                        name="inputArea"
                        id="inputArea"
                        placeholder="Enter DArea"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="inputPrice">Price</label>
                      <input
                        type="number"
                        min={1}
                        className="form-control"
                        name="inputPrice"
                        id="inputPrice"
                        placeholder="Enter Price"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="inputNumber_room">Number_room</label>
                      <input
                        type="number"
                        min={1}
                        className="form-control-file"
                        name="inputNumber_room"
                        id="inputNumber_room"
                        onChange={(e) => this.handleChange(e.target.files)}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="inputDescription">Description</label>
                      <input
                        type="text"
                        name="inputDescription"
                        className="form-control"
                        defaultValue={""}
                      />
                    </div>

                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* edit product */}
        <div>
          <div
            className="modal fade"
            id="modelEditProduct"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="modelTitleId"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Modal Edit Product</h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                    id="closeModalEditBtn"
                  >
                    <span aria-hidden="true">x</span>
                  </button>
                </div>
                <div className="modal-body">
                  <form
                    onSubmit={this.submitEditApartments}
                    encType="multipart/form-data"
                  >

                  <div className="form-group">
                      <label htmlFor="editID">ID</label>
                      <input
                        type="number"
                        className="form-control"
                        name="editID"
                        id="editID"
                        readOnly
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="editUser_ID">User_ID</label>
                      <input
                        type="number"
                        min={1}
                        className="form-control"
                        name="editUser_ID"
                        id="editUser_ID"
                        placeholder="Enter User_ID"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="editAddress_id">Address_id</label>
                      <input
                        type="number"
                        min={1}
                        className="form-control"
                        name="editAddress_id"
                        id="editAddress_id"
                        placeholder="Enter Address_id"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="editAddress_id">Type_room</label>
                      <Select
                        options={options}
                        name="editType_room"
                        id="editType_room"
                        placeholder="Choose an option"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="editArea">Area</label>
                      <input
                        type="number"
                        min={1}
                        className="form-control"
                        name="editArea"
                        id="editArea"
                        placeholder="Enter DArea"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="editPrice">Price</label>
                      <input
                        type="number"
                        min={1}
                        className="form-control"
                        name="editPrice"
                        id="editPrice"
                        placeholder="Enter Price"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="editNumber_room">Number_room</label>
                      <input
                        type="number"
                        min={1}
                        className="form-control-file"
                        name="editNumber_room"
                        id="editNumber_room"
                        onChange={(e) => this.handleChange(e.target.files)}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="editDescription">Description</label>
                      <input
                        type="text"
                        name="editDescription"
                        className="form-control"
                        defaultValue={""}
                      />
                    </div>
                    
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* show Apartment */}
        <div className="container">
          <button
            type="button"
            data-toggle="modal"
            data-target="#modelAddApartment"
            className="btn btn-primary"
            style={{ width: 150 }}
          >
            Add Apartment
          </button>

          <DataTable
            title=" My Apartment"
            columns={columns}
            data={this.state.apartments}
            paginationPerPage={5}
            defaultSortField="apartment_id"
            pagination
          />
        </div>
      </div>
    );
  }
}

// Apartment.propTypes = {
//   user_id: PropTypes.string.isRequired, // Xác định kiểu và yêu cầu prop user_id
// };

export default Apartment;
