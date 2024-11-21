import { useState } from 'react';
import { useSelector } from 'react-redux';
import Basket from '../../UI/Basket';
import Logo from '../../UI/Logo';
import Logout from '../../UI/Logout';
import styles from './style.module.css';
import AuthBtn from '../../UI/AuthBtn';
import Auth from '../../components/Auth';
import BasketModal from '../../components/BasketModal';

export default function Header() {
  const username = useSelector((state) => state.user.username); 
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false); 
  const [isBasketModalOpen, setIsBasketModalOpen] = useState(false); 


  const handleOpenAuthModal = () => setIsAuthModalOpen(true);
  const handleCloseAuthModal = () => setIsAuthModalOpen(false);


  const handleOpenBasketModal = () => setIsBasketModalOpen(true);
  const handleCloseBasketModal = () => setIsBasketModalOpen(false);

  return (
    <div className={styles.container}>
      <Logo />
      <div>{username || 'Гость'}</div>
    
      <Basket onClick={handleOpenBasketModal} />

    
      {username ? <Logout /> : <AuthBtn onClick={handleOpenAuthModal} />}

    
      {isAuthModalOpen && <Auth onClose={handleCloseAuthModal} />}
      
     
      {isBasketModalOpen && <BasketModal isOpen={isBasketModalOpen} onClose={handleCloseBasketModal} />}
    </div>
  );
}
