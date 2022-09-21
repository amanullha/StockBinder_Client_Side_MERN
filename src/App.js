import NavBar from "./Layouts/Header/NavBar";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useEffect, useState } from "react";
import '../src/Assets/CssStyles/textFont.css'
import Footer from "./Layouts/Footer/Footer";
import InventoryUsesPrice from "./Components/InventoryUsesPrice";
import Phones from "./Components/Phones";
import { publicRoutes } from "./Routes/publicRoutes";
import { Route, Routes } from "react-router-dom";

import toast, { Toaster } from 'react-hot-toast';
import { privateRoutes } from "./Routes/privateRoutes";
import Dashboard from "./Pages/Dashboard";
import AddProduct from "./Components/AddProduct";
import RequireAuth from "./Authentication/RequireAuth";
import RequireSupperAdmin from "./Authentication/RequireSupperAdmin";
import Users from "./Components/Users";
import NotFound from "./NotFound/NotFound";
import Profile from "./Pages/Profile";



// AOS.init();

function App() {


  useEffect(() => {
    AOS.init();
  }, []);




  return (
    <div className="montFont overflow-hidden bg-white">

      <div className="">


        <NavBar>


          <Routes>




            {/* Public Routes  */}

            {
              publicRoutes.map(({ path, Component }, index) =>

                <Route key={index} path={path} element={<Component />} />




              )
            }



            {/* Nested routes or Dashboard routes and private routes*/}

            <Route element={<RequireAuth />}>


              <Route path='/dashboard' element={<Dashboard />}>
                {/* <Route path='/dashboard/add-product' element={<AddProduct />} /> */}


                {
                  privateRoutes.map(({ path, Component, name }, index) => {

                    if (name === 'Users') {


                      return <Route element={<RequireSupperAdmin />}>

                        <Route path={path} element={<Component />} />

                      </Route>


                    }
                    else {


                      return <Route path={path} element={<Component />} />


                    }

                    // return <Route path={path} element={<Component />} />



                  })
                }


              </Route>


            </Route>






            {/* <Route element={<RequireAuth />}>

              <Route path='/dashboard/users' element={<RequireSupperAdmin> <Users /></RequireSupperAdmin>} />

            </Route> */}


            <Route element={<RequireAuth />}>
              <Route path='/profile' element={<Profile />} />
            </Route>

            <Route path='*' element={<NotFound />} />

          </Routes>



          <Footer />
        </NavBar>



      </div>


      <Toaster
        position="top-center"
        reverseOrder={false}
      />



    </div>
  );
}

export default App;









// https://preview.themeforest.net/item/consto-industrial-construction-company-html-template/full_screen_preview/27412976?_ga=2.256320073.358476046.1661616548-28734514.1661616548













