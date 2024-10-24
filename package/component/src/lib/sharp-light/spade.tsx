
import { Icon } from "../../index";

/**
 * A component that renders the `spade` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/spade?s=sharp-light spade}
 * @preview ![spade](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/spade.svg)
 */
const Spade: typeof Icon = x => (
    <Icon {...x}>
        <path d="M240 400.2l-6.5 6.6-1.4 1.4c-53.1 53.1-139.2 53.1-192.3 0s-53.1-139.2 0-192.3L256 0s0 0 0 0L472.2 215.8c53.1 53.1 53.1 139.2 0 192.3s-139.2 53.1-192.3 0l-1.4-1.4-6.5-6.6 0 79.8 64 0 16 0 0 32-16 0-64 0-32 0-64 0-16 0 0-32 16 0 64 0 0-79.8zm-6.8-38.7L256 338.4l22.8 23.1 23.8 24.1c40.6 40.5 106.4 40.5 147-.1c40.6-40.6 40.6-106.5 0-147.1c0 0 0 0 0 0L256 45.2 62.5 238.5s0 0 0 0c-40.6 40.6-40.6 106.5 0 147.1c40.6 40.6 106.4 40.6 147 .1l23.8-24.1z" />
    </Icon>
);

export default Spade;