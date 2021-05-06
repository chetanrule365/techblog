import { BookmarkBorderOutlined, Search } from "@material-ui/icons";
import React from "react";

function Header() {
    return (
        <div className='header'>
            <div className='left'>
                <img src='' className='logo' />
                <p className='greet'>
                    <em>Good Morning!</em>&nbsp;Chetan
                </p>
            </div>
            <div className='right'>
                <Search className='icon' />
                <BookmarkBorderOutlined className='icon' />
                <img
                    src='/chetan.jpg'
                    className='profile'
                    onClick={() => {
                        let ele = document.getElementById("menu");
                        console.log(ele);
                        ele.classList.toggle("open");
                    }}
                />
            </div>
        </div>
    );
}

export default Header;
