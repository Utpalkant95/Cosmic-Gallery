import React, { useState } from 'react';
import data from "../../data.json";
import logo from "../../Assests/img/logo.avif";
import LikeButton from '../LikeButton';

const Header = () => {
    const [filter, setFilter] = useState('');

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    };

    const filteredData = data.filter((item) => {
        const itemName = item.name.toLowerCase();
        const itemCategory = item.category.toLowerCase();
        const filterText = filter.toLowerCase();

        return (
            itemName.includes(filterText) ||
            itemCategory.includes(filterText)
        );
    });

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '../../data.json'; 
        link.download = 'data.json';
    
        link.click();
      };

    return (
        <div>
            <header className='bg-[#1F2229] w-full px-16 flex items-center justify-between py-4 sticky top-0 z-50 max-[620px]:py-2 max-[620px]:px-8 max-[388px]:py-1 max-[388px]:px-4'>
                <div className='w-[50px] h-[50px] rounded-full bg-black overflow-hidden'>
                    <img src={logo} alt="logo" />
                </div>
                <div>
                    <input type="text" placeholder='Search...' className='w-96 py-1 px-2 rounded-full focus:ring-0 border-none outline-none max-[620px]:w-56' value={filter} onChange={handleFilterChange} />
                </div>
                <div className='flex items-center gap-x-8 cursor-pointer text-lg'>
                    <span className='text-[#9AA1B2]' onClick={handleDownload}>Data</span>
                </div>
            </header>
            <div class="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-4 bg-[#1F2229] px-4 py-2 max-[640px]:gap-y-10">
                {
                    filteredData.map((item) => {
                        return (
                            <div className="bg-gray-200 relative cursor-default" title={item.name}>
                                <div className=''>
                                    <img src={item.image} alt={item.name} className='w-full'/>
                                </div>
                                <div className='absolute top-2 right-2 text-xl'>
                                    <LikeButton itemId={item.id}/>
                                </div>
                                <div>
                                    <h2 className='hidden max-[768px]:block text-xl font-semibold underline'>{item.name}</h2>
                                    <p className='text-base font-normal first-letter:text-5xl first-letter:font-semibold'>{item.description}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Header;
