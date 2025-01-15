import React, {useState, useContext} from "react";
import {
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import BaseCard from "../baseCard/BaseCard";
import { ProdContext } from "./../../../pages/Context/productcontext";
import { red } from "@mui/material/colors";
import Image from 'next/image'
import { Button } from "@mui/material";



const ProductPerfomance = () => {
  const products = useContext(ProdContext);
  // const [del, setDel] = useState([]);

  const delProd = (id) => {
        fetch(`http://localhost:3000/api/productcard/${id}`, {
        method: "DELETE"
      })
        .then((response) => response.json())
        .then((data) => {
          window.location.reload();
        })
        .catch((error) => console.log(error));
   }

return (
  <BaseCard title="Delete Products">
    <Table
      aria-label="simple table"
      sx={{
        mt: 3,
        whiteSpace: "nowrap",
      }}
    >
      <TableHead>
        <TableRow>
          <TableCell>
            <Typography color="textSecondary" variant="h6">
              Id
            </Typography>
          </TableCell>
          <TableCell>
            <Typography color="textSecondary" variant="h6">
              Products
            </Typography>
          </TableCell>
          <TableCell>
            <Typography color="textSecondary" variant="h6">
              Title
            </Typography>
          </TableCell>
          <TableCell>
            <Typography color="textSecondary" variant="h6">
              Price
            </Typography>
          </TableCell>
          <TableCell align="center">
            <Typography color="textSecondary" variant="h6">
              Action
            </Typography>
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {products.allProducts?.map((item) => (
          <TableRow key={item.product_id}>
            <TableCell>
              <Typography
                sx={{
                  fontSize: "15px",
                  fontWeight: "500",
                }}
              >
                {item.product_id}
              </Typography>
            </TableCell>
            <TableCell>
              <Image
                src={item.imgurl}
                layout="intrinsic"
                width={100}
                height={80}
              />
            </TableCell>
            <TableCell>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "600",
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    color="textSecondary"
                    sx={{
                      fontSize: "13px",
                    }}
                  >
                    {item.info}
                  </Typography>
                </Box>
              </Box>
            </TableCell>

            <TableCell align="left">
              <Typography variant="h6">${item.price}</Typography>
            </TableCell>
            <TableCell align="center">
              <Button onClick={() => delProd(item.product_id)}>
                <DeleteIcon sx={{ color: red[500] }} />
                
              </Button>
            </TableCell>

          </TableRow>
        ))}
      </TableBody>
    </Table>
  </BaseCard>
);
};

export default ProductPerfomance;
