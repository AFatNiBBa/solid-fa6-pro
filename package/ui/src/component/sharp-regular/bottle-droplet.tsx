
import { Icon } from "../../index";

/**
 * A component that renders the `bottle-droplet` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bottle-droplet?s=sharp-regular bottle-droplet}
 * @preview ![bottle-droplet](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/bottle-droplet.svg)
 */
const BottleDroplet: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M64 0L80 0s0 0 0 0l48 0 64 0 40 0 8 0 16 0 0 48-16 0 0 104.2c38.6 25.8 64 69.8 64 119.8l0 192 0 48-48 0L64 512l-48 0 0-48 0-192c0-49.9 25.4-93.9 64-119.8L80 48 64 48 64 0zM192 48l-64 0 0 104.2 0 25.6-21.3 14.3C80.9 209.4 64 238.8 64 272l0 192 192 0 0-192c0-33.2-16.9-62.6-42.7-79.9L192 177.9l0-25.6L192 48zM160 384c-26.5 0-48-21.5-48-48c0-32 48-80 48-80s48 48 48 80s-21.5 48-48 48z" />
    </Icon>
);

export default BottleDroplet;