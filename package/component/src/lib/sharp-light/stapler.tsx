
import { Icon } from "../../index";

/**
 * A component that renders the `stapler` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/stapler?s=sharp-light stapler}
 * @preview ![stapler](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/stapler.svg)
 */
const Stapler: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M448 352l0 32L64 384l-32 0 0 32 0 32 0 32 32 0 544 0 32 0 0-32 0-32 0-32 0-48 0-32 0-64L255.6 47.8C234.8 37.4 211.9 32 188.6 32C131.9 32 80 64.1 54.6 114.8L14.7 194.7 0 224l31.8 8L72 242l0 94 0 16 16 0 360 0zm-64-32l-280 0 0-70 280 70zm224 64l-128 0 0-48 0-25L455.8 305 46.5 202.6l36.7-73.5C103.2 89.2 144 64 188.6 64c18.3 0 36.3 4.3 52.7 12.4L608 259.8l0 44.2 0 32 0 48zM480 416l128 0 0 32L64 448l0-32 384 0 32 0z" />
    </Icon>
);

export default Stapler;