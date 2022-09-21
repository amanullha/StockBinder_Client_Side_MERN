import { useEffect, useState } from 'react';
import { Fade } from 'react-reveal';
import { NavLink, Link, useLocation, Navigate, useNavigate } from 'react-router-dom';
import headerBG from '../../Assets/images/headerBG.jpg';
import '../../Assets/CssStyles/textFont.css'
import TextBanner from '../../Components/TextBanner';
import ImageBanner from '../../Components/ImageBanner';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth'
import Loading from '../../Loading/Loading';
import { signOut } from 'firebase/auth';
import { dashboardList } from '../../Routes/dashboardRoutes';
import { useAdmin } from '../../hooks/useAdmin';




const NavBar = ({ children }) => {

    // console.log("child: ", children);

    const [scrollY, setScrollY] = useState(0);
    const [slideChange, setSlideChange] = useState('none')

    const [user, loading, error] = useAuthState(auth);
    const [admin] = useAdmin(user)

    // console.log("user: ", user);

    const location = useLocation();
    const navigate = useNavigate();

    const locArray = location.pathname.split('/');
    const itemPath = locArray[locArray.length - 1];
    const isDashboardRoute = locArray.includes('dashboard');

    // console.log(location);

    function logit() {
        setScrollY(window.pageYOffset);
    }

    useEffect(() => {

        function watchScroll() {
            window.addEventListener("scroll", logit);


        }
        watchScroll();
        // Remove listener (like componentWillUnmount)
        return () => {
            window.removeEventListener("scroll", logit);
        };



    }, []);


    const headerList = [
        {
            name: 'Home',
            to: '/home'
        },
        {
            name: 'Dashboard',
            to: '/dashboard'
        },
        {
            name: 'About',
            to: '/about'
        },
        {
            name: 'Contact',
            to: '/contact'
        }
    ]

    const aosList = ['fade-up', 'fade-down', 'fade-fight', 'fade-left', 'fade-up-right', 'fade-up-left', 'fade-up-right', 'fade-down-left', 'fade-down-right', 'fade-zoom-in', 'flip-left', 'flip-right']



    const navStyle = ({ isActive }) => ({


        background: isActive ? 'none' : '',
        borderBottom: isActive ? 'solid 1px #feed01' : '',
        fontWeight: isActive ? 'bold' : '',

    })


    const goToSignPage = () => {
        navigate('/signup')
    }

    const handleLogOut = () => {

        signOut(auth);
        localStorage.removeItem('accessToken');
    }

    const routeList =
        <>


            <li className='hover-underline-animation'> <NavLink style={navStyle} to='/home'>Home</NavLink> </li>


            {
                user ?

                    <>
                        {
                            isDashboardRoute ?

                                <>
                                    <li className=''>

                                        <NavLink style={navStyle} to='/dashboard'>Dashboard</NavLink>

                                        <ui className='flex flex-col items-start w-full lg:hidden bg-transparent'>
                                            {
                                                dashboardList.map(({ name, path, icon, itemRoute }, index) =>

                                                    <>
                                                        {
                                                            name === 'Users' ?
                                                                <>
                                                                    {
                                                                        admin === 'supperAdmin' ?

                                                                            <li key={index} className={`relative headerListParent active:txt-bold $ w-full`}>

                                                                                <Link to={path} className='z-10 w-full h-full'>

                                                                                    <span className={`${itemPath === itemRoute ? 'text-[#effd01]' : ''}`}>{icon}</span>
                                                                                    {name}

                                                                                </Link>

                                                                                <p className='bg-[#effd01] w-0 h-full absolute  headerListChild transition-all duration-500 ' ></p>


                                                                            </li>



                                                                            : ""
                                                                    }




                                                                </>


                                                                :

                                                                <li key={index} className={`relative headerListParent active:txt-bold $ w-full`}>

                                                                    <Link to={path} className='z-10 w-full h-full'>

                                                                        <span className={`${itemPath === itemRoute ? 'text-[#effd01]' : ''}`}>{icon}</span>
                                                                        {name}

                                                                    </Link>

                                                                    <p className='bg-[#effd01] w-0 h-full absolute  headerListChild transition-all duration-500 ' ></p>


                                                                </li>

                                                        }


                                                    </>


                                                )
                                            }
                                        </ui>



                                    </li>


                                </>

                                :

                                <>
                                    <li className='hover-underline-animation'> <NavLink style={navStyle} to='/dashboard'>Dashboard</NavLink>
                                    </li>

                                </>
                        }



                    </>

                    : ''
            }

            <li className='hover-underline-animation'> <NavLink style={navStyle} to='/about'>About</NavLink> </li>

            <li className='hover-underline-animation'> <NavLink style={navStyle} to='/contact'>Contacts</NavLink> </li>



            {
                user ? '' :
                    <>
                        <li className='hover-underline-animation'> <NavLink style={navStyle} to='/login'>Login</NavLink> </li>

                        <li className='text-center bg-[#effd01] text-black px-10 py-3 ml-3 cursor-pointer tracking-wider'> SignUp</li>
                    </>


            }

        </>



    const sideList =

        <div className="navbar-end flex gap-1 items-center justify-center ml-3">


            <button className="btn btn-ghost btn-circle text-yellow-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </button>




            <div className="flex-none lg:hidden">
                <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost text-[#feed01] ">
                    <div className='flex flex-col ' >
                        <span className='hover:w-5 w-8 spancls text-transparent'></span>
                        <span className='hover:w-8 w-5 my-[6px] spancls text-transparent'></span>
                        <span className='hover:w-5 w-8 spancls text-transparent'></span>
                    </div>
                </label>
            </div>


            {
                user ?

                    <div className="dropdown dropdown-end ">
                        <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                {
                                    user.photoURL ?
                                        <img src={user.photoURL} />

                                        :

                                        <img src="https://placeimg.com/80/80/people" />
                                }
                            </div>
                        </label>

                        <ul tabIndex="0" className={`mt-3 p-2 shadow menu menu-compact dropdown-content  rounded-box w-52  bg-[#232222] text-white`}>
                            <li className='hover-underline-animation active:text-yellow-400'>
                                <Link to='/profile' className="justify-between">

                                    Profile
                                    <span className="badge">{user.displayName}</span>
                                </Link>
                                <a href="http://"></a>
                            </li>
                            <li className='hover-underline-animation active:text-yellow-400'><a>Settings</a></li>
                            <li onClick={handleLogOut} className='mt-2'><a className='btn bg-[#feed01] text-black hover:text-white active:text-yellow-400 '>Logout</a></li>
                        </ul>
                    </div>



                    : ''
            }


        </div>


    if (loading) return <Loading />




    return (
        <div className=''>



            <div className={`drawer bg-[url('')]   `} >

                <img src={headerBG} alt="" />

                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />


                <div className="drawer-content flex flex-col">



                    {/* <!-- Navbar --> */}

                    <div className="w-full bg-base-300 setBgImg  ">


                        <div




                            className={` ${scrollY > 600 ? " bg-black ease-in  shadow-lg" : ''} z-50 navbar  w-full fixed top-0 hero transition-all duration-700 bg-black`}>




                            <div className={`z-50 navbar flex justify-between hero-content mx-auto `}>

                                <div className=" px-2 mx-2 ">
                                    <Link to="">

                                        <img className=' h-12' src="https://i.ibb.co/YDrYGr7/Artboard-1.png" alt="" />
                                        {/* <img className='sm:w-52  w-24 h-12' src="logo.png" alt="" /> */}
                                        
                                        </Link>
                                </div>





                                <div className="navbar-center flex-none hidden lg:block ">
                                    <ul className="menu menu-horizontal p-0 montFont text-white">
                                        {routeList}
                                    </ul>

                                </div>

                                <div className=''>
                                    {
                                        sideList
                                    }
                                </div>
                            </div>





                        </div>

                        {
                            (location.pathname === '/home' || location.pathname === '/') ?

                                <div className='min-h-[60vh] mt-32 w-full h-full flex flex-col md:flex-row  z-20 '>

                                    <TextBanner slideChange={slideChange} setSlideChange={setSlideChange} />

                                    <ImageBanner slideChange={slideChange} setSlideChange={setSlideChange} />

                                </div>

                                : ''
                        }








                    </div>



                    <div className='mt-20'>
                        {/* <!-- Page content here --> */}
                        {
                            children
                        }
                    </div>


                </div>


                <div className="drawer-side ">

                    <label htmlFor="my-drawer-3" className="drawer-overlay"></label>



                    <ul className="menu p-4 overflow-y-auto w-80 setSideBG text-white">


                        <Link to="/" className="flex items-center">
                            <img className='h-20 w-24' src="phoneLogo.png" alt="" srcSet="" />

                            <h1 className='text-[#feed01] font-bold tracking-wider text-2xl montFont'>StockBinder</h1>

                        </Link>

                        <div className="holder opacity-50 mb-5">
                            <div className="tinyLine tinyLine1"></div>
                            <div className="tinyLine tinyLine2"></div>
                        </div>

                        {
                            routeList
                        }

                    </ul>

                </div>
            </div>



        </div >
    );
};

export default NavBar;