import React from 'react';
export function PastTransactions({recipient,email,amount,time}) {
    return (
      <li className="grid grid-cols-2 gap-2 mt-4 ">
        <div className="flex flex-row gap-1">
          <div className="w-[56px] h-[56px] rounded-full bg-gradient-to-br from-indigo-900 to-rose-500"></div>
          <blockquote className="flex flex-col gap-1 justify-center">
            <span>{recipient}</span>
            <span className="text-gray-500 text-sm">{email}</span>
          </blockquote>
        </div>

        <div className='flex flex-row justify-between'>
          <span className="font-semibold">N{amount}</span>
          <span className="text-gray-500"> {time}ago</span>
        </div>
      </li>
    );
}

