import React, { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query'
import SinglePhone from './SinglePhone';
import { Fade, Roll, Zoom } from 'react-reveal';
import axios, { Axios } from 'axios';
import toast from 'react-hot-toast';
import Loading from '../Loading/Loading';

const Phones = ({ callFrom }) => {

    const [totalPage, setTotalPage] = useState(0);
    const [totalPhoneInPage, setTotalPhoneInPage] = useState(6);
    const [currentPageNbr, setCurrentPageNbr] = useState(1);

    const [deleteProductId, setDeleteProductId] = useState(0);






    const [phoneId, setPhoneId] = useState(null);

    const [control, setControl] = useState(false);

    const newQuantityRef = useRef(0);


    // https://arcane-oasis-08420.herokuapp.com/
    // https://stoce-binder-backend-server.onrender.com/


    const { isLoading, error, data: phones, refetch } = useQuery(['repoData'], () =>
        fetch(`https://stoce-binder-backend-server.onrender.com/phones?currentPageNbr=${currentPageNbr}&totalPhoneInPage=${totalPhoneInPage}`).then(res =>
            res.json()
        )
    )



    useEffect(() => {

        // axios.get(`https://arcane-oasis-08420.herokuapp.com/phones?currentPageNbr=${currentPageNbr}&totalPhoneInPage=${totalPhoneInPage}`)
        //     .then(data => setPhones(data.data))

        refetch();

    }, [currentPageNbr, totalPhoneInPage])


    useEffect(() => {
        axios.get('https://arcane-oasis-08420.herokuapp.com/phones-count')
            .then(data => {

                // setTotalPhonesCount(data.data.PhonesCount);

                const totalPhonescount = data.data.phonesCount


                const newPageCount = Math.ceil(totalPhonescount / totalPhoneInPage);
                console.log(" newPageCount: ", newPageCount);
                setTotalPage(newPageCount);

            })
    }, [totalPhoneInPage])


    const handleProductDelete = async () => {

        console.log("id: ", deleteProductId);

        if (deleteProductId) {

            const res = await axios.delete(`https://stoce-binder-backend-server.onrender.com/phones/${deleteProductId}`)

            console.log("delete res: ", res);

            if (res.data.deletedCount > 0) {

                toast.success('Product delete successfully!')
                refetch();
                setDeleteProductId(null);

            }

        }



    }





    // update js start 






    const handleAddQuantity = () => {

        if (parseInt(newQuantityRef?.current?.value)) {

            const newQuantity = parseInt(newQuantityRef.current.value) + parseInt(phones[phoneId]?.quantity || 0);



            const updatedPhone = { quantity: newQuantity, soldItems: phones[phoneId].soldItems };

            fetch(`https://stoce-binder-backend-server.onrender.com/phones/${phones[phoneId]?._id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(updatedPhone)
            })
                .then(data => data.json())
                .then(res => {

                    if (res.acknowledged) {


                        setControl(!control);

                        toast.success("Quantity updated!");

                        refetch();

                        newQuantity.current.value = '';

                    }
                    else {
                        setControl(false);
                        toast.error("Something wrong!!!");
                    }
                })

        }



    }

    const handleDerived = () => {

        const soldItems = parseInt(newQuantityRef?.current?.value);
        if (!soldItems) return;

        if (phones[phoneId].quantity - soldItems >= 0) {

            const newQuantity = parseInt(phones[phoneId].quantity) - soldItems;
            const newSold = parseInt(phones[phoneId].soldItems || 0) + soldItems;

            const updatedPhone = { quantity: newQuantity, soldItems: newSold };

            fetch(`https://stoce-binder-backend-server.onrender.com/phones/${phones[phoneId]?._id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(updatedPhone)
            })
                .then(data => data.json())
                .then(res => {
                    if (res.acknowledged) {

                        setControl(!control);

                        toast.success("Delivered an Item!");
                        refetch();
                        newQuantity.current.value = '';
                    }
                    else {
                        toast.error("Something wrong!!!");
                    }
                })


        }
    }







    // update js end
    // console.log("phoneId: ", phoneId);

    if (isLoading) {
        return <Loading />;
    }

    if (error) {
        return <div className='flex justify-center items-center min-h-min'>
            <h1 className='text-red-500 font-bold text-xl'>{error.message}</h1>
        </div>
    }




    return (
        <>

            {
                callFrom === "home" ?



                    <div className={`${callFrom === 'home' ? 'mt-20' : ''} w-full overflow-hidden px-5 md:px-0`}>



                        <div className='flex items-center justify-center w-full'>
                            <hr className='w-1/12'></hr>
                            <Fade right>
                                <h1 className=' text-black text-2xl sm:text-6xl font-extrabold my-20 mx-2'>Available Phones</h1>
                                <hr className='w-1/12'></hr>
                            </Fade>
                        </div>

                        <div className='w-full max-w-[1300px] min-h-screen  mx-auto overflow-hidden '>

                            <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mx-auto items-center justify-center '>
                                {
                                    phones?.map((p, i) => <SinglePhone




                                        setDeleteProductId={setDeleteProductId}
                                        setPhoneId={setPhoneId}
                                        callFrom={callFrom}
                                        phone={p}
                                        key={i}




                                    />)
                                }
                            </div>

                        </div>


                    </div>





                    :





                    <div className='relative'>


                        <div className="overflow-x-auto w-full">
                            <table className="table w-full">

                                {/* <!-- head --> */}
                                <thead>
                                    <tr className='font-bold' >

                                        <th className=' w-8'>NO.</th>
                                        <th className=''>Phone</th>
                                        <th className=''>Name</th>
                                        <th className=''>Supplier</th>
                                        <th className=''>Quantity</th>
                                        <th className=''>Total sold</th>
                                        <th className=''>Unit Price</th>
                                        <th className=''>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        phones?.map((p, i) => <SinglePhone

                                            setDeleteProductId={setDeleteProductId}
                                            setPhoneId={setPhoneId}

                                            serial={i + 1}

                                            callFrom={callFrom}

                                            phone={p} key={i}


                                        />)
                                    }

                                </tbody>


                            </table>




                            {/* pagination  */}

                            <div className='flex justify-center items-center gap-5 mt-5 mb-10'>




                                <div class="btn-group ">


                                    {
                                        [...Array(totalPage).keys()].map(nbr =>
                                            <button
                                                onClick={() => setCurrentPageNbr(nbr + 1)}
                                                className={`btn btn-sm ${currentPageNbr === nbr + 1 ? "btn-active" : ""}`}

                                            >{nbr + 1}</button>


                                        )



                                    }


                                </div>

                                <select onChange={e => setTotalPhoneInPage(e.target.value)} className='border-2 bg-transparent btn-sm rounded-lg w-16 ' name="" id="">

                                    <option value="6" selected>6</option>
                                    <option value="10">10</option>
                                    <option value="20">20</option>
                                    <option value="35">35</option>
                                    <option value="50">50</option>

                                </select>
                            </div>












                        </div>
















                        {/* <!-- The button to open Delete modal --> */}

                        {/* <label htmlFor="itemDeleteModal" className="btn modal-button">open modal</label> */}

                        {/* <!-- Put this part before </body> tag --> */}
                        <input type="checkbox" id="itemDeleteModal" className="modal-toggle" />

                        <div className="modal">

                            <div className="modal-box flex flex-col gap-5 justify-center items-center  ">

                                <h1 className='text-xl text-red-600'>Are you sure?</h1>
                                <h1 className='text-sm text-gray-500'>Press 'YES' for delete, other wise 'NO'</h1>


                                <div className='flex items-center justify-evenly gap-5'>
                                    <label htmlFor="itemDeleteModal" className="btn btn-sm   right-2 top-2 bg-red-700 outline-none border-0 shadow-md shadow-black px-5">No</label>

                                    <label htmlFor="itemDeleteModal" onClick={handleProductDelete} className="btn btn-sm   right-2 top-2 bg-green-700 outline-none border-0 shadow-md shadow-black px-5">Yes</label>

                                </div>


                            </div>
                        </div>





















                        {/* item update  modal */}

                        {/* <label htmlFor="itemUpdateModal" className="btn modal-button">open modal</label> */}

                        {/* <!-- Put this part before </body> tag --> */}

                        <input type="checkbox" id="itemUpdateModal" className="modal-toggle" />


                        <div className="modal md:mt-0 mt-12 mx-3  lg:ml-52">

                            <div className="modal-box w-11/12 max-w-5xl relative">

                                <div className="modal-action m-0 p-0">
                                    <label htmlFor="itemUpdateModal" className="btn">X</label>
                                </div>

                                {/* update jsx start  */}





                                {
                                    phones && phoneId !== null ?






                                        <div className='grid grid-cols-1 md:grid-cols-2'>


                                            <div className='w-full h-full'>
                                                <Zoom left>
                                                    <img className='md:w-full pr-5 md:pr-16 md:h-96 w-52 h-40 mx-auto' src={phones[phoneId]?.image} alt="" />
                                                </Zoom>

                                            </div>


                                            <div className="info w-full flex justify-center items-center">

                                                <div className='flex flex-col'>

                                                    <div className='border-l-2 border-yellow-700 pl-3 mb-3'>



                                                        <Fade right>
                                                            <h1 className='text-xl md:text-2xl my-5 font-bold tracking-wide w-full text-yellow-700'>{phones[phoneId]?.name}</h1>
                                                        </Fade>
                                                        <h1 className='text-xl'>Price: <small className='text-3xl text-yellow-800 font-bold ml-2'>$ {phones[phoneId]?.price}</small></h1>

                                                        <h1 className='text-xl mb-3'>Supplier: {phones[phoneId]?.supplier}</h1>
                                                    </div>

                                                    <h1 className='text-gray-700 text-sm '>{phones[phoneId]?.description}</h1>


                                                    <div className='mt-5 mb-2 flex items-center justify-start'>

                                                        <div className='flex flex-col items-center gap-5 mr-5 '>

                                                            <div className='flex gap-4 items-center'>
                                                                <h1 className='text-md md:text-xl'>Total sold items : </h1>
                                                                <h1 className='text-md md:text-xl font-bold text-yellow-800'>{phones[phoneId]?.soldItems ? phones[phoneId].soldItems : "None sold"}</h1>
                                                            </div>



                                                        </div>
                                                    </div>

                                                    <div className=' flex items-center justify-start'>



                                                        <div className='flex flex-col items-center gap-5 mr-5 '>

                                                            <div className='flex gap-4 items-center'>
                                                                <h1 className='text-md md:text-xl'>Quantity: </h1>
                                                                <h1 className='text-2xl font-bold text-yellow-800'>{phones[phoneId]?.quantity ? phones[phoneId]?.quantity : "OUT OF STOCK"}</h1>
                                                            </div>

                                                            <label title="Per click will delivered 1 item" onClick={handleDerived} className='cursor-pointer active:bg-[#9da32d] active:font-bold px-8 py-2 tracking-wider bg-[#effd01] text-black ' >Delivered</label>


                                                        </div>


                                                        <div className='flex flex-col items-center gap-5'>

                                                            <input ref={newQuantityRef} className='bg-[#2c2c2ad3] w-[150px] rounded-md border-4 border-[#4b4b480f] text-white tex-md md:text-lg pl-2' placeholder='Add Quantity' type="number" name="quantity" id="" />

                                                            <button onClick={handleAddQuantity} className='cursor-pointer active:bg-[#9da32d] active:font-bold px-8 py-2 tracking-wider bg-[#effd01] text-black ' >Add quantity</button>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>







                                        : ""
                                }






                                {/* update jsx end  */}









                            </div>


                        </div>






























                    </div>








            }



        </>
    );
};

export default Phones;