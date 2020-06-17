import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => (
    <footer className="main-footer">
        <button className="github">
            <FontAwesomeIcon icon={["fab", "github"]} />
            <p>github</p>
        </button>

        <button>
            REGISTER TO VOTE
        </button>
        <button>
            ABOUT US
        </button>
    </footer>
)

export default Footer;