export const MenuData = [
  {
    label: "Home",
    to: "/home",
  },
  {
    label: "Profile",
    to: "/profile",
    children: [
      {
        label: "Details",
        to: "/details",
        children: [
          {
            label: "Location",
            to: "/location",
            children: [
              {
                label: "city",
                to: "/city",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    label: "Settings",
    to: "/setttings",
    children: [
      {
        label: "Account",
        to: "/account",
        children: [
          {
            label: "Security",
            to: "/securtiy",
            children: [
              {
                label: "Login",
                to: "/login",
                children: [
                  {
                    label: "Register",
                    to: "/register",
                    children: [
                      {
                        label: "Random data",
                        to: "/randomdata",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];
