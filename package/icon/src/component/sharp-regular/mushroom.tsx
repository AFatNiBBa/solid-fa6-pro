
import { Icon } from "../../index";

/**
 * A component that renders the `mushroom` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mushroom?s=sharp-regular mushroom}
 * @preview ![mushroom](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/mushroom.svg)
 */
const Mushroom: typeof Icon = x => (
    <Icon {...x}>
        <path d="M16 272C16 139.5 123.5 32 256 32s240 107.5 240 240l0 24 0 24-24 0L40 320l-24 0 0-24 0-24zM146.2 114.5C96.5 149.2 64 206.8 64 272l384 0c0-18.7-2.7-36.8-7.7-53.9C431.8 231.3 416.9 240 400 240c-26.5 0-48-21.5-48-48c0-26.2 21-47.5 47.1-48c-25-28-58.2-48.6-95.8-58.1c.4 3.3 .6 6.7 .6 10.1c0 44.2-35.8 80-80 80c-37.8 0-69.5-26.2-77.8-61.5zM179.7 352l48.6 0-12.3 80 80.1 0-12.3-80 48.6 0 12.3 80 7.4 48-48.6 0-94.9 0L160 480l7.4-48 12.3-80zM144 176a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default Mushroom;