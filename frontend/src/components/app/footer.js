import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Footer = () => (
    <footer className="main-footer">
        <button className="github">
            <FontAwesomeIcon icon={["fab", "github"]} />
            <a href="https://github.com/Chris6135/PoliSee" >github</a>
        </button>

        <button>
           <a href="https://www.vote.org/register-to-vote/">REGISTER TO VOTE </a>
        </button>
        <button>
            ABOUT US
        </button>
    </footer>
)

export default Footer;
