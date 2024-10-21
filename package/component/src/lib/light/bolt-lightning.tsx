
import { Icon } from "../../index";

/**
 * A component that renders the `bolt-lightning` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bolt-lightning?s=light bolt-lightning}
 * @preview ![bolt-lightning](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/bolt-lightning.svg)
 */
const BoltLightning: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M32 30.9C32 13.8 45.9 0 62.9 0L226.2 0C242.7 0 256 13.3 256 29.8c0 3.2-.5 6.4-1.5 9.4L214.2 160l141.6 0c15.6 0 28.2 12.6 28.2 28.2c0 5.7-1.7 11.2-4.9 15.9l-203.2 297c-4.6 6.8-12.3 10.8-20.5 10.8c-16.2 0-28-15.2-24.1-30.9L179.5 288 30.9 288C13.9 288 0 274.1 0 257.1c0-1.5 .1-2.9 .3-4.4L32 30.9zM64 32c0 1.1-.1 2.2-.3 3.3L32.2 256 200 256c4.9 0 9.6 2.3 12.6 6.2s4.1 8.9 2.9 13.7L171.9 450.2 348.6 192 192 192c-5.1 0-10-2.5-13-6.6s-3.8-9.5-2.2-14.4L223.1 32 64 32z" />
    </Icon>
);

export default BoltLightning;