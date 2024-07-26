import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useNavigate } from "react-router-dom";

export default function BreadCrumbs({ list }) {
  const navigate = useNavigate();

  return (
    <div className="text-white">
      <Breadcrumbs
        sx={{ fontSize: "small", paddingTop:'1rem' }}
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {list &&
          list?.map((listItem, index) => {
            return index >= index.length - 1 ? (
              <Typography key={index} color={"white"} sx={{color:"white"}}>
                {listItem.name}

              </Typography>
            ) : (
              <Link
                underline="hover"
                key={index}
                color={"white"}
                style={{ cursor: "pointer", color:"white" }}
                onClick={() => navigate(listItem.path)}
              >
                {listItem.name}
              </Link>
            );
          })}
      </Breadcrumbs>
    </div>
  );
}
