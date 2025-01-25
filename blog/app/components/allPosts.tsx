import Image from "next/image";
import { Arrow } from "./navigation/icons";

export default function AllPosts(){
    return <div className="my-10">
        <div>
            <div className="font-semibold text-[24px]">All blog posts</div>
            <div className="my-10 w-[384]">
                <div className="flex flex-col space-y-5">
                    <div>
                        <Image
                            src="/image3.svg"
                            alt="image 3"
                            width={382}
                            height={240}
                        />
                    </div>
                    <div className="flex flex-col space-y-2">
                        <div className="text-[#6941C6] font-semibold text-[14px]">Sunday, 1 Jan 2025</div>
                        <div className="flex flex-row justify-between items-center">
                            <div className="font-semibold text-[24]">Bill Walsh leadership lessons</div>
                            <div>{Arrow.icon}</div>
                        </div>
                        <div className="font-medium text-[16] ">
                            Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?
                        </div>
                        <div className="flex flex-row space-x-2">
                            <div className="bg-white text-[#6941C6] rounded-full px-2 py-1">Leadership</div>
                            <div className="bg-white text-[#6941C6] rounded-full px-2 py-1">Management</div>
                            <div className="bg-white text-[#6941C6] rounded-full px-2 py-1">Presentation</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}