
import { Icon } from "../../index";

/**
 * A component that renders the `laptop-arrow-down` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/laptop-arrow-down?s=solid laptop-arrow-down}
 * @preview ![laptop-arrow-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/laptop-arrow-down.svg)
 */
const LaptopArrowDown: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M128 32C92.7 32 64 60.7 64 96l0 256 64 0 0-256 128 0 0-64L128 32zM512 96l0 256 64 0 0-256c0-35.3-28.7-64-64-64L384 32l0 64 128 0zM19.2 384C8.6 384 0 392.6 0 403.2C0 445.6 34.4 480 76.8 480l486.4 0c42.4 0 76.8-34.4 76.8-76.8c0-10.6-8.6-19.2-19.2-19.2L19.2 384zM344 56c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 182.1-39-39c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l80 80c9.4 9.4 24.6 9.4 33.9 0l80-80c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-39 39L344 56z" />
    </Icon>
);

export default LaptopArrowDown;