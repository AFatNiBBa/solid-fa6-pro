
import { Icon } from "../../index";

/**
 * A component that renders the `laptop-arrow-down` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/laptop-arrow-down?s=sharp-regular laptop-arrow-down}
 * @preview ![laptop-arrow-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/laptop-arrow-down.svg)
 */
const LaptopArrowDown: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M256 32L112 32 64 32l0 48 0 240 48 0 0-240 144 0 0-48zM384 80l144 0 0 240 48 0 0-240 0-48-48 0L384 32l0 48zM344 32l-48 0 0 24 0 182.1-39-39-17-17L206.1 216l17 17 80 80 17 17 17-17 80-80 17-17L400 182.1l-17 17-39 39L344 56l0-24zM83.9 432l-32-32 536.2 0-32 32L83.9 432zM576 480l64-64 0-16 0-48-48 0L48 352 0 352l0 48 0 16 64 64 512 0z" />
    </Icon>
);

export default LaptopArrowDown;