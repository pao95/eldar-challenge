import { DataGrid, GridActionsCellItem, GridColDef } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import { Post } from "../../../interfaces/post";
import { useCheckRole } from "../../../hooks/useCheckRole";
import { userRoleTypes } from "../../../enums/userRoleTypes";

const paginationModel = { page: 0, pageSize: 10 };

interface PostsGridProps {
  dataPosts: Post[];
  onClickEditPost: (post: Post) => void;
}

export const PostsGrid: React.FC<PostsGridProps> = ({
  dataPosts,
  onClickEditPost,
}) => {
  const { checkRole } = useCheckRole();

  const columns: GridColDef[] = [
    { field: "id", headerName: "Id", width: 100 },
    { field: "title", headerName: "Title", width: 250 },
    { field: "body", headerName: "Post", flex: 1 },

    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      width: 100,
      cellClassName: "actions",

      getActions: ({ row }) => {
        return [
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            className="textPrimary"
            onClick={() => onClickEditPost(row as Post)}
            color="inherit"
            key={1}
            disabled={!checkRole({ role: userRoleTypes.ADMIN })}
          />,
        ];
      },
    },
  ];

  return (
    <DataGrid
      rows={dataPosts}
      columns={columns}
      rowHeight={50}
      pageSizeOptions={[10]}
      initialState={{
        pagination: { paginationModel },
      }}
      sx={{
        "& .MuiDataGrid-columnHeaderTitle  ": {
          fontWeight: 600,
        },
      }}
    />
  );
};
