import { motion } from 'framer-motion';
import Contact from '../components/contact/Contact';

const ContactPage = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-20"
    >
      <Contact />
    </motion.main>
  );
};

export default ContactPage;