import styles from "./css/team-page.css";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// needs to take name, picture, and title as props
// display the card with the picture as the logo, and the name and title following it

function Profile(props) {

  const IMG = (pfp) => {
    return require(`../../../../images/bolt pfp/${pfp}`)
  }

  return (
    <motion.div
    className="profile-holder"
      whileHover={{ scale: 1.09 }}
      onHoverStart={e => { }}
      onHoverEnd={e => { }}
    >
        <div className="profile-card">
          <div className="profile-icon">
            <div className="circle-background">
            <img className="circle-image" src={IMG(props.profilepic)} alt={props.name} />
            </div>
          </div>
          <div className="text">
            <div className="profile-name">{props.name}</div>
            <div className="profile-title">{props.title}</div>
          </div>
        </div>
    </motion.div>
  );
}

export default Profile;

