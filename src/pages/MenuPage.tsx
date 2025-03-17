import { motion } from 'framer-motion';
import Menu from '../components/menu/Menu';

const MenuPage = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-20"
    >
      <Menu />
    </motion.main>
  );
};

export default MenuPage;