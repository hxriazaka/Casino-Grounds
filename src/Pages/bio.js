import './Pages.css'
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import { Link } from "react-router-dom";
import nezimg from '../img/new-zealand.png'
import usaimg from '../img/usa.png'

const Bio = () => {

        const [row, setRow] = React.useState([
          "Rest Of World",
        ]);
        const [uk, setUK] = React.useState([
            "UK",
        ]);
        const [finland, setFinland] = React.useState([
            "Finland",
        ]);
        const [norway, setNorway] = React.useState([
            "Norway",
        ]);
        const [sweden, setSweden] = React.useState([
            "Sweden",
        ]);
        const [usa, setUsa] = React.useState([
            "United States",
        ]);
        const [canada, setCanada] = React.useState([
            "Canada",
        ]);
        const [denmark, setDenmark] = React.useState([
            "Denmark",
        ]);
        const [japan, setJapan] = React.useState([
            "Japan",
        ]);
        const [nez, setNez] = React.useState([
            "New Zealand",
        ]);




        const [selected, setSelected] = useState("Rest Of World");
      
        function handleChange(event) {
          setSelected(event.target.value);
        }

    return ( 
        <div className="bio">
            <div className="container pt-4">
            <p>casinos</p>
                <h1>Online Casinos</h1>
                <h6>A list of online casinos available to players in your country of residence in October 2021 can be found further down this page. 
                    We're approached by brands wanting to be featured on this list on a daily basis. 
                    Few pass our initial vetting processes; those that do get a thorough review by our team with the player's best interest at heart.</h6>
            <div className="btns d-flex justify-content-between">
                <div>
                    <button>Bitcoin</button>
                    <button>Best Casinos</button>
                    <button>New</button>
                    <button>Live Casinos</button>
                    <button>No Account</button>
                </div>
                <div className="d-flex g1">
                    <div className='d-flex g1-0 align-items-center'>
                        <h6 >Sort</h6>
                        <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 12H6V10H0V12ZM0 0V2H18V0H0ZM0 7H12V5H0V7Z" fill="#ffffff"></path></svg>
                    </div>
                    <div>
                    <FormControl>
                            <Select
                                value={selected}
                                onChange={handleChange}
                                inputProps={{
                                name: "agent",
                                id: "age-simple"
                                }}
                            >
                                {row.map((value, index) => {
                                return <MenuItem value={value} className='d-flex sec'>
                                    <Link to='/'>
                                        <img src="https://res.cloudinary.com/casinogrounds/image/upload/v1616502171/reactapp/row-flag.svg" alt="" />
                                        {value}
                                    </Link>
                                </MenuItem>;
                                })}
                                {uk.map((value, index) => {
                                return <MenuItem value={value} className='d-flex sec'>
                                    <Link to='/uk'>
                                        <img src="https://res.cloudinary.com/casinogrounds/image/upload/v1616502171/reactapp/gb-flag.svg" alt="" />
                                    {value}
                                    </Link>
                                </MenuItem>;
                                })}
                                {finland.map((value, index) => {
                                return <MenuItem value={value}>
                                    <Link to='/finland' className='d-flex sec'>
                                        <img src="https://res.cloudinary.com/casinogrounds/image/upload/v1616502171/reactapp/fi-flag.svg" alt="" />
                                        {value}
                                    </Link>
                                </MenuItem>;
                                })}
                                {norway.map((value, index) => {
                                return <MenuItem value={value} className='d-flex sec'>
                                    <Link to='/norway'>
                                        <img src="https://res.cloudinary.com/casinogrounds/image/upload/v1616502171/reactapp/no-flag.svg" alt="" />
                                        {value}
                                    </Link>
                                </MenuItem>;
                                })}
                                {sweden.map((value, index) => {
                                return <MenuItem value={value} className='d-flex sec'>
                                    <Link to='/sweden'>
                                        <img src="https://res.cloudinary.com/casinogrounds/image/upload/v1616502171/reactapp/se-flag.svg" alt="" />
                                        {value}
                                    </Link>
                                </MenuItem>;
                                })}
                                {usa.map((value, index) => {
                                return <MenuItem value={value} className='d-flex sec'>
                                    <Link to='/usa'>
                                        <img src={usaimg} alt="" />
                                        {value}
                                    </Link>
                                </MenuItem>;
                                })}
                                {canada.map((value, index) => {
                                return <MenuItem value={value} className='d-flex sec'>
                                    <Link to='canada'>
                                        <img src="https://res.cloudinary.com/casinogrounds/image/upload/v1616502171/reactapp/ca-flag.svg" alt="" />
                                    {value}    
                                    </Link>
                                </MenuItem>;
                                })}
                                {denmark.map((value, index) => {
                                return <MenuItem value={value} className='d-flex sec'>
                                    <Link to='/denmark'>
                                        <img src="https://res.cloudinary.com/casinogrounds/image/upload/v1616502171/reactapp/dk-flag.svg" alt="" />
                                    {value}
                                    </Link>
                                </MenuItem>;
                                })}
                                {japan.map((value, index) => {
                                return <MenuItem value={value} className='d-flex sec'>
                                    <Link to="/japan">
                                        <img src="https://res.cloudinary.com/casinogrounds/image/upload/v1616502171/reactapp/jp-flag.svg" alt="" />
                                    {value}
                                    </Link>
                                </MenuItem>;
                                })}
                                {nez.map((value, index) => {
                                return <MenuItem value={value} className='d-flex sec'>
                                    <Link to='/new-zealand'>
                                        <img src={nezimg} alt="" />
                                        {value}
                                    </Link>
                                </MenuItem>;
                                })}
                            </Select>
                    </FormControl>
                    </div>
                </div>
            </div>
            </div>
        </div>
     );
}
 
export default Bio;