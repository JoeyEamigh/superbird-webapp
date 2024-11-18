import { observer } from 'mobx-react-lite';
import modal_styles from './Sunset.module.scss';
import { useStore } from '../../context/store';
import { Button, ButtonGroup, ButtonType } from 'component/CarthingUIComponents';
import { useEffect, useState } from 'react';

const SUNSET_BOOT_COUNT = 'sunset_boot_count';
const SUNSET_MESSAGE_DISMISSED_KEY = 'sunset_dialog_dismissed';
const SUNSET_BOOT_RESET = 1;
const SUNSET_MESSAGE_DISABLE = 'disable_sunset_dialog';
const SUNSET_TIMEOUT = 15000;

const SunsetInfo = () => {
  const { overlayController, persistentStorage, remoteConfigStore } = useStore();

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let timeout: number = 0;
    const timesCalled = (): number => {
      return Number(persistentStorage.getItem(SUNSET_BOOT_COUNT) ?? '0');
    };

    const setTimesCalled = (value: number) => {
      if (isNaN(value)) persistentStorage.setItem(SUNSET_BOOT_COUNT, '0');
      else persistentStorage.setItem(SUNSET_BOOT_COUNT, value.toString());
    };

    const getDialogDismissed = () => {
      return persistentStorage.getItem(SUNSET_MESSAGE_DISMISSED_KEY) ?? 'show';
    };

    const shouldShow = (): boolean => {
      if (remoteConfigStore.sunsetInfoNag) {
        const count = timesCalled();
        setTimesCalled(count + 1);
        if (count >= SUNSET_BOOT_RESET) {
          setTimesCalled(0);
          timeout = window.setTimeout(() => {
            overlayController.resetAndMaybeShowAModal();
          }, SUNSET_TIMEOUT);
          return true;
        }
        return false;
      }
      if (remoteConfigStore.sunsetInfo) {
        return getDialogDismissed() !== SUNSET_MESSAGE_DISABLE;
      }
      return false;
    };
    if (shouldShow()) {
      setVisible(true);
    } else {
      overlayController.resetAndMaybeShowAModal();
    }
    return () => {
      window.clearTimeout(timeout);
    };
  }, [remoteConfigStore, persistentStorage, overlayController]);

  const saveDialogDismissed = () => {
    persistentStorage.setItem(SUNSET_MESSAGE_DISMISSED_KEY, SUNSET_MESSAGE_DISABLE);
    overlayController.resetAndMaybeShowAModal();
  };

  return (
    <div
      data-testid="sunsetinfo-modal-type"
      className={modal_styles.dialog}
      onClick={saveDialogDismissed}
      style={{ display: visible ? 'flex' : 'none' }}
    >
      <div className={modal_styles.title}>Car Thing will stop operating after December 9, 2024.</div>

      <div className={modal_styles.subtitle} style={{ marginTop: 40 }}>
        Thank you for being on this journey with us. <br /> Contact customer service by no later than
        <br /> January 14, 2025 to discuss your refund options.
      </div>
      <ButtonGroup>
        <Button
          className={modal_styles.dismissSunsetButton}
          type={ButtonType.BUTTON_PRIMARY}
          onClick={saveDialogDismissed}
          style={{ marginTop: 24 }}
        >
          OK
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default observer(SunsetInfo);
