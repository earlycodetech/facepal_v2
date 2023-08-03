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

        <div>
        <li>
                    <div>
                        <div></div>
                        <blockquote>
                            <span>Mary</span>
                            <span>mary@interswitch.com</span>
                        </blockquote>
                    </div>
                   
        <div>
                 <span className="">₦ {amount}</span>
                 <span className="">{time} ago</span>
        </div>
    </li>

    )
}
              

