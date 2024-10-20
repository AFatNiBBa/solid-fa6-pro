
import { Icon } from "../../index";

/**
 * A component that renders the `laptop-arrow-down` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/laptop-arrow-down?s=thin laptop-arrow-down}
 * @preview ![laptop-arrow-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/laptop-arrow-down.svg)
 */
const LaptopArrowDown: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M128 32l152 0 0 16L128 48c-26.5 0-48 21.5-48 48l0 256-16 0L64 96c0-35.3 28.7-64 64-64zM512 48L360 48l0-16 152 0c35.3 0 64 28.7 64 64l0 256-16 0 0-256c0-26.5-21.5-48-48-48zM16 403.2C16 436.8 43.2 464 76.8 464l486.4 0c33.6 0 60.8-27.2 60.8-60.8c0-1.8-1.4-3.2-3.2-3.2L19.2 400c-1.8 0-3.2 1.4-3.2 3.2zm-16 0C0 392.6 8.6 384 19.2 384l601.6 0c10.6 0 19.2 8.6 19.2 19.2c0 42.4-34.4 76.8-76.8 76.8L76.8 480C34.4 480 0 445.6 0 403.2zM328 40l0 252.7 74.3-74.3c3.1-3.1 8.2-3.1 11.3 0s3.1 8.2 0 11.3l-88 88c-3.1 3.1-8.2 3.1-11.3 0l-88-88c-3.1-3.1-3.1-8.2 0-11.3s8.2-3.1 11.3 0L312 292.7 312 40c0-4.4 3.6-8 8-8s8 3.6 8 8z" />
    </Icon>
);

export default LaptopArrowDown;