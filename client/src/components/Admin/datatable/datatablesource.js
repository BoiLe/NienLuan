export const userColumns = [
  { field: "id", headerName: "ID", width: 200 },
  // {
  //   field: "user",
  //   headerName: "User",
  //   width: 230,
  //   renderCell: (params) => {
  //     return (
  //       <div className="cellWithImg">
  //         <img className="cellImg" src={params.row.img} alt="avatar" />
  //         {params.row.username}
  //       </div>
  //     );
  //   },
  // },

  {
    field: "price",
    headerName: "Price",
    width: 100,
  },
  {
    field: "brand",
    headerName: "Brand",
    width: 200,
  },
  {
    field: "describe",
    headerName: "Describe",
    width: 150,
  },
  {
    field: "img",
    headerName: "Img",
    width: 100,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
        </div>
      );
    },
  },

  // {
  //   field: "status",
  //   headerName: "Status",
  //   width: 160,
  //   renderCell: (params) => {
  //     return (
  //       <div className={`cellWithStatus ${params.row.status}`}>
  //         {params.row.status}
  //       </div>
  //     );
  //   },
  // },
];

//temporary data
