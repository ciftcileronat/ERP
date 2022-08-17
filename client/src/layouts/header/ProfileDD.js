import React, { useState, useEffect } from "react";
import FeatherIcon from "feather-icons-react";
import Image from "next/image";
import NextLink from "next/link";
import userimg from "../../../assets/images/users/user2.jpg";
import {
  Box,
  Menu,
  Typography,
  MenuItem,
  Button,
  Divider,
} from "@mui/material";

import {
  getSession,
  useSession,
  getCsrfToken,
  getProviders,
} from "next-auth/react";

import { signOut } from "next-auth/react";

function ProfileDD(props) {
  function logoutHandler() {
    signOut();
  }

  const [anchorEl4, setAnchorEl4] = React.useState(null);

  const handleClick4 = (event) => {
    setAnchorEl4(event.currentTarget);
  };

  const handleClose4 = () => {
    setAnchorEl4(null);
  };

  return (
    <>
      <Button
        aria-label="menu"
        color="inherit"
        aria-controls="profile-menu"
        aria-haspopup="true"
        onClick={handleClick4}
      >
        <Box display="flex" alignItems="center">
          <Image
            src={userimg}
            alt={userimg}
            width="30"
            height="30"
            className="roundedCircle"
          />
          <Box
            sx={{
              display: {
                xs: "none",
                sm: "flex",
              },
              alignItems: "center",
            }}
          >
            <Typography
              color="textSecondary"
              variant="h5"
              fontWeight="400"
              sx={{ ml: 1 }}
            >
              Hi,
            </Typography>
            <Typography
              variant="h5"
              fontWeight="700"
              sx={{
                ml: 1,
              }}
            >
              {/*props.session.user.fullname*/}
            </Typography>
            <FeatherIcon icon="chevron-down" width="20" height="20" />
          </Box>
        </Box>
      </Button>
      <Menu
        id="profile-menu"
        anchorEl={anchorEl4}
        keepMounted
        open={Boolean(anchorEl4)}
        onClose={handleClose4}
        sx={{
          "& .MuiMenu-paper": {
            width: "385px",
            right: 0,
            top: "70px !important",
          },
          "& .MuiList-padding": {
            p: "30px",
          },
        }}
      >
        <Box>
          <Box
            sx={{
              mb: 1,
            }}
          >
            <Box display="flex" alignItems="center">
              <Typography variant="h4" fontWeight="500">
                User Profile
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              pb: 3,
              mt: 3,
            }}
          >
            <Box display="flex" alignItems="center">
              <Image
                width="90"
                height="90"
                src={userimg}
                alt={userimg}
                className="roundedCircle"
              />
              <Box
                sx={{
                  ml: 2,
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    lineHeight: "1.235",
                  }}
                >
                  {/*props.session.user.fullname*/}
                </Typography>
                <Typography color="textSecondary" variant="h6" fontWeight="400">
                  Administrator
                </Typography>
                <Box display="flex" alignItems="center">
                  <Typography
                    color="textSecondary"
                    display="flex"
                    alignItems="center"
                    sx={{
                      color: (theme) => theme.palette.grey.A200,
                      mr: 1,
                    }}
                  >
                    <FeatherIcon icon="mail" width="18" />
                  </Typography>
                  <Typography color="textSecondary" variant="h6">
                    info@flexy.com
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          <Divider
            style={{
              marginTop: 0,
              marginBottom: 0,
            }}
          />

          <Box>
            <MenuItem
              sx={{
                pt: 3,
                pb: 3,
              }}
            >
              <Box display="flex" alignItems="center">
                <Button
                  sx={{
                    backgroundColor: (theme) => theme.palette.primary.light,
                    color: (theme) => theme.palette.primary.main,
                    boxShadow: "none",
                    minWidth: "50px",
                    width: "45px",
                    height: "40px",
                    borderRadius: "10px",
                  }}
                >
                  <FeatherIcon icon="dollar-sign" width="18" height="18" />
                </Button>
                <Box
                  sx={{
                    ml: 2,
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      lineHeight: "1.235",
                    }}
                  >
                    My Profile
                  </Typography>
                  <Typography
                    color="textSecondary"
                    variant="h6"
                    fontWeight="400"
                  >
                    Account Settings
                  </Typography>
                </Box>
              </Box>
            </MenuItem>
            <Divider
              style={{
                marginTop: 0,
                marginBottom: 0,
              }}
            />
            <MenuItem
              sx={{
                pt: 3,
                pb: 3,
              }}
            >
              <Box display="flex" alignItems="center">
                <Button
                  sx={{
                    backgroundColor: (theme) => theme.palette.success.light,
                    color: (theme) => theme.palette.success.main,
                    boxShadow: "none",
                    minWidth: "50px",
                    width: "45px",
                    height: "40px",
                    borderRadius: "10px",
                  }}
                >
                  <FeatherIcon icon="shield" width="18" height="18" />
                </Button>
                <Box
                  sx={{
                    ml: 2,
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      lineHeight: "1.235",
                    }}
                  >
                    My Inbox
                  </Typography>
                  <Typography
                    color="textSecondary"
                    variant="h6"
                    fontWeight="400"
                  >
                    Messages & Emails
                  </Typography>
                </Box>
              </Box>
            </MenuItem>
            <Divider
              style={{
                marginTop: 0,
                marginBottom: 0,
              }}
            />
            <MenuItem
              sx={{
                pt: 3,
                pb: 3,
              }}
            >
              <Box display="flex" alignItems="center">
                <Button
                  sx={{
                    backgroundColor: (theme) => theme.palette.error.light,
                    color: (theme) => theme.palette.error.main,
                    boxShadow: "none",
                    minWidth: "50px",
                    width: "45px",
                    height: "40px",
                    borderRadius: "10px",
                  }}
                >
                  <FeatherIcon icon="credit-card" width="18" height="18" />
                </Button>
                <Box
                  sx={{
                    ml: 2,
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      lineHeight: "1.235",
                    }}
                  >
                    My Tasks
                  </Typography>
                  <Typography
                    color="textSecondary"
                    variant="h6"
                    fontWeight="400"
                  >
                    To-do and Daily Tasks
                  </Typography>
                </Box>
              </Box>
            </MenuItem>
          </Box>
          <NextLink href="">
            <Button
              sx={{
                mt: 2,
                display: "block",
                width: "100%",
              }}
              variant="contained"
              color="primary"
              onClick={logoutHandler}
            >
              Logout
            </Button>
          </NextLink>
        </Box>
      </Menu>
    </>
  );
}

export default ProfileDD;

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });

  if (!session) {
    return {
      redirect: { destination: "/authentication/login" },
    };
  }

  const csrfToken = await getCsrfToken(context);
  const providers = await getProviders();

  return {
    props: {
      session,
      csrfToken,
      providers,
    },
  };
}
