
import { Icon } from "../../index";

/**
 * A component that renders the `laptop-arrow-down` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/laptop-arrow-down?s=regular laptop-arrow-down}
 * @preview ![laptop-arrow-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/laptop-arrow-down.svg)
 */
const LaptopArrowDown: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M256 32l0 48L128 80c-8.8 0-16 7.2-16 16l0 224-48 0L64 96c0-35.3 28.7-64 64-64l128 0zM384 80l0-48 128 0c35.3 0 64 28.7 64 64l0 224-48 0 0-224c0-8.8-7.2-16-16-16L384 80zM320 32c13.3 0 24 10.7 24 24l0 182.1 39-39c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-80 80c-9.4 9.4-24.6 9.4-33.9 0l-80-80c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l39 39L296 56c0-13.3 10.7-24 24-24zM96 432l448 0c20.9 0 38.7-13.4 45.3-32L50.7 400c6.6 18.6 24.4 32 45.3 32zM0 384c0-17.7 14.3-32 32-32l576 0c17.7 0 32 14.3 32 32c0 53-43 96-96 96L96 480c-53 0-96-43-96-96z" />
    </Icon>
);

export default LaptopArrowDown;