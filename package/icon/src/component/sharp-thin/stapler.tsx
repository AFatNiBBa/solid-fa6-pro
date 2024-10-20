
import { Icon } from "../../index";

/**
 * A component that renders the `stapler` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/stapler?s=sharp-thin stapler}
 * @preview ![stapler](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/stapler.svg)
 */
const Stapler: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M448 352l0 64L48 416l-16 0 0 16 0 32 0 16 16 0 576 0 16 0 0-16 0-32 0-16 0-80 0-16 0-64L256.6 64.3c-21.4-10.7-45-16.3-69-16.3C131.1 48 79.2 78.8 52.1 128.4L7.9 209.5 0 224l16 4 32 8 0 108 0 8 8 0 392 0zm0-16L64 336l0-96 384 96zm176 80l-160 0 0-80 0-12.5-12.1-3L24 213.5l42.2-77.4C90.4 91.6 137 64 187.6 64c21.5 0 42.6 5 61.8 14.6L624 265.9l0 54.1 0 16 0 80zM464 432l160 0 0 32L48 464l0-32 400 0 16 0z" />
    </Icon>
);

export default Stapler;