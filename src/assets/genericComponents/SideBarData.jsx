import { v4 as uuidv4 } from "uuid";
import { BsHouseDoor } from "react-icons/bs";
import { PATH } from "../../config";

const SidebarData = [
  {
    id: uuidv4(),
    title: "Home",
    icon: <BsHouseDoor size={24} />,
    path: PATH.DASHBOARD,
    pathList: [PATH.DASHBOARD],
    subNav: [
      {
        id: uuidv4(),
        title: "Link 1",
        path: "",
        pathList: [],
        // icon: <GoPrimitiveDot className="me-2 font-16" />,
      },
      {
        id: uuidv4(),
        title: "Link 2",
        path: "",
        pathList: [],
        // icon: <GoPrimitiveDot className="me-2 font-16" />,
      },
    ],
  },
  {
    id: uuidv4(),
    title: "Single Link",
    path: "",
    icon: "",
  },
  {
    id: uuidv4(),
    title: "Multi Links",
    icon: "",
    subNav: [
      {
        id: uuidv4(),
        title: "Tab 1",
        subNav: [
          {
            id: uuidv4(),
            title: "Link 1",
            path: "",
            pathList: [],
            // icon: <GoPrimitiveDot className="me-2 font-16" />,
          },
          {
            id: uuidv4(),
            title: "Link 2",
            path: "",
            pathList: [],
            // icon: <GoPrimitiveDot className="me-2 font-16" />,
          },
        ],
      },
    ],
  },
];

export default SidebarData;
