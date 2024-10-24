
import { Icon } from "../../index";

/**
 * A component that renders the `mitten` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mitten?s=sharp-light mitten}
 * @preview ![mitten](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/mitten.svg)
 */
const Mitten: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 135.4C0 60.6 60.6 0 135.4 0C195.1 0 247.7 39.1 265 96.2l30.8 101.7 18.7-30.3 8.2-13.3 13.5 7.9 96 56 13.2 7.7-7.1 13.6L370.5 368l-36.2 0 68.4-129.9-69.3-40.4L304.3 245l-18.6 30.3-10.3-34.1L234.3 105.5C221.1 61.8 180.9 32 135.4 32C78.3 32 32 78.3 32 135.4l0 8.9c0 9.2 1.1 18.3 3.3 27.2L84.5 368l-33 0L4.3 179.2C1.4 167.7 0 156 0 144.2l0-8.9zM64 432l0 48 288 0 0-48L64 432zM32 400l32 0 288 0 32 0 0 32 0 48 0 32-32 0L64 512l-32 0 0-32 0-48 0-32z" />
    </Icon>
);

export default Mitten;