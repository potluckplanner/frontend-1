import React from 'react';
import MainEvent from './MainEvent';
import Data from './Data'

export const EventList = () => {

    return (
        <>
        <MainEvent name={Data[1].name} key={Data[1].id} date={Data[1].date} address={Data[1].address} timestart={Data[1].timestart} timeend={Data[1].timeend} description={Data[1].description} />
        </>

    )
}