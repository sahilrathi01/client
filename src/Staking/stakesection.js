import SYSLOneWeek from "./Stake7DAys";
import { BrowserRouter, BrowserRouter as Router, Link } from 'react-router-dom';
import { createWalletClient, custom } from "viem";
import { syscoin } from "viem/chains";
import { useEffect, useState } from "react";
import COnnect from "../components/connectWallet";
import Stake7Dyas from "./Stake7DAys";
import Stake14Dyas from "./Stake14Days";
import Stake30Dyas from "./Stake30SDays";
import Stake60Dyas from "./Stake60Days";
import StakingSYSLPSYS from "./PSYS";

const walletClient = createWalletClient({
    chain: syscoin,
    transport: custom(window.ethereum)
});



export default function StakingSection() {

    const [address, setAddress] = useState('');

    return (
        <div>



            <div className="vendor">
                <h4>Simple Menus</h4>

                
                <Link className='link' to="/">
                        <button className='button'>
                            Home
                        </button>
                    </Link>
                    <Link className='link' to="/stake">
                        <button className='button'>
                            Stake
                        </button>
                    </Link>
                    <Link className='link' to="/NFT">
                        <button className='button'>
                            NFT
                        </button>
                    </Link>
            </div>

            <br></br>

            <div>
                <h3> V1 & V2 STAKING SECTION</h3>
            </div>

            <div className="vendor">
                <StakingSYSLPSYS />

            </div>

            <br></br>

            <div className="vendor">

                <Stake7Dyas />
            </div>

            <br></br>

            <div className="vendor">

                <Stake14Dyas />
            </div>

            <br></br>

            <div className="vendor">

                <Stake30Dyas />
            </div>
            <br></br>

            <div className="vendor">

                <Stake60Dyas />
            </div>

        </div >

    )
}