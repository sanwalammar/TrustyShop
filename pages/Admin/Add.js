import React, { useState, useLayoutEffect } from "react";
import { Box, Grid, MenuItem } from "@mui/material";
import theme from "../../src/theme/theme";
import { ThemeProvider } from "@mui/material/styles";
import FullLayout from "../../src/layouts/FullLayout";
import CardMedia from "@mui/material/CardMedia";
import { Stack, TextField, Button } from "@mui/material";
import BaseCard from "../../src/components/baseCard/BaseCard";
import Swal from "sweetalert2";
import Imgupload from "../Components/Imgupload"
import { isAdmin } from './../utils/auth'
import { useRouter } from "next/router";
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';


function prodAdd() {

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [info, setInfo] = useState("");
  const [category, setCategory] = useState("");
  const [imgurl, setImgurl] = useState("");
  const router = useRouter()

  useLayoutEffect(() => {
    if (!isAdmin()) {
      router.push('/Home')
    }
  }, []);

  const Add = async (e) => {
    e.preventDefault();

    const data = {
      title,
      price,
      info,
      imgurl,
      category,
    };

    const res = await fetch(`http://localhost:3000/api/admin/add`, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "manual",
      body: JSON.stringify(data),

    });
    if (res.status === 200) {
      Swal.fire({
        icon: "success",
        title: "Successfully Registered!",
        text: "You are Successfully registered now.",
        confirmButtonText: 'OK'
      }).then((result) => {
        if (result.isConfirmed) {
          location.reload();
        }
      })
    }

  };


  return (
    <form>
      <ThemeProvider theme={theme}>
        <FullLayout>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={0}>
              <Grid item xs={12} lg={8}>
                <BaseCard title="Add Product">
                  <Stack spacing={3}>
                    <TextField name="Title" label="Title" variant="outlined"
                      value={title} onChange={(e) => setTitle(e.target.value)} />
                    <TextField name="Info" label="Description" multiline rows={4}
                      value={info} onChange={(e) => setInfo(e.target.value)} />
                    <TextField name="Price" label="Price" variant="outlined"
                      value={price} onChange={(e) => setPrice(e.target.value)} />
                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="Category">Category</InputLabel>
                    <Select id="Category" labelId="Caregory" label="Select Category"
                      value={category} onChange={(e) => setCategory(e.target.value)}>

                      <MenuItem value={2}> HeadPhone </MenuItem>
                      <MenuItem value={4}> CPU </MenuItem>
                      <MenuItem value={1}> Shoes </MenuItem>
                      <MenuItem value={3}> Sony </MenuItem>
                    </Select>
                    </FormControl>
                  </Stack>
                  <br />
                  <Button variant="contained" component="label" onClick={Add} >
                    Submit
                  </Button>
                </BaseCard>
              </Grid>
              <Grid item xs={12} lg={4}>
                <BaseCard title="Upload Images">
                  <Stack spacing={5}>
                    <CardMedia
                      component="img"
                      height="140"
                      Icon="plus-circle"
                      alt=""
                    />
                  </Stack>
                  <Imgupload onClickurl={(b) => setImgurl(b)} />

                </BaseCard>
              </Grid>
            </Grid>
          </Box>
        </FullLayout>
      </ThemeProvider>
    </form>
  );
}
export default prodAdd;
