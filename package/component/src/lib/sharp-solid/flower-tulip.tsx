
import { Icon } from "../../index";

/**
 * A component that renders the `flower-tulip` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/flower-tulip?s=sharp-solid flower-tulip}
 * @preview ![flower-tulip](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/flower-tulip.svg)
 */
const FlowerTulip: typeof Icon = x => (
    <Icon {...x}>
        <path d="M176 80L96 32l0 96c0 70.7 57.3 128 128 128l0 138.8C192.1 349.5 139.5 320 80 320L0 320l0 16c0 97.2 78.8 176 176 176l48 0 32 0 32 0 48 0c97.2 0 176-78.8 176-176l0-16-80 0c-59.5 0-112.1 29.5-144 74.8L288 256c70.7 0 128-57.3 128-128l0-96L336 80 256 0 176 80z" />
    </Icon>
);

export default FlowerTulip;