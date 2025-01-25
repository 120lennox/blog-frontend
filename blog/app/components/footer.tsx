import { github, twitter } from "./navigation/icons";

export default function Footer(){
    return <div className="my-4 text-slate-300">
        <div className="flex flex-row space-x-10 items-center">
            <div className="flex flex-row space-x-2"><span>&copy;</span><div>2025 nthano.systems</div></div>
            <div>Cooked in Malawi</div>
            <div className="flex flex-row space-x-1 items-center">
                {github.icon}
                <div>120lennox</div>
            </div>
            <div className="flex flex-row items-center space-x-1">
                {twitter.icon}
                <div>@mountain_lennox</div>
            </div>
        </div>
    </div>
}


