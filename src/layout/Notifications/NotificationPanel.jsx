import React, { useContext } from "react";
import styles from "./Notification.module.css";
import { NotificationPanelData } from "../../utils/helper"; // Mocked data or helper for notifications, activities, and contacts
import { AppContext } from "../../context/AppContext"; // Context to manage global app state
import { motion } from "framer-motion"; // For animations

const NotificationPanel = () => {
  // Get the notificationNav state from the AppContext to determine if the panel should be open or closed
  const { notificationNav } = useContext(AppContext);

  // Destructure the notification, activities, and contacts data from NotificationPanelData helper
  const { activities, notifications, contacts } = NotificationPanelData || {};

  return (
    // Animated div for the notification panel using Framer Motion
    <motion.div
      initial={{ opacity: 0, x: 20 }} // Initial state: hidden and shifted to the right
      animate={{ opacity: 1, x: 0 }} // Animation: visible and positioned correctly
      transition={{ duration: 0.8 }} // Animation duration of 0.8s
      className={`${styles.notificationPanel} ${
        !notificationNav ? styles?.close : "" // Apply close class if notificationNav is false
      }`}
    >
      {/* Notifications section */}
      <div className={styles.notifications}>
        <h3>Notifications</h3>
        <ul>
          {/* Map through the notifications array and render each notification */}
          {notifications?.map((e, index) => {
            const { icon, message, time } = e || {};
            return (
              <li key={index}>
                {/* Render the notification icon using dangerouslySetInnerHTML */}
                <div
                  className={styles?.iconDiv}
                  dangerouslySetInnerHTML={{ __html: icon }} // Using raw HTML for SVG or icons
                />
                <div className={styles?.messageDiv}>
                  {/* Message and time display for the notification */}
                  <p className={`regular-14 ${styles?.message}`}>{message}</p>
                  <p className={`regular-12 ${styles?.time}`}>{time}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Activities section */}
      <div className={styles.activities}>
        <h3>Activities</h3>
        <ul>
          {/* Map through the activities array and render each activity */}
          {activities?.map((e, index) => {
            const { image, message, time } = e || {};
            return (
              <li key={index}>
                {/* Activity image */}
                <div className={styles.imageDiv}>
                  <img
                    src={image}
                    alt={`activities-${index}`} // Alt text includes the activity index
                    height={24}
                    width={24}
                  />
                </div>
                <div className={styles?.messageDiv}>
                  {/* Message and time display for the activity */}
                  <p className={`regular-14 ${styles?.message}`}>{message}</p>
                  <p className={`regular-12 ${styles?.time}`}>{time}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Contacts section */}
      <div className={styles.contacts}>
        <h3>Contacts</h3>
        <ul>
          {/* Map through the contacts array and render each contact */}
          {contacts?.map((e, index) => {
            const { name, avatar } = e || {};
            return (
              <li key={index}>
                {/* Contact avatar */}
                <div className={styles.imageDiv}>
                  <img src={avatar} alt={name} height={24} width={24} />
                </div>
                {/* Contact name */}
                <p className={`regular-14 ${styles?.message}`}>{name}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </motion.div>
  );
};

export default NotificationPanel;
