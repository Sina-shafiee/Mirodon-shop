import { motion } from 'framer-motion';

const Profile = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      Profile
    </motion.main>
  );
};

export default Profile;
