import React, { Component } from "react";
import axios from "axios";
import "./AddApartmentForm.css";
// import Swal from "sweetalert";
import Select from "react-select";

const options = [
  { value: "a", label: "Phòng ngắn hạn" },
  { value: "b", label: "Phòng dài hạn" },
];

class AddApartmentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: "",
      description: "",
      price: "",
      number_room: "",
      area: "",
      address_id: "",
      type_room: "",
      error: "",
      addressList: [], // Initialize addressList in the state
    };
  }

  componentDidMount() {
    this.fetchAddressList();
  }

  fetchAddressList = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/get-apartment"
      );
      const addressList = response.data.map((apartment) => ({
        id: apartment.address_id,
        label: apartment.address_id,
      }));
      this.setState({ addressList });
    } catch (error) {
      console.error("Error fetching address list:", error);
      // Xử lý lỗi
    }
  };

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const {
      user_id,
      description,
      price,
      number_room,
      area,
      address_id,
      type_room,
    } = this.state;

    // Kiểm tra nếu giá trị type_room là chuỗi rỗng hoặc null
    if (type_room === "" || type_room === null) {
      alert("Vui lòng nhập giá trị cho Type of Room");
      return;
    }

    try {
      // Gửi request để thêm mới căn hộ
      const response = await axios.post(
        "http://localhost:8000/api/add-apartment",
        {
          user_id,
          description,
          price,
          number_room,
          area,
          address_id,
          type_room,
        }
      );

      // Gọi hàm callback để thông báo thành công cho component cha
      if (this.props.onAddSuccess) {
        this.props.onAddSuccess();
      }

      // Reset form
      this.setState({
        user_id: "",
        description: "",
        price: "",
        number_room: "",
        area: "",
        address_id: "",
        type_room: "",
        error: "",
      });
    } catch (error) {
      console.error("Error adding apartment:", error);
      // Xử lý lỗi
      this.setState({
        error: "Đã xảy ra lỗi khi thêm mới căn hộ",
      });
    }
  };

  render() {
    const {
      user_id,
      description,
      price,
      number_room,
      area,
      address_id,
      type_room,
      error,
      addressList,
    } = this.state;

    return (
      <div className="form-container">
        <h2>Thêm mới căn hộ</h2>
        {error && <div className="error">{error}</div>}
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>User ID:</label>
            <input
              type="text"
              name="user_id"
              value={user_id}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label>Description:</label>
            <input
              type="text"
              name="description"
              value={description}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label>Price:</label>
            <input
              type="number"
              name="price"
              value={price}
              onChange={this.handleInputChange}
            />
          </div>

          <div>
            <label>Number of Rooms:</label>
            <input
              type="number"
              name="number"
              value={number_room}
              onChange={this.handleInputChange}
            />
          </div>

          <div>
            <label>Area:</label>
            <input
              type="text"
              name="area"
              value={area}
              onChange={this.handleInputChange}
            />
          </div>

          <div>
            <label>Address ID:</label>
            <select
              type="number"
              name="address_id"
              value={address_id}
              onChange={this.handleInputChange}
            >
              <option value="">Select an address</option>
              {addressList.map((address) => (
                <option key={address.id} value={address.id}>
                  {address.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label>Type of Room:</label>
            <Select
              options={options}
              name="type_room" // Change the name prop to "type_room"
              id="type_room"
              placeholder="Choose an option"
              required
              value={options.find((option) => option.value === type_room)} // Set the initial value based on state
              onChange={(selectedOption) =>
                this.setState({ type_room: selectedOption.value })
              } // Update the state with the selected option value
            />
          </div>

          <div>
            <button
              className="btn btn-success"
              type="submit"
              onClick={() => successAlert(user_id)}
            >
              Thêm mới
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddApartmentForm;
