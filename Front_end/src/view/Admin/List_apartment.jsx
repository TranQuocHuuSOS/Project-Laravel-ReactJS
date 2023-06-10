// import React, { Component } from "react";
// import './List_apartment.css';
// import axios from "axios";
// import $ from "jquery";
// import DataTable from "react-data-table-component";
// import "bootstrap/dist/css/bootstrap.css";
// class List_apartment extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       apartments: [],
//     };
//     this.onSubmitHandle = this.onSubmitHandle.bind(this);
//     this.deleteApartment = this.deleteApartment.bind(this);
//     this.editApartment = this.editApartment.bind(this);
//     this.submitEditApartment = this.submitEditApartment.bind(this);
//     this.handleChange = this.handleChange.bind(this);
//   }
//   async componentDidMount() {
//     await axios.get("http://127.0.0.1:8000/api/get-apartment").then((res) => {
//       this.setState(() => ({ apartments: res.data }));
//     });
//   }
//   previewImage() {
//     $(document).ready(function (e) {
//       $("#inputImage").change(function () {
//         let reader = new FileReader();
//         reader.onload = (e) => {
//           $("#preview-image-before-upload").attr("src", e.target.result);
//         };
//         reader.readAsDataURL(this.files[0]);
//       });
//     });
//   }
//   previewEditImage() {
//     $(document).ready(function (e) {
//       $("#editImage").change(function () {
//         let reader = new FileReader();
//         reader.onload = (e) => {
//           $("#preview-image-before-edit").attr("src", e.target.result);
//         };
//         reader.readAsDataURL(this.files[0]);
//       });
//     });
//   }
//   async onSubmitHandle(e) {
//     e.preventDefault();
//     const fd = new FormData();
    
//     await axios
//       .post("http://localhost:8000/api/add-apartment", {
//         name: $("#inputName").val(),
//         price: $("#inputPrice").val(),
//         description: $("#inputDescription").val(),
//         images: $("#inputImage").val().split("\\")[2],
//         promotion: $("#inputType").val(),
//       })
//       .then((res) => {
//         $("#inputImage").val("");
//         alert('Bạn thêm sản phẩm thành công');
        
//         $("#closeModalAddBtn").click();
//         this.componentDidMount();
//       })
      
//   }

//   async deleteApartment(id) {
//     if (window.confirm(`Bạn muốn xóa sản phẩm có id là ${apartment_id}`)) {
//       await axios
//         .delete(`http://localhost:8000/api/delete-apartment/${apartment_id}`, {})
//         .then((res) => {
        
//           this.componentDidMount();
//         })
     
//     } else {
      
//     }
//   }

//   handleChange = (file) => {
//     this.setState({ fileUpload: file[0] });
//   };

//   async submitEditApartment(e) {
//     e.preventDefault();
//     const id = $("#editID").val();
    
//     const fd = new FormData();
   

//     await axios
//       .put(`http://localhost:8000/api/edit-apartment/${apartment_id}`, {
//         name: $("#editName").val(),
//         description: $("#editDescription").val(),
//         price: $("#editPrice").val(),
//         images: image,
//         promotion: $("#editType").val(),
//       })
//       .then(() => {
//         $("#editImage").val("");
        
//         $("#closeModalEditBtn").click();
//         this.componentDidMount();
//       });
//   }

//   async editApartment(id) {
//     let apartment = this.state.apartments.find(( apartment) =>  apartment.apartment_id === apartment_id);
//     $("#editID").val( apartment.apartment_id);
//     $("#editName").val( apartment.name);
//     $("#editDescription").val( apartment.description);
//     $("#editPrice").val( apartment.price);
//     $("#preview-image-before-edit").attr(
//       "src",
//       `http://localhost:8000/source/image/product/${ apartment.image}`
//     );
//     $("#editType").val( apartment.promotion);
//   }

//   columns = [
//     {
//       name: "ID",
//       selector: "apartment_id",
//       sortable: true,
//     },
//     {
//       name: "User_id",
//       selector: "user_id",
//       sortable: true,
//     },
//     {
//       name: "Description",
//       selector: "description",
//       sortable: true,
//       wrap: true,
//       compact: true,
//     },
//     {
//       name: "Price",
//       selector: "price",
//       sortable: true,
//       wrap: true,
//       compact: true,
//     },
//     {
//       name: "Area",
//       selector: "area",
//       sortable: true,
//     },
//     {
//       name: "Address_id",
//       selector: "address_id",
//       sortable: true,
//     },
//     {
//       name: "Number_room",
//       selector: "number_room",
//       sortable: true,
//     },

