import React, { useState, useEffect, useContext, useRef } from "react";

import {
  Grid,
  Box,
  Typography,
  FormGroup,
  FormControlLabel,
  Button,
  TextField,
} from "@mui/material";
import NextLink from "next/link";
import Image from "next/image";
import { NextSeo } from "next-seo";
import {
  getSession,
  useSession,
  getCsrfToken,
  getProviders,
  signIn,
} from "next-auth/react";

import CustomCheckbox from "../../src/components/forms/custom-elements/CustomCheckbox";
import CustomTextField from "../../src/components/forms/custom-elements/CustomTextField";
import CustomFormLabel from "../../src/components/forms/custom-elements/CustomFormLabel";

import img1 from "../../assets/images/backgrounds/login-bg.svg";
import LogoIcon from "../../src/layouts/logo/LogoIcon";

import { Notyf } from "notyf";
import "notyf/notyf.min.css";

import { useRouter } from "next/dist/client/router";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [isLogin, setIsLogin] = useState(true);
  const router = useRouter();

  function switchAuthModeHandler() {
    setIsLogin((prevState) => !prevState);
  }

  async function submitHandler(e) {
    e.preventDefault();

    const notyf = new Notyf({
      position: {
        x: "right",
        y: "top",
      },
    });

    if (isLogin) {
      const result = await signIn("credentials", {
        redirect: false,
        username: username,
        password: password,
      });

      if (result.error) {
        notyf.error(result.error);
      } else {
        notyf.success("Successful!");
        router.replace("/dashboard");
      }
    }
  }

  return (
    <>
      <>
        <NextSeo title="Login" />
      </>
      <Grid container sx={{ height: "100vh", justifyContent: "center" }}>
        <Grid
          item
          xs={12}
          sm={12}
          lg={6}
          sx={{
            background: (theme) =>
              `${theme.palette.mode === "dark" ? "#1c1f25" : "#ffffff"}`,
          }}
        >
          <Box
            sx={{
              position: "relative",
            }}
          >
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              sx={{
                position: {
                  xs: "relative",
                  lg: "absolute",
                },
                height: { xs: "auto", lg: "100vh" },
                right: { xs: "auto", lg: "-50px" },
                margin: "0 auto",
              }}
            >
              <Image src={img1} alt="bg" maxWidth="812" />
            </Box>

            <Box
              sx={{
                p: 4,
                position: "absolute",
                top: "0",
              }}
            >
              <LogoIcon />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={8} lg={6} display="flex" alignItems="center">
          <Grid container spacing={0} display="flex" justifyContent="center">
            <Grid item xs={12} lg={9} xl={6}>
              <Box
                sx={{
                  p: 4,
                }}
              >
                <Typography fontWeight="700" variant="h2">
                  Welcome to ERP
                </Typography>

                <Box
                  sx={{
                    mt: 4,
                  }}
                >
                  <form onSubmit={submitHandler}>
                    <CustomFormLabel htmlFor="username">
                      Username
                    </CustomFormLabel>
                    <CustomTextField
                      id="username"
                      name="username"
                      variant="outlined"
                      fullWidth
                      sx={{
                        mb: 3,
                      }}
                      required
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    ></CustomTextField>
                    <CustomFormLabel htmlFor="password">
                      Password
                    </CustomFormLabel>
                    <CustomTextField
                      id="password"
                      name="password"
                      type="password"
                      variant="outlined"
                      fullWidth
                      sx={{
                        mb: 3,
                      }}
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <Box
                      sx={{
                        display: {
                          xs: "block",
                          sm: "flex",
                          lg: "flex",
                        },
                        alignItems: "center",
                      }}
                    >
                      <FormGroup>
                        <FormControlLabel
                          control={<CustomCheckbox defaultChecked />}
                          label="Remeber this Device"
                          sx={{
                            mb: 2,
                          }}
                        />
                      </FormGroup>
                      <Box
                        sx={{
                          ml: "auto",
                        }}
                      >
                        <NextLink href="/authentication/reset-password">
                          <Typography
                            fontWeight="500"
                            sx={{
                              display: "block",
                              textDecoration: "none",
                              mb: "16px",
                              color: "primary.main",
                              cursor: "pointer",
                            }}
                          >
                            Forgot Password ?
                          </Typography>
                        </NextLink>
                      </Box>
                    </Box>

                    <Button
                      type="submit"
                      color="secondary"
                      variant="contained"
                      size="large"
                      fullWidth
                      sx={{
                        pt: "10px",
                        pb: "10px",
                      }}
                    >
                      Sign In
                    </Button>
                  </form>
                  <Box
                    sx={{
                      position: "relative",
                      textAlign: "center",
                      mt: "20px",
                      mb: "20px",
                      "&::before": {
                        content: '""',
                        background: (theme) =>
                          `${
                            theme.palette.mode === "dark"
                              ? "#42464d"
                              : "#ecf0f2"
                          }`,
                        height: "1px",
                        width: "100%",
                        position: "absolute",
                        left: "0",
                        top: "13px",
                      },
                    }}
                  ></Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

Login.layout = "Blank";
export default Login;

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });

  if (session) {
    return {
      redirect: { destination: "/dashboard" },
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
