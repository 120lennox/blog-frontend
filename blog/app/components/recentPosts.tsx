import Image from "next/image"
import { Arrow } from "./navigation/icons"


export default function RecentPost(){
    return <div className="">
        <div className="flex flex-col space-y-4">
            <div className="text-[24px] font-semibold my-[32px]">Recent blog posts</div>
            <div className="flex flex-row gap-8 items-center">
                <div className="min-h-[432] w-1/2 flex flex-col space-y-4">
                    <div>
                        <Image
                            src="/Image_svg.svg"
                            alt="test"
                            width={592}
                            height={228}
                        />
                    </div>
                    <div className="text-[#6941C6] font-semibold text-[14px]">Sunday, 1 Jan 2025</div>
                    <div className="font-semibold text-[24px]">Ux review presentation</div>
                    <div className="font-medium text-[16px]">How do you create compelling presentations that wow your colleagues and impress your managers?</div>
                    <div className="flex flex-row space-x-2">
                        <div className="bg-white text-[#6941C6] rounded-full px-2 py-1 font-medium ">Design</div>
                        <div className="bg-white text-[#3538CD] rounded-full px-2 py-1 font-medium ">Research</div>
                        <div className="bg-white text-[#C11574] rounded-full px-2 py-1 font-medium ">Presentation</div>
                    </div>
                </div>
                <div className="min-h-[432] w-1/2 flex flex-col space-y-8 items-center">
                    <div className="flex flex-row space-x-4">
                        <div className="w-1/2">
                            <Image 
                                src="/card_svg.svg"
                                alt="test 2"
                                width={350}
                                height={2502}
                            />
                        </div>
                        <div className="flex flex-col space-y-3 w-1/2">
                            <div className="text-[#6941C6] font-semibold text-[14px]">Sunday, 1 Jan 2025</div>
                            <div className="font-semibold text-[18px]">Migrating to Linear 101</div>
                            <div className="font-medium text-[16]">Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get...</div>
                            <div className="flex flex-row space-x-2">
                                <div className="bg-white text-[#3538CD] rounded-full px-2 py-1 font-medium ">Design</div>
                                <div className="bg-white text-[#C11574] rounded-full px-2 py-1 font-medium ">Research</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row space-x-4 items-center">
                        <div className="w-1/2">
                            <Image 
                                src="/card_svg.svg"
                                alt="test 2"
                                width={350}
                                height={250}
                            />
                        </div>
                        <div className="flex flex-col space-y-1 w-1/2">
                            <div className="text-[#6941C6] font-semibold text-[14px]">Sunday, 1 Jan 2025</div>
                            <div className="font-semibold text-[18px]">Migrating to Linear 101</div>
                            <div className="font-medium text-[16]">Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get...</div>
                            <div className="flex flex-row space-x-2">
                                <div className="bg-white text-[#3538CD] rounded-full px-2 py-1 font-medium ">Design</div>
                                <div className="bg-white text-[#C11574] rounded-full px-2 py-1 font-medium ">Research</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-row space-x-6">
                <div className="w-1/2">
                    <Image
                        src="/Image2.svg"
                        alt="image 2"
                        width={592}
                        height={246}
                        
                    />
                </div>
                <div className="w-1/2">
                    <div className="text-[#6941C6] font-semibold text-[14px]">Sunday, 1 Jan 2025</div>
                    <div>
                        <div>Grid system for better Design User Interface</div>
                        <div>
                            {Arrow.icon}
                        </div>
                    </div>
                    <div>A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.</div>
                    <div>
                        <div>Design</div>
                        <div>Interface</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}