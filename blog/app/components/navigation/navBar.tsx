import Link from "next/link"

const moon = {
    src: "/images/moon.png",
    alt: "Moon",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.9794 22.241L11.9794 22.2409L11.9723 22.2406C6.62039 22.0017 2.1504 17.686 1.77874 12.4447L1.7787 12.4442C1.45434 7.94125 4.0584 3.72964 8.2629 1.9614C8.81552 1.73167 9.19105 1.72373 9.43069 1.77165C9.67011 1.81954 9.81777 1.93194 9.90029 2.01741L9.90024 2.01747L9.90644 2.02367C9.9912 2.10843 10.0995 2.25509 10.1442 2.48454C10.1888 2.71296 10.1793 3.06939 9.95183 3.58991L9.95132 3.59107C9.46362 4.71491 9.21955 5.91384 9.23 7.1434C9.2518 11.8463 13.1487 15.8185 17.8985 16.0097C18.5887 16.0414 19.2653 15.9881 19.9173 15.8724L19.9194 15.872C20.5024 15.7661 20.8652 15.8384 21.0845 15.9351C21.3035 16.0317 21.4219 16.1714 21.4846 16.2729C21.5494 16.3777 21.6233 16.5483 21.6141 16.7885C21.6049 17.0286 21.511 17.3863 21.1582 17.8625L21.1563 17.865C19.1319 20.6343 15.9129 22.2501 12.46 22.2501C12.2876 22.2501 12.1322 22.25 11.9794 22.241ZM2.27117 12.4044L2.27126 12.4057C2.62973 17.4243 6.89951 21.5182 11.987 21.7396C15.4443 21.9073 18.7243 20.3307 20.7433 17.5757L20.7433 17.5757L20.7469 17.5707C20.9192 17.3294 21.0111 17.1411 21.0582 17.0157L21.2837 16.4141L20.6452 16.3432C20.514 16.3286 20.3032 16.3182 19.9974 16.3787C19.3054 16.5016 18.5833 16.549 17.87 16.5205L17.8699 16.5205C12.8528 16.321 8.7492 12.1062 8.71999 7.15865C8.72018 5.84669 8.97649 4.58694 9.4965 3.4041C9.62392 3.12281 9.65273 2.91939 9.66613 2.81213L9.73639 2.25011H9.16999C9.00017 2.25011 8.77391 2.2891 8.46584 2.41935C4.46093 4.10148 1.97636 8.1191 2.27117 12.4044Z" stroke="#090D1F"/>
    </svg>
}

export default function NavBar(){
    return <div className="">
        <div className="flex flex-row justify-between items-center duration-500 ease-in-out">
            <div className="font-semibold">Your Name</div>
            <div className="flex flex-row justify-between items-center space-x-[14px] transition-all duration-1000 ease-in-out">
                <Link className="hover:font-semibold hover:underline hover:underline-offset-8 transition-all duration-300" href='/'>Blog</Link>
                <Link className="hover:font-semibold hover:underline hover:underline-offset-8 " href='/'>Projects</Link>
                <Link className="hover:font-semibold hover:underline hover:underline-offset-8" href='/'>About</Link>
                <Link className="hover:font-semibold hover:underline hover:underline-offset-8" href='/'>Newsletter</Link>
                <div className="bg-white py-4 px-2 h-[40] w-[90] flex items-center justify-center rounded-full">
                    <div className="flex gap-4">
                        <div className="rounded-full w-6 h-6 bg-black"></div>
                        {moon.icon}
                    </div>
                   
                </div>
            </div>
        </div>
    </div>
}