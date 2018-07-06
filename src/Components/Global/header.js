import React from 'react'
import { Link } from 'react-router-dom'

import '../../Css/header.css'

const Header = () => {
    let navClass = "navbar navbar-expand-md fixed-top scrolled"
    return (
        <nav className={navClass}>
            <div className="container">
                <Link className="navbar-brand" to="/">PBMC</Link>
                <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="icon-bar top-bar"></span>
                    <span className="icon-bar middle-bar"></span>
                    <span className="icon-bar bottom-bar"></span>
                    <span className="sr-only">Toggle navigation</span>
                </button>

                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                        <div className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="" role="button" aria-haspopup="true" aria-expanded="false"><i className="fas fa-users"></i> The Community</a>
                            <ul className="dropdown-menu dropdown-menu-right dropdown-danger">
                                <Link className="dropdown-item" to="/about">How it began</Link>
                                <Link className="dropdown-item" to="/members">Members</Link>
                            </ul>
                        </div>

                        <div className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="" role="button" aria-haspopup="true" aria-expanded="false"><i className="fas fa-gamepad"></i> Servers</a>
                            <ul className="dropdown-menu dropdown-menu-right dropdown-danger">
                                <Link className="dropdown-item" to="/server/survival">Survival</Link>
                                <Link className="dropdown-item" to="/server/creative">Creative</Link>
                                <Link className="dropdown-item" to="/server/skyblock">Sky Block</Link>
                                <Link className="dropdown-item" to="/server/modded">Modded</Link>
                            </ul>
                        </div>

                        <div className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="" role="button" aria-haspopup="true" aria-expanded="false"><i className="fa fa-map-marker"></i> Maps</a>
                            <ul className="dropdown-menu dropdown-menu-right dropdown-danger">
                                <Link className="dropdown-item" to="/maps/survival">Survival</Link>
                                <Link className="dropdown-item" to="/maps/creative">Creative</Link>
                            </ul>
                        </div>

                        <div className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="" role="button" aria-haspopup="true" aria-expanded="false"><i className="fa fa-star"></i> Stats</a>
                            <ul className="dropdown-menu dropdown-menu-right dropdown-danger">
                                <a className="dropdown-item" href="https://stats.planb-mc.com/survival">Survival</a>
                                <a className="dropdown-item" href="/">Creative</a>
                                <a className="dropdown-item" href="/">Sky Block</a>
                            </ul>
                        </div>

                        <div className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="" role="button" aria-haspopup="true" aria-expanded="false"><i className="fa fa-flag"></i> Quests</a>
                            <ul className="dropdown-menu dropdown-menu-right dropdown-danger">
                                <Link className="dropdown-item" to="/quests">Introduction</Link>
                                <Link className="dropdown-item" to="/quests/riseandshine">Rise & Shine</Link>
                                <Link className="dropdown-item" to="/quests/trophyhunter">Trophy Hunter</Link>
                                <Link className="dropdown-item" to="/quests/cureformadness">Cure For Madness</Link>
                                <Link className="dropdown-item" to="/quests/strikeapose">Strike A Pose</Link>
                                <Link className="dropdown-item" to="/quests/mimeartist">Mime Artist</Link>
                                <Link className="dropdown-item" to="/quests/shulkersanctuary">Shulker Sanctuary</Link>
                            </ul>
                        </div>
                    </ul>
                </div>
            </div>
        </nav>
  );
}

  export default Header;