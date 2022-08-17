import { Grid } from "@mui/material";
import {
  WelcomeCard,
  BlogCard,
  Earnings,
  MonthlySales,
  SalesOverview,
  TotalSales,
  ProductPerformance,
  WeeklyStats,
  DailyActivities,
} from "../src/components/dashboard/dashboard1";

import {
  getSession,
  useSession,
  getCsrfToken,
  getProviders,
} from "next-auth/react";

function Dashboard(props) {
  return (
    <Grid container spacing={0}>
      {/* ------------------------- row 1 ------------------------- */}
      <Grid item xs={12} lg={6}>
        <WelcomeCard fullname={props.session.user.fullname} />
        <Grid container spacing={0}>
          <Grid item xs={12} lg={6} sm={6}>
            <Earnings />
          </Grid>
          <Grid item xs={12} lg={6} sm={6}>
            <MonthlySales />
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} lg={6}>
        <SalesOverview />
      </Grid>
      {/*}
      { ------------------------- row 2 ------------------------- }
      <Grid item xs={12} lg={4}>
        <TotalSales />
      </Grid>
      <Grid item xs={12} lg={8}>
        <ProductPerformance />
      </Grid>
      { ------------------------- row 3 ------------------------- }
      <Grid item xs={12} lg={4}>
        <BlogCard />
      </Grid>
      <Grid item xs={12} lg={4}>
        <WeeklyStats />
      </Grid>
      <Grid item xs={12} lg={4}>
        <DailyActivities />
      </Grid>
      */}
    </Grid>
  );
}

export default Dashboard;

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
