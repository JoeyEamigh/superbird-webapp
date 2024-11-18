import { IconPublic } from '@spotify-internal.old/encore-web';
import { IconSize } from '@spotify-internal.old/encore-web/types/src/core/components/Icon/Svg';

interface Props {
  iconSize: IconSize;
}

export default function CarThingIconPublic({ iconSize }: Props) {
  return <IconPublic iconSize={iconSize} />;
}
