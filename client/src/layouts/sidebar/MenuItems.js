const Menuitems = [
  {
    navlabel: true,
    subheader: "DASHBOARD",
    icon: "mdi mdi-dots-horizontal",
    href: "Dashboard",
  },
  {
    title: "Dashboard",
    icon: "hard-drive",
    href: "/dashboard",
  },
  {
    navlabel: true,
    subheader: "Human Resources",
    icon: "hard-drive",
  },
  {
    title: "Employees",
    icon: "users",
    href: "/",
    collapse: true,
    children: [
      {
        title: "All Employees",
        icon: "list",
        href: "/employees/all",
      },
      {
        title: "Create Employee",
        icon: "plus",
        href: "/employees/create",
      },
    ],
  },
  {
    navlabel: true,
    subheader: "Finance",
    icon: "money",
  },
  {
    title: "Bank Accounts",
    icon: "briefcase",
    href: "/",
    collapse: true,
    children: [
      {
        title: "Bank A",
        icon: "list",
        href: "",
      },
    ],
  },
  /*
  {
    navlabel: true,
    subheader: "Projects",
    icon: "money",
  },
  {
    title: "Projects",
    icon: "tool",
    href: "/",
    collapse: true,
    children: [
      {
        title: "Project A",
        icon: "list",
        href: "/projects/projecta",
      },
      {
        title: "Project B",
        icon: "list",
        href: "/projects/projectb",
      },
      {
        title: "Project C",
        icon: "list",
        href: "/projects/projectc",
      },
    ],
  },
  */
  {
    navlabel: true,
    subheader: "Inventory",
    icon: "home",
  },
  {
    title: "Office",
    icon: "home",
    href: "/",
    collapse: true,
    children: [
      {
        title: "Office A",
        icon: "list",
        href: "",
      },
      {
        title: "Office B",
        icon: "list",
        href: "",
      },
    ],
  },
];

export default Menuitems;
