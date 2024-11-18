import { IconCheckAlt } from '@spotify-internal.old/encore-web';
import { IconSize } from '@spotify-internal.old/encore-web/es/components/Icon/Svg';

interface Props {
  className?: string;
  iconSize: number;
}

const IconCheckAltLocal = ({ className, iconSize }: Props) => (
  <IconCheckAlt width={iconSize} height={iconSize} className={className} iconSize={iconSize as IconSize} />
);

export default IconCheckAltLocal;
