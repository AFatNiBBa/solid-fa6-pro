
import { Icon } from "../../index";

/**
 * A component that renders the `pen-circle` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pen-circle?s=sharp-light pen-circle}
 * @preview ![pen-circle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/pen-circle.svg)
 */
const PenCircle: typeof Icon = x => (
    <Icon {...x}>
        <path d="M480 256A224 224 0 1 0 32 256a224 224 0 1 0 448 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM321.3 149.3L298.5 172 340 213.5l22.8-22.8-41.5-41.5zM166 304.5l-7.7 49.1 49.1-7.7L317.4 236.1l-41.5-41.5L166 304.5zM385.4 168.1L408 190.7l-22.6 22.6L222.7 376l-69.5 10.8L120 392l5.2-33.2L136 289.3 321.3 104l64.1 64.1z" />
    </Icon>
);

export default PenCircle;