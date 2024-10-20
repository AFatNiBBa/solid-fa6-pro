
import { Icon } from "../../index";

/**
 * A component that renders the `laptop-mobile` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/laptop-mobile?s=light laptop-mobile}
 * @preview ![laptop-mobile](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/laptop-mobile.svg)
 */
const LaptopMobile: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M128 32l320 0c17.7 0 32 14.3 32 32l0 32 32 0 0-32c0-35.3-28.7-64-64-64L128 0C92.7 0 64 28.7 64 64l0 224-44.8 0C8.6 288 0 296.6 0 307.2C0 349.6 34.4 384 76.8 384L352 384l0-32L76.8 352c-20.3 0-37.4-13.5-42.9-32L64 320l32 0 256 0 0-32L96 288 96 64c0-17.7 14.3-32 32-32zM608 464c0 8.8-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16l0-288c0-8.8 7.2-16 16-16l160 0c8.8 0 16 7.2 16 16l0 288zM432 512l160 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48l-160 0c-26.5 0-48 21.5-48 48l0 288c0 26.5 21.5 48 48 48z" />
    </Icon>
);

export default LaptopMobile;