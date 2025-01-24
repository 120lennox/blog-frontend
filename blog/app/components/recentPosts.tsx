import Image from "next/image"


export default function RecentPost(){
    return <div className="">
        <div>
            <div className="text-[24px] font-semibold my-[32px]">Recent blog posts</div>
            <div className="flex flex-row gap-4">
                <div>
                    <div>
                        <Image
                            src="/Image_svg.svg"
                            alt="test"
                            width={592}
                            height={228}
                        />
                    </div>
                    <div>Sunday, 1 Jan 2025</div>
                    <div>Ux review presentation</div>
                    <div>How do you create compelling presentations that wow your colleagues and impress your managers?</div>
                    <div>
                        <div>Design</div>
                        <div>Research</div>
                        <div>Presentation</div>
                    </div>
                </div>
                <div>
                    <div>
                        <div>
                            <Image 
                                src="/card_svg.svg"
                                alt="test 2"
                                width={320}
                                height={200}
                            />
                        </div>
                        <div>
                            <div>Sunday, 1 Jan 2025</div>
                            <div>Migrating to Linear 101</div>
                            <div>Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get...</div>
                            <div>
                                <div>Design</div>
                                <div>Research</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}