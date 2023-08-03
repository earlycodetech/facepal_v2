import React from "react"
import Image from "next/image"
export default function Feed() {
    return (
        <>
            <div class="h-screen flex justify-center bg-gradient-to-b from-indigo-500 via-sky-500 to-pink-500">
        <div class="w-full sm:w-[400px] h-full bg-white overflow-y-scroll">
             {/* profile holder  */}

            <header class="bg-indigo-300 p-3 ">
                <div class="flex flex-col gap-1 items-center">
                    <div class="bg-gradient-to-b from-indigo-500 via-sky-500 to-pink-500 p-1 rounded-full">
                        <img class="rounded-full" width={58} height={58} src="image/opeyemi.png" alt="profile photo" />
                    </div>
                    <small class="text-gray-700"><em>yaradua</em></small>
                    <p class="text-gray-700 font-bold">Umaru Musa Yar'adua </p>
                </div>

                <div>
                    <p class="text-sm mt-1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias eum voluptatum distinctio rem culpa
                         aperiam assumenda deserunt molestias,
                          doloremque iusto adipisicing elit. Reprehenderit est vitae alias officiis!</p>
                    <ul class="flex-row justify-between mt-1">
                        <li class="text-sm text-gray-700">🇹🇴 Abuja</li>
                        <li class="text-sm text-gray-700">pal since 2022</li>
                    </ul>
                </div>
            </header>

             {/* previous posts holder */}

            <div class="flex flex-col gap-2 p-3">

                {/* <div class="border border-gray-100 rounded-md p-3">    single post  */}
                    <ul class="flex justify-between">
                        <li class="flex flex-row gap-1 items-center">
                            <img class="rounded-full" src="image/opeyemi.png" width={40} height={40} alt="profile photo"/>                                
                            <small class="text-gray-700">yaradua</small>
                        </li>
                        <li>
                            <small class="text-gray-700">24 minutes ago</small>
                        </li>
                    </ul>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, tenetur. Natus provident id quae delectus ab. Asperiores, veritatis!</p>

                    <ul class="flex-row justify-between mt-2">
                        <li class="text-sm text-gray-500">
                            <span>5</span>
                            <span>comments</span>
                        </li>
                        <li class="text-sm text-gray-500">
                            <span>5</span>
                            <span>likes</span>
                        </li>
                        <li class="text-sm text-gray-500 ">
                            <span>5</span>
                            <span>hearts</span>
                        </li>
                        <li class="text-sm text-gray-500 ">
                            <span>5</span>
                            <span>wows</span>
                        </li>
                    </ul>
                {/* </div>     end of single post */}


                {/* <div class="border border-gray-100 rounded-md p-3">    single post  */}
                    <ul class="flex justify-between">
                        <li class="flex flex-row gap-1 items-center">
                            <img class="rounded-full" src="image/opeyemi.png" width={40} height={40} alt="profile photo"/>                                
                            <small class="text-gray-700">yaradua</small>
                        </li>
                        <li>
                            <small class="text-gray-700">24 minutes ago</small>
                        </li>
                    </ul>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, tenetur. Natus provident id quae delectus ab. Asperiores, veritatis!</p>

                    <ul class="flex-row justify-between mt-2">
                        <li class="text-sm text-gray-500">
                            <span>5</span>
                            <span>comments</span>
                        </li>
                        <li class="text-sm text-gray-500">
                            <span>5</span>
                            <span>likes</span>
                        </li>
                        <li class="text-sm text-gray-500">
                            <span>5</span>
                            <span>hearts</span>
                        </li>
                        <li class="text-sm text-gray-500">
                            <span>5</span>
                            <span>wows</span>
                        </li>
                    </ul>
                {/* </div>     end of single post */}


                {/* <div class="border border-gray-100 rounded-md p-3">    single post */}
                    <ul class="flex justify-between">
                        <li class="flex flex-row gap-1 items-center">
                            <img class="rounded-full" src="image/opeyemi.png" width={40} height={40} alt="profile photo"/>                                
                            <small class="text-gray-700">yaradua</small>
                        </li>
                        <li>
                            <small class="text-gray-700">24 minutes ago</small>
                        </li>
                    </ul>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, tenetur. Natus provident id quae delectus ab. Asperiores, veritatis!</p>

                    <ul class="flex-row justify-between mt-2">
                        <li class="text-sm text-gray-500">
                            <span>5</span>
                            <span>comments</span>
                        </li>
                        <li class="text-sm text-gray-500">
                            <span>5</span>
                            <span>likes</span>
                        </li>
                        <li class="text-sm text-gray-500">
                            <span>5</span>
                            <span>hearts</span>
                        </li>
                        <li class="text-sm text-gray-500">
                            <span>5</span>
                            <span>wows</span>
                        </li>
                    </ul>
                {/* </div>     end of single post */}


                {/* <div class="border border-gray-100 rounded-md p-3">    single post  */}
                    <ul class="flex justify-between">
                        <li class="flex flex-row gap-1 items-center">
                            <img class="rounded-full" src="image/opeyemi.png" width={40} height={40} alt="profile photo"/>                                
                            <small class="text-gray-700">yaradua</small>
                        </li>
                        <li>
                            <small class="text-gray-700">24 minutes ago</small>
                        </li>
                    </ul>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, tenetur. Natus provident id quae delectus ab. Asperiores, veritatis!</p>

                    <ul class="flex-row justify-between mt-2">
                        <li class="text-sm text-gray-500">
                            <span>5</span>
                            <span>comments</span>
                        </li>
                        <li class="text-sm text-gray-500">
                            <span>5</span>
                            <span>likes</span>
                        </li>
                        <li class="text-sm text-gray-500">
                            <span>5</span>
                            <span>hearts</span>
                        </li>
                        <li class="text-sm text-gray-500">
                            <span>5</span>
                            <span>wows</span>
                        </li>
                    </ul>
                {/* </div>     --end of single post-- */}

            </div>
        </div>
    </div>
        </>
    )
}

