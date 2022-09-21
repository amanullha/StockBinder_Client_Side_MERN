import React from 'react';
import AdvancedFeatures from '../Components/AdvancedFeatures';
import CountDown from '../Components/CountDown';
import ImprovePerformance from '../Components/ImprovePerformance';
import InventoryUsesPrice from '../Components/InventoryUsesPrice';
import Phones from '../Components/Phones';
import Spreadsheets from '../Components/SpreadSheets';

const HomePage = () => {
    return (
        <div>
            {/* <h1 className='min-h-screen text-3xl text-yellow-800 font-bold'>Home </h1> */}

            <Phones callFrom='home' />
            <InventoryUsesPrice />
            <CountDown />
            <Spreadsheets />
            <AdvancedFeatures />
            <ImprovePerformance />


        </div>
    );
};

export default HomePage;