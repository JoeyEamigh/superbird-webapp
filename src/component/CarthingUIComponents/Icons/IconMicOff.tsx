import { IconMicOff } from '@spotify-internal.old/encore-web';
import { IconSize } from '@spotify-internal.old/encore-web/types/src/core/components/Icon/Svg';

interface Props {
  className?: string;
  iconSize: number;
}

const CarThingIconMicOff = ({ className, iconSize }: Props) => (
  <IconMicOff className={className} iconSize={iconSize as IconSize} height={iconSize} width={iconSize} />
);

export default CarThingIconMicOff;
