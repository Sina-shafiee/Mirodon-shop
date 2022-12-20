const Profile = () => {
  return (
    <motion.main
      initial={{ opacity: 0, translateX: 999 }}
      animate={{ opacity: 1, translateX: 0 }}
      exit={{ opacity: 0, translateX: 999 }}
      transition={{ duration: 0.4 }}
    >
      Profile
    </motion.main>
  );
};

export default Profile;
