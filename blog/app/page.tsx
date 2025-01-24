import RecentPost from "./components/recentPosts";

export default function Home() {
  return <div className="flex flex-col">
        <div className="my-[50px]">
          <div className="w-full h-[295] overflow-hidden border border-r-[#090D1F] border-l-[#090D1F] flex items-center">
            <div className="flex flex-row space-x-8 justify-center items-center">
              <div className="font-bold text-[219.8px]">THE</div>
              <div className="font-bold text-[219.8px]">BLOG</div>
            </div>
          </div>
        </div>
        <div>
          <RecentPost />
        </div>
  </div>
}
