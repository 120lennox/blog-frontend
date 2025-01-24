import Image from "next/image"


export default function RecentPost(){
    return <div className="fixed">
        <div>
            <div>Recent blog posts</div>
            <div>
                <div>
                    <div>
                        <Image
                            src="/Image_svg.svg"
                            alt="test"
                            width={500}
                            height={400}
                        />
                    </div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    </div>
}