
import { Icon } from "../../index";

/**
 * A component that renders the `laptop` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/laptop?s=light laptop}
 * @preview ![laptop](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/laptop.svg)
 */
const Laptop: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M512 64L128 64c-17.7 0-32 14.3-32 32l0 256-32 0L64 96c0-35.3 28.7-64 64-64l384 0c35.3 0 64 28.7 64 64l0 256-32 0 0-256c0-17.7-14.3-32-32-32zM76.8 448l486.4 0c20.3 0 37.4-13.5 42.9-32L33.9 416c5.5 18.5 22.7 32 42.9 32zM0 403.2C0 392.6 8.6 384 19.2 384l601.6 0c10.6 0 19.2 8.6 19.2 19.2c0 42.4-34.4 76.8-76.8 76.8L76.8 480C34.4 480 0 445.6 0 403.2z" />
    </Icon>
);

export default Laptop;