
import { Icon } from "../../index";

/**
 * A component that renders the `bridge` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bridge?s=sharp-thin bridge}
 * @preview ![bridge](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/bridge.svg)
 */
const Bridge: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M8 32L0 32 0 48l8 0 80 0 0 96L8 144l-8 0 0 16 8 0 560 0 8 0 0-16-8 0-80 0 0-96 80 0 8 0 0-16-8 0L8 32zM472 48l0 96-112 0 0-96 112 0zM344 48l0 96-112 0 0-96 112 0zM216 48l0 96-112 0 0-96 112 0zM8 256l-8 0 0 16 8 0 24 0c39.8 0 72 32.2 72 72l0 128 0 8 8 0 96 0 8 0 0-8 0-128c0-39.8 32.2-72 72-72s72 32.2 72 72l0 128 0 8 8 0 96 0 8 0 0-8 0-128c0-39.8 32.2-72 72-72l24 0 8 0 0-16-8 0-24 0c-48.6 0-88 39.4-88 88l0 120-80 0 0-120c0-48.6-39.4-88-88-88s-88 39.4-88 88l0 120-80 0 0-120c0-48.6-39.4-88-88-88L8 256z" />
    </Icon>
);

export default Bridge;