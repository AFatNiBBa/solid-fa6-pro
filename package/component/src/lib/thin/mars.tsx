
import { Icon } from "../../index";

/**
 * A component that renders the `mars` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mars?s=thin mars}
 * @preview ![mars](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/mars.svg)
 */
const Mars: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M288 40c0 4.4 3.6 8 8 8l124.7 0-126 126c-31.3-28.6-72.9-46-118.7-46C78.8 128 0 206.8 0 304s78.8 176 176 176s176-78.8 176-176c0-45.7-17.4-87.4-46-118.7l126-126L432 184c0 4.4 3.6 8 8 8s8-3.6 8-8l0-144c0-4.4-3.6-8-8-8L296 32c-4.4 0-8 3.6-8 8zM16 304a160 160 0 1 1 320 0A160 160 0 1 1 16 304z" />
    </Icon>
);

export default Mars;