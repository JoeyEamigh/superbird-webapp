import { observer } from 'mobx-react-lite';
import modal_styles from './Sunset.module.scss';
import { useStore } from '../../context/store';

const Sunset = () => {
  const {} = useStore();

  return (
    <div data-testid="sunsetinfo-modal-type" className={modal_styles.dialog}>
      <div className={modal_styles.title}>Car Thing is discontinued and no longer operational.</div>

      <div className={modal_styles.subtitle} style={{ marginTop: 156 }}>
        Thank you for being on this journey with us, safe travels. For more information, visit carthing.com. Contact
        customer service by no later than January 14, 2025 to discuss your refund options.
      </div>
    </div>
  );
};

export default observer(Sunset);
