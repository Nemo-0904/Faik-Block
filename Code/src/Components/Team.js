import React from "react";
import { FaLinkedin } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import "./team.css";

  const Card = ({
  title,
  imageUrl,
  textClassName,
  imageClassName,
  PostionContent,
  contribution,
  linkedinLink,
  instagramLink,
  githubLink,
  twitterLink
}) => (
  <article className="card-team">
    <div className="card-content-team">
      <div className={`card-image-team ${imageClassName}`}>
        <img src={imageUrl} alt={title} className="card-img-team" />
      </div>
      <div className={`card-text-team ${textClassName}`}>
        <h1>{title}</h1>
        <h2>{PostionContent}</h2>
        <h3>{contribution}</h3>
      </div>
      </div>
      
    <div className="Socials-team">
      
      <a className="icon" href={linkedinLink}><FaLinkedin style={{ fontSize: 24 }} /></a>
      <a className="icon" href={instagramLink}><FaInstagram style={{ fontSize: 24 }} /></a>
      <a  className="icon" href={githubLink}><FaGithub style={{ fontSize: 24 }} /></a>
      <a className="icon" href={twitterLink}><FaTwitter style={{ fontSize: 24 }} /></a>
      </div>

  </article>
);


function Team() {
  return (
    <div className="AboutContent-team">
      <Card 
        // className="Vedhas"
        title="Vedhas Naik "
        imageUrl="https://res.cloudinary.com/drf1yrgws/image/upload/c_crop,g_auto,h_500,w_490/about%20us/uix5jbu6qkgoxoarijqd.jpg"
        textClassName="VedhasText"
        imageClassName="VedhasImage"
        PostionContent=" Full Stack Web3 Developer"
        contribution="Contribution: (Team Leader) Smartcontracts, Integration "
         linkedinLink="https://www.linkedin.com/in/vedhas-naik-005378253?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BTjV5vZLCSmmmNhiC1OEZyw%3D%3D"
        instagramLink="https://www.instagram.com/vedhas_1201/"
        githubLink="https://github.com/NaikVedhas"
        twitterLink="https://x.com/NaikVedhas58616?t=8h08Xbvh3GMAlb9y-SOmuQ&s=08"
      />

      <Card
        title="Aastha Mhatre"
        imageUrl="https://res.cloudinary.com/drf1yrgws/image/upload/c_crop,g_auto,h_1150,w_1150/about%20us/jdmozb4ckfqmvw3nqi7x.jpg"
        textClassName="AasthaText"
        imageClassName="AasthaImage"
         PostionContent="Front- End Developer"
        contribution="Contribution: Front end "
         linkedinLink="https://www.linkedin.com/in/aastha-mhatre-3226722b0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        instagramLink="https://www.instagram.com/aastha_2675/"
        githubLink="https://github.com/Aastha2675"
        twitterLink="https://x.com/AasthaMhatre?t=YxEVqip8ExYRDolX16OCEg&s=08"
      />
<Card
  title="Nithya Cherala"
  imageUrl="https://res.cloudinary.com/drf1yrgws/image/upload/c_crop,g_auto,h_800,w_800/c_crop,h_550,w_550/about%20us/m5uqxkzhjdrg7xxn8lm8.jpg"
  textClassName="NithyaText"
  imageClassName="NithyaImage"
   PostionContent="Front-End developer"
  contribution="Contribution : Front-End "
   linkedinLink="https://www.linkedin.com/in/nithyacherala/"
  instagramLink="https://www.instagram.com/nith_09.04/"
  githubLink="https://github.com/Nemo-0904"
  twitterLink="https://twitter.com/cherala17"
 

/>


      <Card
        title="Princy Malewar"
        imageUrl="https://res.cloudinary.com/drf1yrgws/image/upload/c_crop,g_auto,h_700,w_700/about%20us/nnx7iaxgu0f4azs1pkch.jpg"
        textClassName="PrincyText"
        imageClassName="PrincyImage"
         PostionContent=" Front-End developer"
        contribution="Contribution: Front-End"
         linkedinLink="https://www.linkedin.com/in/princy-malewar-62b8b6257/"
        instagramLink="https://www.instagram.com/itspriyancy_18/?next=%2F&hl=en"
        githubLink="https://github.com/Princy18Human"
        twitterLink="https://twitter.com/itspriyancy18"

      />
    </div>
  );
}





export default Team;