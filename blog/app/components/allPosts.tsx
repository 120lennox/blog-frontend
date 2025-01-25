import Image from "next/image";
import { Arrow } from "./navigation/icons";

export default function AllPosts(){
    return <div>
        <div>
            <div>All blog posts</div>
            <div>
                <div>
                    <div>
                        <Image
                            src="/image3.svg"
                            alt="image 3"
                            width={382}
                            height={240}
                        />
                    </div>
                    <div>
                        <div>Sunday, 1 Jan 2025</div>
                        <div>
                            <div>Bill Walsh leadership lessons</div>
                            <div>{Arrow.icon}</div>
                        </div>
                        <div>
                            Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?
                        </div>
                        <div>
                            <div>Leadership</div>
                            <div>Management</div>
                            <div>Presentation</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}