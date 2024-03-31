import { useContext } from "react";
import searchContext from "../constant";


function Header() {


    const { globalSearch, setGlobalSearch, setSearchAction, searchAction } = useContext(searchContext);


    const handleKeyDown = (event) => {
        if (event?.key === 'Enter') {
            setSearchAction(!searchAction);
        }
    };

    const cancelSearch =()=>{
        setGlobalSearch("");
        setSearchAction(!searchAction);
    }

    return (
        <>
            <div className="container">
                <header >
                    <div id="nav-bar">
                        <div id="nav-belt">
                            <div className="nav-left">
                                <div id="nav-logo">
                                    <img src="images/logo.png" alt="logo"></img>
                                </div>
                            </div>
                            <div className="nav-fill">
                                <div id="nav-search">
                                    <div id="nav-search-bar-form">
                                        <div className="nav-fill">
                                            <input type="text" className="custom-search"
                                                value={globalSearch}
                                                onChange={(e) => setGlobalSearch(e?.target?.value)}
                                                onKeyDown={(e) => handleKeyDown(e)}
                                                placeholder="What do you want to buy today?" />


                                            {
                                                globalSearch ? <>

                                                    <div className="search-margin cursor"
                                                    onClick={() => cancelSearch()}>
                                                        <img src="images/cancel-search.png" alt="logo"></img>
                                                    </div>

                                                </> : <>
                                                    <div className="search-margin cursor">
                                                        <img src="images/search-icon.png" alt="logo"></img>
                                                    </div>

                                                </>
                                            }

                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="nav-right">
                                <div id="nav-tools">
                                    <a href="/" className="bold arial-font grey-color">
                                        Store
                                    </a>
                                    <a href="/" className="bold arial-font grey-color">
                                        Account
                                    </a>
                                    <a className="bold arial-font grey-color" href="/">
                                        Whish List
                                    </a>
                                    <a className="bold blak-color arial-font" href="/">
                                        Basket
                                    </a>
                                    <a>
                                        <img src="images/basket.png" alt="logo" className="custom-image cursor"></img>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

            </div>

        </>
    )
}

export default Header;