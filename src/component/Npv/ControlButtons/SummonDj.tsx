import { IconDj48 } from 'component/CarthingUIComponents';
import ControlButton from 'component/Npv/ControlButtons/ControlButton';
import { NpvIcon } from 'component/Npv/ControlButtons/Controls';
import { useStore } from 'context/store';
import { observer } from 'mobx-react-lite';

const SummonDj = () => {
  const uiState = useStore().npvStore.controlButtonsUiState;
  return (
    <>
      <ControlButton id={NpvIcon.DJ} onClick={uiState.handleDjClick} isDisabled={false}>
        <div data-testid="dj-icon">
          <IconDj48 />
        </div>
      </ControlButton>
    </>
  );
};

export default observer(SummonDj);