//     {
//       name: "Action",
//       selector: "apartment_id",
//       cell: (row) => (
//         <div>
//           <button
//             data-tag="allowRowEvents"
//             className="btn btn-sm btn-warning"
//             style={{ width: "80px" }}
//             onClick={() => {
//               this.editApartment(row.apartment_id);
//             }}
//             type="button"
//             data-toggle="modal"
//             data-target="#modelEditProduct"
//           >
//             Edit
//           </button>
//           <button
//             data-tag="allowRowEvents"
//             type="button"
//             className="btn btn-sm btn-danger"
//             style={{ width: "80px" }}
//             onClick={() => this.deleteApartment(row.apartment_id)}
//           >
//             Delete
//           </button>
//         </div>
//       ),
//       compact: true,
//     },
//   ];
//   render() {
//     return (
//       <div className="list_apartment">
//         {/* add product */}
//         <div>
//           <div
//             className="modal fade"
//             id="modelAddProduct"
//             tabIndex={-1}
//             role="dialog"
//             aria-labelledby="modelTitleId"
//             aria-hidden="true"
//           >
//             <div className="modal-dialog" role="document">
//               <div className="modal-content">
//                 <div className="modal-header">
//                   <h5 className="modal-title">Add New Apartment</h5>
//                   <button
//                     type="button"
//                     className="close"
//                     data-dismiss="modal"
//                     aria-label="Close"
//                     id="closeModalAddBtn">
//                     <span aria-hidden="true">×</span>
//                   </button>
//                 </div>
//                 <div className="modal-body">
//                   <form
//                     onSubmit={this.onSubmitHandle}
//                     encType="multipart/form-data">
//                         <div className="form-group">
//                       <label htmlFor="inputType">User_id</label>
//                       <input
//                         type="number"
//                         min={1}
//                         className="form-control"
//                         name="inputType"
//                         id="inputType"
//                         placeholder="Enter type"
//                         required
//                       />
//                     </div>
//                     <div className="form-group">
//                       <label htmlFor="inputDescription">Description</label>
//                       <input
//                         type="text"
//                         name="inputDescription"
//                         className="form-control"
//                         defaultValue={""}
//                       />
//                     </div>
                    
//                     <div className="form-group">
//                       <label htmlFor="inputPrice">Price</label>
//                       <input
//                         type="number"
//                         min={10000}
//                         className="form-control"
//                         name="inputPrice"
//                         id="inputPrice"
//                         placeholder="Enter price"
//                         required
//                       />
//                     </div>
//                     <div className="form-group">
//                       <label htmlFor="inputPromotionPrice">
//                         Number Room
//                       </label>
//                       <input
//                         type="number"
//                         min={10000}
//                         className="form-control"
//                         name="inputPromotionPrice"
//                         id="inputPromotionPrice"
//                         placeholder="Enter promotion price"
//                       />
//                     </div>
//                     <div className="form-group">
//                       <label htmlFor="inputPromotionPrice">
//                         Area
//                       </label>
//                       <input
//                         type="number"
//                         min={10000}
//                         className="form-control"
//                         name="inputPromotionPrice"
//                         id="inputPromotionPrice"
//                         placeholder="Enter promotion price"
//                       />
//                     </div>
                    
