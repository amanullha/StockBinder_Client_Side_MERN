import { Link, useLocation } from 'react-router-dom';
import { RiScreenshot2Line } from 'react-icons/ri'
import { RiProductHuntLine } from 'react-icons/ri'
import { MdAddToPhotos, MdOutlineUpdate } from 'react-icons/md'
import { GrDocumentUpdate, GrUpdate } from 'react-icons/gr'
import { FaUsers } from 'react-icons/fa'


export const dashboardList = [

    {
        name: "Show All",
        path: "/dashboard",
        itemRoute: 'dashboard',
        icon: <RiProductHuntLine size={25} />
    },
    {
        name: "Add Product",
        path: "/dashboard/add-product",
        itemRoute: 'add-product',
        icon: <MdAddToPhotos size={25} />
    },
    // {
    //     name: "Update product",
    //     path: "/dashboard/update-product",
    //     itemRoute: 'update-product',
    //     icon: <MdOutlineUpdate size={25} />
    // },
    {
        name: "Users",
        path: "/dashboard/users",
        itemRoute: 'users',
        icon: <FaUsers size={25} />
    },
]
