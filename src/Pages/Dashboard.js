import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { RiScreenshot2Line } from 'react-icons/ri'
import { RiProductHuntLine } from 'react-icons/ri'
import { MdAddToPhotos, MdOutlineUpdate } from 'react-icons/md'
import { FaUsers } from 'react-icons/fa'
import { dashboardList } from '../Routes/dashboardRoutes';
import { useAdmin } from '../hooks/useAdmin';
import auth from '../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';


const Dashboard = () => {

    const [user, loading, error] = useAuthState(auth);

    const [admin] = useAdmin(user)


    const location = useLocation();

    const locArray = location.pathname.split('/');
    const itemPath = locArray[locArray.length - 1];


    // console.log(itemPath);




    return (
        <div className="drawer drawer-mobile h-auto">

            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

            <div className="drawer-content flex flex-col min-h-screen">

                {/* <!-- Page content here --> */}



                <Outlet />



            </div>


            <div className="drawer-side">


                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>


                {/* {dashboardList} */}


                <ul className="menu  overflow-y-auto w-60 setBgImgDashboardSide  text-white gap-5 ">




                    <header className='select-none'>

                        <div className='flex flex-row items-center pl-4 gap-2  border-b-[1px] pb-3 border-gray-500 text-[#effd01] '>

                            <span className='flex p-0'><RiScreenshot2Line className=' m-0' size={30} /></span>

                            <h1 className=' text-lg  tracking-wide uppercase'>Dashboard</h1>
                        </div>


                    </header>



                    {
                        dashboardList.map(({ name, path, icon, itemRoute }, index) =>

                            <>

                                {
                                    name === 'Users' ? <>


                                        {
                                            admin === 'supperAdmin' ?

                                                < li key={index} className={`relative headerListParent active:txt-bold ${itemPath === itemRoute ? 'border-l-4 border-[#dffd01] border-b-0 shadow-md shadow-[#effd01] ' : ''}`}>

                                                    <Link to={path} className='z-10 w-full h-full'>

                                                        {icon}
                                                        {name}

                                                    </Link>

                                                    <p className='bg-[#effd01] w-0 h-full absolute  headerListChild transition-all duration-500 ' ></p>


                                                </li>


                                                : ''
                                        }


                                    </>



                                        :



                                        <li key={index} className={`relative headerListParent active:txt-bold ${itemPath === itemRoute ? 'border-l-4 border-[#dffd01] border-b-0 shadow-md shadow-[#effd01] ' : ''}`}>

                                            <Link to={path} className='z-10 w-full h-full'>

                                                {icon}
                                                {name}

                                            </Link>

                                            <p className='bg-[#effd01] w-0 h-full absolute  headerListChild transition-all duration-500 ' ></p>


                                        </li>
                                }


                            </>


                        )
                    }





                </ul>

            </div>


        </div >
    );
};

export default Dashboard;