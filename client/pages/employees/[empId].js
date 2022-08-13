import { useRouter } from "next/router";
import React from "react";
import Image from "next/image";
import { Card, Grid, Typography, Button, Autocomplete } from "@mui/material";

import av1 from "../../assets/images/users/4.jpg";
import CustomTextField from "../../src/components/forms/custom-elements/CustomTextField";
import CustomFormLabel from "../../src/components/forms/custom-elements/CustomFormLabel";

function employeeDetailPage() {
  const router = useRouter();
  const { empId } = router.query;
  console.log(empId);

  return (
    <Grid container spacing={0}>
      <Grid item lg={4} md={12} xs={12}>
        <Card sx={{ p: 3 }}>
          <Image
            alt="Remy Sharp"
            src={av1}
            width="110"
            height="110"
            className="roundedCircle"
          />
          <Typography variant="h2" sx={{ mt: 1 }}>
            Nirav Joshi
          </Typography>
          <Typography variant="body2">FullStack Developer</Typography>
          <Typography variant="h6" fontWeight="600" sx={{ mt: 3, mb: 1 }}>
            Address
          </Typography>
          <Typography variant="body2">
            11, Avenue Ganesh, Near Osia plex, opposit Apex Tower, New York, USA
          </Typography>
          <Button color="error" variant="contained" sx={{ mt: 3 }}>
            Delete Account
          </Button>
        </Card>
      </Grid>
      <Grid item lg={8} md={12} xs={12}>
        <Card sx={{ p: 3 }}>
          <Typography variant="h6" fontWeight="600" sx={{ mb: 3 }}>
            Edit Details
          </Typography>
          <form>
            <CustomFormLabel htmlFor="name">Name</CustomFormLabel>
            <CustomTextField
              id="name"
              variant="outlined"
              defaultValue="Nirav Joshi"
              fullWidth
              size="small"
              sx={{ mb: 2 }}
            />

            <CustomFormLabel htmlFor="Email">Email</CustomFormLabel>
            <CustomTextField
              id="Email"
              variant="outlined"
              defaultValue="nirav@gadga.com"
              fullWidth
              size="small"
              sx={{ mb: 2 }}
            />

            <CustomFormLabel htmlFor="project">Project Name</CustomFormLabel>
            <CustomTextField
              id="project"
              variant="outlined"
              defaultValue="Hosting Press HTML"
              fullWidth
              size="small"
              sx={{ mb: 2 }}
            />

            <CustomFormLabel htmlFor="project-details">
              Project Description
            </CustomFormLabel>
            <CustomTextField
              id="project-details"
              variant="outlined"
              multiline
              rows={4}
              defaultValue="Sard about this site or you have been to it, but you cannot figure out what it is or what it can do. 
                        MTA web directory is the simplest way in which one can bid on a link, or a few links if they wish to do so. which makes it much easier for someone to find what they are looking for if "
              fullWidth
              size="small"
              sx={{ mb: 2 }}
            />
            <Button color="primary" variant="contained">
              Update
            </Button>
          </form>
        </Card>
      </Grid>
    </Grid>
  );
}

export default employeeDetailPage;