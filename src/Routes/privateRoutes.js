import AddProduct from "../Components/AddProduct";
import Phones from "../Components/Phones";
import UpdateProduct from "../Components/UpdateProduct";
import Users from "../Components/Users";
import Profile from "../Pages/Profile";




export const privateRoutes = [

    {
        name: 'All Products',
        Component: Phones,
        path: '/dashboard'
    },
    {
        name: 'Update',
        Component: UpdateProduct,
        path: '/dashboard/update-product'
    },
    {
        name: 'Add Product',
        Component: AddProduct,
        path: '/dashboard/add-product'
    },
    {
        name: 'Users',
        Component: Users,
        path: '/dashboard/users'
    },
    // {
    //     name: 'Profile',
    //     Component: Profile,
    //     path: '/profile'
    // },


]