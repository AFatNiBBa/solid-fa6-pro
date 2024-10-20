
import { Icon } from "../../index";

/**
 * A component that renders the `mars` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mars?s=sharp-thin mars}
 * @preview ![mars](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/mars.svg)
 */
const Mars: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M296 32l-8 0 0 16 8 0 124.7 0-126 126c-31.3-28.6-72.9-46-118.7-46C78.8 128 0 206.8 0 304s78.8 176 176 176s176-78.8 176-176c0-45.7-17.4-87.4-46-118.7l126-126L432 184l0 8 16 0 0-8 0-144 0-8-8 0L296 32zM16 304a160 160 0 1 1 320 0A160 160 0 1 1 16 304z" />
    </Icon>
);

export default Mars;