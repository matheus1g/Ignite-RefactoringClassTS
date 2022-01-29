import { FiPlusSquare } from 'react-icons/fi';
import { Container } from './styles';

import logoIMG from '../../assets/logo.svg'

interface headerProps {
  openNewModal: () => void;
}

export function Header({openNewModal}: headerProps) {
 return (
      <Container>
        <header>
          <img src={logoIMG} alt="GoRestaurant" />
          <nav>
            <div>
              <button
                type="button"
                onClick={openNewModal}
              >
                <div className="text">Novo Prato</div>
                <div className="icon">
                  <FiPlusSquare size={24} />
                </div>
              </button>
            </div>
          </nav>
        </header>
      </Container>
 )
};


export default Header