
import { Icon } from "../../index";

/**
 * A component that renders the `square-6` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-6?s=light square-6}
 * @preview ![square-6](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/square-6.svg)
 */
const Square_6: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M384 64c17.7 0 32 14.3 32 32l0 320c0 17.7-14.3 32-32 32L64 448c-17.7 0-32-14.3-32-32L32 96c0-17.7 14.3-32 32-32l320 0zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM224 224a64 64 0 1 1 0 128 64 64 0 1 1 0-128zm-96 64c0 53 43 96 96 96s96-43 96-96c0-51.8-41-94-92.3-95.9l39.1-36.3c6.5-6 6.9-16.1 .8-22.6s-16.1-6.9-22.6-.8l-82.7 76.8c-22 20.4-34.4 49-34.4 78.9z" />
    </Icon>
);

export default Square_6;