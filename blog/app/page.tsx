import RecentPost from "./components/recentPosts";

export default function Home() {
  return <div>
        <div className="fixed my-[50px]">
          <div className="w-full h-[295] overflow-none border border-r-[#090D1F] border-l-[#090D1F] flex items-center">
            <div className=" text-[219.9px] font-bold">THE BLOG</div>
          </div>
        </div>
        <RecentPost />
  </div>
}
