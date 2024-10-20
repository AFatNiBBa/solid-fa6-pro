
import { Icon } from "../../index";

/**
 * A component that renders the `laptop` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/laptop?s=thin laptop}
 * @preview ![laptop](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/laptop.svg)
 */
const Laptop: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M512 48L128 48c-26.5 0-48 21.5-48 48l0 256-16 0L64 96c0-35.3 28.7-64 64-64l384 0c35.3 0 64 28.7 64 64l0 256-16 0 0-256c0-26.5-21.5-48-48-48zM19.2 400c-1.8 0-3.2 1.4-3.2 3.2C16 436.8 43.2 464 76.8 464l486.4 0c33.6 0 60.8-27.2 60.8-60.8c0-1.8-1.4-3.2-3.2-3.2L19.2 400zM0 403.2C0 392.6 8.6 384 19.2 384l601.6 0c10.6 0 19.2 8.6 19.2 19.2c0 42.4-34.4 76.8-76.8 76.8L76.8 480C34.4 480 0 445.6 0 403.2z" />
    </Icon>
);

export default Laptop;