import React from 'react';
import { Link } from 'react-router-dom';
import '../Assets/CssStyles/textFont.css'
import { RiDeleteBin6Fill } from 'react-icons/ri'
import { HiPencilAlt } from 'react-icons/hi'
import { Fade } from 'react-reveal';

const SinglePhone = (props) => {


    // console.log("props: ", props);

    const { phone, callFrom, serial, setDeleteProductId, setPhoneId } = props;

    const { _id, name, description, image, price, quantity, supplier, soldItems } = phone;




    return (


        <>

            {
                callFrom === 'home' ?
                    <Fade bottom>
                        <div



                            className="card w-64 md:w-80 glass rounded-none pt-5 relative parentPhoneCart overflow-hidden my-5  mx-auto">



                            <div className=' h-8 w-16 bg-[#000000] absolute rotate-45 -right-5 -top-4 z-10'></div>



                            <div className=' h-8 w-16 bg-[#010101] absolute rotate-45 -left-5 -bottom-4 z-10'></div>

                            <figure><img className='h-52 md:h-80  md:w-11/12 rounded-lg' src={image} alt="car!" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{name}</h2>
                                <p>{description?.length <= 20 ? description : description?.slice(0, 20) + '...'}</p>
                                <p>Price: <span className="text-2xl font-bold">{price} </span></p>

                            </div>

                            <div className='  w-full bg-[#00000031] absolute bottom-0 flex justify-center items-center childPhoneCart transition-all duration-500'>

                                <Link to="/dashboard" className='childPhoneCartButton bg-[#effd01] px-10 py-4 text-lg hidden'>Update</Link>

                            </div>


                        </div>
                    </Fade>

                    :

                    <tr className=''>
                        <td className='w-8'>{serial}</td>
                        {/* <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th> */}
                        <td>
                            <div className='h-16 w-8 '>
                                <img className='rounded-md' style={{ width: '100%', height: '100%' }} src={image} alt="" srcSet="" />
                            </div>
                        </td>

                        <td>
                            {name}
                        </td>
                        <td>
                            {supplier}
                        </td>
                        <td>{quantity}</td>
                        <td>{soldItems}</td>
                        <td>{price}</td>

                        <td className=''>

                            <div className=' h-full w-full flex gap-3'>
                                {/* <label htmlFor="itemUpdateModal" className="btn modal-button">open modal</label> */}

                                <label onClick={() => setPhoneId(serial - 1)} htmlFor="itemUpdateModal" className='h-full w-10 flex justify-center items-center  text-teal-700 hover:text-teal-900 hover:bg-teal-200 hover:rounded-full py-1 cursor-pointer'><HiPencilAlt size={20} /></label>

                                <label onClick={() => setDeleteProductId(_id)} htmlFor="itemDeleteModal" className='h-full w-10 flex justify-center items-center text-red-600 hover:text-red-800 hover:bg-red-200 hover:rounded-full py-1 cursor-pointer'><RiDeleteBin6Fill size={20} /></label>




                            </div>


                        </td>

                    </tr>
            }


        </>


    );
};

export default SinglePhone;