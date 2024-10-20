
import { Icon } from "../../index";

/**
 * A component that renders the `laptop-mobile` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/laptop-mobile?s=thin laptop-mobile}
 * @preview ![laptop-mobile](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/laptop-mobile.svg)
 */
const LaptopMobile: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M128 16l320 0c26.5 0 48 21.5 48 48l0 32 16 0 0-32c0-35.3-28.7-64-64-64L128 0C92.7 0 64 28.7 64 64l0 224-44.8 0C8.6 288 0 296.6 0 307.2C0 349.6 34.4 384 76.8 384L352 384l0-16L76.8 368C43.2 368 16 340.8 16 307.2c0-1.8 1.4-3.2 3.2-3.2L64 304l16 0 272 0 0-16L80 288 80 64c0-26.5 21.5-48 48-48zM624 464c0 17.7-14.3 32-32 32l-160 0c-17.7 0-32-14.3-32-32l0-288c0-17.7 14.3-32 32-32l160 0c17.7 0 32 14.3 32 32l0 288zM432 512l160 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48l-160 0c-26.5 0-48 21.5-48 48l0 288c0 26.5 21.5 48 48 48z" />
    </Icon>
);

export default LaptopMobile;