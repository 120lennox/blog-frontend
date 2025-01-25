import { leftArrow, rightArrow } from "../navigation/icons";

export default function Pagination(){
    return <div>
        <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row space-x-2 items-center">
                {leftArrow.icon}
                <div>Previous</div>
            </div>
            <div className="flex flex-row space-x-8 font-semibold">
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>...</div>
                <div>10</div>
            </div>
            <div className="flex items-center space-x-2">
                <div>Next</div>
                {rightArrow.icon}
            </div>
        </div>
    </div>
}