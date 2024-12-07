import React from 'react'
import "./widget.scss"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import CountUp from 'react-countup';


const Widget = ({ type }) => {

    const amount = 100;
    const diff = 200;
    let data;
    switch (type) {
        case "user":
            data = {
                title: "user",
                isMoney: false,
                link: "See all link",
                icon: <PersonOutlineIcon className='icon'
                    style={{
                        color: "crimson",
                        backgroundColor: "rgba(255, 0, 0, 0.2)",
                    }}
                />,
            };
            break;
        case "order":
            data = {
                title: "ORDER",
                isMoney: false,
                link: "View all Order",
                icon: <AddShoppingCartIcon className='icon'
                    style={{
                        backgroundColor: "rgba(218, 165, 32, 0.2)",
                        color: "goldenrod",
                    }} />,
            };
            break;
        case "earning":
            data = {
                title: "EARNING",
                isMoney: true,
                link: "View net earning",
                icon: <CurrencyExchangeIcon className='icon'
                    style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }} />,
            };
            break;
        case "balance":
            data = {
                title: "BALANCE",
                isMoney: true,
                link: "See details",
                icon: <AccountBalanceWalletIcon className='icon'
                    style={{
                        backgroundColor: "rgba(128, 0, 128, 0.2)",
                        color: "purple",
                    }} />,
            };
            break;
        default: break;
    }
    return (
        <div className='widget'>
            <CountUp  end={100} duration={5}>
                {({ countUpRef }) => (
                    <div>
                        <div className="left">
                            <span className="title">{data.title}</span>
                            <span ref={countUpRef} className="counter">
                                {data.isMoney && "$"} {amount}
                            </span>
                            <span className="link">{data.link}</span>
                        </div>
                    </div>
                )}
            </CountUp>
            <div className="right">
                <div className="percentage positive">
                    <KeyboardArrowUpIcon />
                    {diff}%
                </div>
                {data.icon}
            </div>

        </div>
    )
}

export default Widget