//                     <div className="form-group">
//                       <label htmlFor="inputNew">Address_id</label>
//                       <input
//                         type="number"
//                         min={0}
//                         className="form-control"
//                         name="inputNew"
//                         id="inputNew"
//                         placeholder="Enter new"
//                         required
//                       />
//                     </div>
//                     <div className="form-group">
//                       <label htmlFor="inputName">Type_room</label>
//                       <input
//                         type="text"
//                         className="form-control"
//                         name="inputName"
//                         id="inputName"
//                         placeholder="Enter name"
//                         required/>
//                     </div>
                    
                    
//                     <button type="submit" className="btn btn-primary">
//                       Submit
//                     </button>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* edit product */}
//         <div>
//           <div
//             className="modal fade"
//             id="modelEditProduct"
//             tabIndex={-1}
//             role="dialog"
//             aria-labelledby="modelTitleId"
//             aria-hidden="true"
//           >
//             <div className="modal-dialog" role="document">
//               <div className="modal-content">
//                 <div className="modal-header">
//                   <h5 className="modal-title">Modal Edit Product</h5>
//                   <button
//                     type="button"
//                     className="close"
//                     data-dismiss="modal"
//                     aria-label="Close"
//                     id="closeModalEditBtn"
//                   >
//                     <span aria-hidden="true">×</span>
//                   </button>
//                 </div>
//                 <div className="modal-body">
//                   <form
//                     onSubmit={this.submitEditApartment}
//                     encType="multipart/form-data"
//                   >
//                     <div className="form-group">
//                       <label htmlFor="editID">ID</label>
//                       <input
//                         type="number"
//                         className="form-control"
//                         name="editID"
//                         id="editID"
//                         readOnly
//                       />
//                     </div>
//                     <div className="form-group">
//                       <label htmlFor="editName">Name</label>
//                       <input
//                         type="text"
//                         className="form-control"
//                         name="editName"
//                         id="editName"
//                         placeholder="Enter name"
//                         required
//                       />
//                     </div>
//                     <div className="form-group">
//                       <label htmlFor="editPrice">Price</label>
//                       <input
//                         type="number"
//                         min={10000}
//                         className="form-control"
//                         name="editPrice"
//                         id="editPrice"
//                         placeholder="Enter price"
//                         required
//                       />
//                     </div>
             
//                     <div className="form-group">
//                       <label htmlFor="inputType">Promotion</label>
//                       <input
//                         type="number"
//                         min={1}
//                         className="form-control"
//                         name="editType"
//                         id="editType"
//                         placeholder="Enter type"
//                         required
//                       />
//                     </div>
              
               
//                     <div className="form-group">
//                       <label htmlFor="editImage">Image file</label>
//                       <input
//                         type="file"
//                         className="form-control-file"
//                         name="editImage"
//                         id="editImage"
//                         onChange={(e) => this.handleChange(e.target.files)}
//                       />
//                     </div>
//                     <div className="form-group">
//                       <img
//                         id="preview-image-before-edit"
//                         src="https://www.riobeauty.co.uk/images/product_image_not_found.gif"
//                         alt="xem trước"
//                         style={{ maxHeight: 250 }}
//                       />
//                       {this.previewEditImage()}
//                     </div>
//                     <div className="form-group">
//                       <label htmlFor="editDescription">Description</label>
//                       <input
//                         type="text"
//                         name="editDescription"
//                         id="editDescription"
//                         className="form-control"
//                       />
//                     </div>
//                     <button type="submit" className="btn btn-primary">
//                       Submit
//                     </button>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* show product */}
//         <div className="container">
//           <button
//             type="button"
//             data-toggle="modal"
//             data-target="#modelAddProduct"
//             className="btn btn-success"
//             style={{ width:200, }}
//           >
//             Add new apartment
//           </button>
//           <DataTable
//             title="List Apartment"
//             columns={this.columns}
//             data={this.state.apartments}
//             paginationPerPage={5}
//             defaultSortField="id"
//             pagination
//           />
//         </div>
//       </div>
//     );
//   }
// }

// export default List_apartment;
































import React, { Component } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";
import "bootstrap/dist/css/bootstrap.css";

class List_apartment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apartments: [],
    };
    this.deleteApartments = this.deleteApartments.bind(this);
  }

  async componentDidMount() {
    await this.fetchApartments();
  }

  async fetchApartments() {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/get-apartment");
      this.setState({ apartments: response.data });
    } catch (error) {
      console.error("Error fetching apartments:", error);
    }
  }

  async deleteApartments(apartment_id) {
    try {
      if (window.confirm(`Bạn muốn xóa căn hộ có ID là ${apartment_id}`)) {
        await axios.delete(`http://localhost:8000/api/delete-apartment/${apartment_id}`);
        await this.fetchApartments();
      }
    } catch (error) {
      console.error("Error deleting apartment:", error);
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
        cell: (row) => (
          <div>
            <button
              className="btn btn-sm btn-warning"
              style={{ width: "80px" }}
              onClick={() => {
                // Handle edit logic here
              }}
              type="button"
            >
              Edit
            </button>
            <button
              className="btn btn-sm btn-danger"
              style={{ width: "80px" }}
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
      <div className="list_apartment">
        <DataTable
          title="Apartment List"
          columns={columns}
          data={this.state.apartments}
          paginationPerPage={5}
          defaultSortField="apartment_id"
          pagination
        />
      </div>
    );
  }
}

export default List_apartment;
