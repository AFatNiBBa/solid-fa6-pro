
import { Icon } from "../../index";

/**
 * A component that renders the `empty-set` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/empty-set?s=sharp-thin empty-set}
 * @preview ![empty-set](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/empty-set.svg)
 */
const EmptySet: typeof Icon = x => (
    <Icon {...x}>
        <path d="M419.9 103.4l65.7-65.7L474.3 26.3 408.6 92.1C368.6 54.8 315 32 256 32C132.3 32 32 132.3 32 256c0 59 22.8 112.6 60.1 152.6L26.3 474.3l11.3 11.3 65.7-65.7C143.4 457.2 197 480 256 480c123.7 0 224-100.3 224-224c0-59-22.8-112.6-60.1-152.6zm-22.6 0L103.4 397.3C69 360.2 48 310.6 48 256C48 141.1 141.1 48 256 48c54.6 0 104.2 21 141.3 55.4zM114.7 408.6L408.6 114.7C443 151.8 464 201.4 464 256c0 114.9-93.1 208-208 208c-54.6 0-104.2-21-141.3-55.4z" />
    </Icon>
);

export default EmptySet;