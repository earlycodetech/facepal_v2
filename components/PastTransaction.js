export function PastTransaction ({recipient,email,amount,time}) {
    return (
        <li className="flex flex-row justify-between mt-4">
        <div className="flex flex-row gap-1">
            <div className="w-[50px] h-[50px] rounded-full bg-gradient- to-b from-ingigo-900"></div>
            <blockquote>
                <span>{recipient}</span>
                <span>{email}</span>
            </blockquote>
        </div>

        <div className="flex flex-row justify-between">
            <span>₦56,00</span>
            <span>13 hours ago</span>
       </div>
        </li>
    )
}
               
             
