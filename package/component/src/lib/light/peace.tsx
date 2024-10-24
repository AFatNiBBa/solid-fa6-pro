
import { Icon } from "../../index";

/**
 * A component that renders the `peace` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/peace?s=light peace}
 * @preview ![peace](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/peace.svg)
 */
const Peace: typeof Icon = x => (
    <Icon {...x}>
        <path d="M240 479.4l0-189.7L93.2 409.9c37.4 39.6 89.1 65.5 146.8 69.6zM72.9 385.1L240 248.4l0-215.9C123.8 40.8 32 137.7 32 256c0 48.1 15.1 92.6 40.9 129.1zM256 512A256 256 0 1 1 256 0a256 256 0 1 1 0 512zm16-32.6c57.7-4.1 109.4-30 146.8-69.6L272 289.8l0 189.7zm167.1-94.3c25.8-36.5 40.9-81 40.9-129.1c0-118.3-91.8-215.2-208-223.4l0 215.9L439.1 385.1z" />
    </Icon>
);

export default Peace;