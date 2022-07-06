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
        href: "/banks/banka",
      },
    ],
  },
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
    ],
  },
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
        href: "/inventory/officea",
      },
      {
        title: "Office B",
        icon: "list",
        href: "/inventory/officeb",
      },
    ],
  },
];

export default Menuitems;
