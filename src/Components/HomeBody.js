import React, { Component } from 'react'
import MyProjects from "../Components/MyProjects"
import { AiOutlineGithub, AiFillMediumSquare, AiFillLinkedin} from 'react-icons/ai';
import { TiSocialYoutubeCircular } from 'react-icons/ti'

class HomeBody extends Component{

    state = {
        profileImageClick: false
    }

    handleProfile = () => {
        this.setState({ profileImageClick: !this.state.profileImageClick})
    }


render() {
return(
    <div className= "homeBody">
        <div>
            <div className = "imageDiv">
                <div className = "profileImage " >
                    {this.state.profileImageClick === false? <img onClick = {this.handleProfile} className = "img"  src={require("../images/spencerprofile.png")} height = "300px" /> : <img onClick = {this.handleProfile} className = "img"  src={require("../images/spencerprofile2.png")} height = "300px" /> }
                </div>
                <div className= "align-center headernav">
                <a className = "headericons" href={"https://github.com/SpencerBlum"} target="_blank" > <AiOutlineGithub/> </a>
                <a className = "headericons" href={"https://medium.com/@spencerblum"} target="_blank"> <AiFillMediumSquare/> </a>
                <a className = "headericons" href={"https://www.youtube.com/channel/UCpwJsFRyAfOaFBejR-yqv1A?view_as=subscriber"} target="_blank"> <TiSocialYoutubeCircular/> </a>
                <a className = "headericons" href={"https://www.linkedin.com/in/spencer-blum/"} target="_blank"> <AiFillLinkedin/> </a>
                </div>
            </div>
            <div>
                <h2> Skills </h2>
                <h3> ReactJS | JavaScript | Ruby | Ruby on Rails | Redux | SQL | HTML | CSS | Sketch </h3>
            </div>
        </div>

        <div className = "box-div">
            <h2> About Me </h2>
            <h4> 
            My name is Spencer Blum.  
            I am a Frontend Software Developer with experience in Javascript ReactJS, Ruby, and Ruby on Rails. 
            I grew up in the Bay Area of San Francisco, where I was exposed to startups early on. 
            This drove me to earn a business degree in college and found my own startup after graduation. 
            Within my team, I found myself coding most of the CSS and HTML elements and gained a strong passion for software development. 
            I deepened this passion and completed the Flatiron coding bootcamp in May of 2020. 
            Currently, I am searching for my next role as a software engineer.
            </h4>
        </div>
        <div>
            <MyProjects/>
        </div>
    </div>
)
 }
}

export default HomeBody;