import { IconSize } from '@spotify-internal.old/encore-web/types/src/core/components/Icon/Svg';
import { IconCollectionActive } from '@spotify-internal.old/encore-web';

type Props = {
  iconSize: IconSize;
};

const IconLibraryActive = ({ iconSize }: Props) => <IconCollectionActive iconSize={iconSize} />;

export default IconLibraryActive;
