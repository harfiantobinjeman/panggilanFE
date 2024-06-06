import React from 'react';
import axios from "axios";
import useSWR from "swr";

const panggilanList = () => {
  const fetcher = async()=>{
    const response = await axios.get('http://localhost:5000/panggilan');
    return response.data;
  };
  const {data} = useSWR('panggilan', fetcher);
  if(!data) return <h2>Loading....</h2>;
  return (
    <div className='flex flex-col mt-5'>
      <div className='w-full'>
        <div className='relative shadow rounded-lg mt-3'>
            <table className='w-full text-sm text-left text-gray-500'>
                <thead className='text-xs text-gray-700 uppercase bg-gray-100'>
                    <tr>
                        <th className='py-3 px-1 text-center'>No</th>
                        <th className='py-3 px-6'>Name</th>
                        <th className='py-3 px-6'>Status</th>
                        <th className='py-3 px-1'>Action</th>
                    </tr>
                </thead>
                <tbody>
                  {data.map((panggilans, index)=>(
                    <tr key={panggilans.id}>
                        <td>{index+1}</td>
                        <td>{panggilans.name}</td>
                        <td>{panggilans.status}</td>
                        <td></td>
                    </tr>
                  ))}
                    
                </tbody>
            </table>
        </div>
      </div>
    </div>
  )
}

export default panggilanList
