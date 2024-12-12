import { UbiExpr2PageViewEvent } from '@spotify-internal/event-definitions/src/events/createUbiExpr2PageView';
import { UbiExpr5ImpressionNonAuthEvent } from '@spotify-internal/event-definitions/src/events/createUbiExpr5ImpressionNonAuth';
import { UbiExpr6InteractionNonAuthEvent } from '@spotify-internal/event-definitions/src/events/createUbiExpr6InteractionNonAuth';
import { UbiProd1ImpressionEvent } from '@spotify-internal/event-definitions/src/events/createUbiProd1Impression';
import { UbiProd1InteractionEvent } from '@spotify-internal/event-definitions/src/events/createUbiProd1Interaction';

import { UBIImpressionEvent, UBIInteractionEvent } from '@spotify-internal/ubi-types-js';
import OnboardingUbiLogger from 'component/Onboarding/OnboardingUbiLogger';
import SettingsUbiLogger from 'component/Settings/SettingsUbiLogger';
import PodcastSpeedOptionsUbiLogger from 'eventhandler/PodcastSpeedOptionsUbiLogger';
import HardwareStore from 'store/HardwareStore';
import InterappActions from '../middleware/InterappActions';
import RemoteConfigStore from '../store/RemoteConfigStore';
import ContentShelfUbiLogger from './ContentShelfUbiLogger';
import ModalUbiLogger from './ModalUbiLogger';
import NpvUbiLogger from './NpvUbiLogger';
import PresetsUbiLogger from './PresetsUbiLogger';
import TrackListUbiLogger from './TrackListUbiLogger';
import VoiceUbiLogger from './VoiceUbiLogger';
import QueueUbiLogger from './QueueUbiLogger';
import PhoneCallUbiLogger from './PhoneCallUbiLogger';
import OtherMediaUbiLogger from 'component/Npv/OtherMedia/OtherMediaUbiLogger';
import NightModeUbiLogger from 'component/NightMode/NightModeUbiLogger';
import { UBILogger } from '@spotify-internal/ubi-logger-js/src';

const INTERVAL_BATCH_LOG_MS = 60 * 1000; // 60 seconds
const BATCH_SIZE_LIMIT = 100;

export type UbiInteraction = {
  event: UbiProd1InteractionEvent;
  timestamp: number;
};

export type UbiImpression = {
  event: UbiProd1ImpressionEvent;
  timestamp: number;
};

type UbiEvent =
  | UbiProd1InteractionEvent
  | UbiExpr6InteractionNonAuthEvent
  | UbiProd1ImpressionEvent
  | UbiExpr5ImpressionNonAuthEvent
  | UbiExpr2PageViewEvent;

class UbiLogger {
  npvUbiLogger: NpvUbiLogger;
  contentShelfUbiLogger: ContentShelfUbiLogger;
  trackListUbiLogger: TrackListUbiLogger;
  onboardingUbiLogger: OnboardingUbiLogger;
  settingsUbiLogger: SettingsUbiLogger;
  presetsUbiLogger: PresetsUbiLogger;
  modalUbiLogger: ModalUbiLogger;
  voiceUbiLogger: VoiceUbiLogger;
  podcastSpeedOptionsUbiLogger: PodcastSpeedOptionsUbiLogger;
  queueUbiLogger: QueueUbiLogger;
  phoneCallUbiLogger: PhoneCallUbiLogger;
  otherMediaUbiLogger: OtherMediaUbiLogger;
  nightModeUbiLogger: NightModeUbiLogger;

  interappActions: InterappActions;
  remoteConfigStore: RemoteConfigStore;
  hardwareStore: HardwareStore;

  timerId?: number;
  interactions: Array<UbiInteraction> = [];
  impressions: Array<UbiImpression> = [];
  isSending = false;
  ubiLogger: UBILogger;

  constructor(interappActions: InterappActions, remoteConfigStore: RemoteConfigStore, hardwareStore: HardwareStore) {
    this.npvUbiLogger = new NpvUbiLogger(this);
    this.contentShelfUbiLogger = new ContentShelfUbiLogger(this);
    this.trackListUbiLogger = new TrackListUbiLogger(this);
    this.onboardingUbiLogger = new OnboardingUbiLogger(this);
    this.settingsUbiLogger = new SettingsUbiLogger(this);
    this.presetsUbiLogger = new PresetsUbiLogger(this);
    this.interappActions = interappActions;
    this.modalUbiLogger = new ModalUbiLogger(this);
    this.voiceUbiLogger = new VoiceUbiLogger(this);
    this.podcastSpeedOptionsUbiLogger = new PodcastSpeedOptionsUbiLogger(this);
    this.queueUbiLogger = new QueueUbiLogger(this);
    this.phoneCallUbiLogger = new PhoneCallUbiLogger(this);
    this.otherMediaUbiLogger = new OtherMediaUbiLogger(this);
    this.nightModeUbiLogger = new NightModeUbiLogger(this);
    this.remoteConfigStore = remoteConfigStore;
    this.hardwareStore = hardwareStore;
    this.restartTimer();

    this.hardwareStore.onRebooting(() => {});
    this.ubiLogger = new UBILogger({ eventSender: { send: event => {} } });
  }

  isInteraction = (event: UbiEvent): event is UbiProd1InteractionEvent => {
    return event.name === 'UbiProd1Interaction';
  };

  isImpression = (event: UbiEvent): event is UbiProd1ImpressionEvent => {
    return event.name === 'UbiProd1Impression';
  };

  logInteraction = (event: UBIInteractionEvent): string => {
    return 'no.';
  };

  logImpression = (event: UBIImpressionEvent): string => {
    return 'no.';
  };

  sendLogBatch = () => {};

  private restartTimer = () => {};

  private sendBatchIfLimitReached = () => {};

  clearQueue = () => {};

  private logCount = () => {};
}

export default UbiLogger;
