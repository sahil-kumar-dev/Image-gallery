
import React, { useState, useEffect } from 'react';
import Card from './Card';
import Buttons from './Buttons';
import './Cards.css';
export default function Cards() {
    const [imgUrls, setImgUrls] = useState([]);
    const [next, setnext] = useState(20);
    const [prev, setprev] = useState(1);

    function changeNext(e) {
        setnext(next + 20);
        setprev(prev + 20);
        window.scrollTo(0, 0);
    }
    function changePrev(e) {
        if (next > 20) {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            setnext(next - 20);
            setprev(prev - 20);
        }
    }

    const [isLoaded, setisLoaded] = useState(true)

    useEffect(() => {
        let tempArray = [];

        for (let i = prev; i <= next; i++) {
            fetch(`https://api.slingacademy.com/v1/sample-data/photos/${i}`)
                .then((response) => response.json())
                .then((response) => {
                    if (response.success) {
                        const imgUrl = response.photo;
                        tempArray.push(imgUrl);
                        if (tempArray.length === 20) {
                            setImgUrls(tempArray);
                        }
                        setisLoaded(false);
                    }
                });
        }
    }, [next, prev]);

    return (
        <>
            {isLoaded ? (
                <div className='loader'>
                    <h1 className='font-bold '>Loading...</h1>
                </div>
            ) : (
                <div className='grid lg:grid-cols-3 place-items-center gap-10 mt-5 xs:grid-cols-1 '>
                    {imgUrls.map((url, index) => {
                        return <Card key={index} {...url} />
                    })}
                </div>
            )
            }
            <div className=" flex justify-around py-7">
                <Buttons title='prev' func={changePrev} />
                <Buttons title='next' func={changeNext} />
            </div>
        </>
    );
}
