import { Link } from "react-router-dom";

export const Header = (props) => {
    const {clickButton} = props;

    return(
        <>
            <header className="flex justify-between bg-sky-200 p-8">
                <Link to="/"><h1 className="text-3xl text-white">掲示板</h1></Link>
                <button onClick={clickButton} className="text-white">スレッドをたてる</button> 
            </header>
        </>
    )  
}