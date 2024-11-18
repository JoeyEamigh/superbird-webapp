import { IconSize } from '@spotify-internal.old/encore-web/types/src/core/components/Icon/Svg';
import { IconSearchActive } from '@spotify-internal.old/encore-web';

type Props = {
  iconSize: IconSize;
};

export default function CarThingIconSearchActive({ iconSize }: Props) {
  return <IconSearchActive iconSize={iconSize} />;
}
