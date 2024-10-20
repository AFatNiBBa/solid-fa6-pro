
import { Icon } from "../../index";

/**
 * A component that renders the `raygun` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/raygun?s=sharp-light raygun}
 * @preview ![raygun](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/raygun.svg)
 */
const Raygun: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M32 95.2l0 2.5C12.2 117.8 0 145.5 0 176c0 61.9 50.1 112 112 112L46.3 419.4 32 448l28.6 14.3 70.8 35.4L160 512l14.3-28.6L272 288l48 0 0 16 0 16 32 0 0-16 0-16 0-32 0-64 32 0 0 80 0 16 32 0 0-16 0-80 32 0 0 9.9 8.8 4.4 96 48L576 265.9l0-25.9 0-128 0-25.9L552.8 97.7l-96 48-8.8 4.4 0 9.9-32 0 0-80 0-16-32 0 0 16 0 80-32 0 0-64 0-32 0-16 0-16-32 0 0 16 0 16L198.4 64l-11.8-4.5L64 12.3 32 0l0 34.3 0 60.9zM64 46.6L109.3 64s0 0 0 0C93.1 64.4 77.8 68.2 64 74.8l0-28.2zM110.5 64c-.4 0-.8 0-1.1 0l1.1 0zM480 182.1l0-12.2 64-32 0 76.2-64-32zM320 176l0 80-32 0-35.8 0L128 256l-16 0c-44.2 0-80-35.8-80-80s35.8-80 80-80l208 0 0 80zM147.8 288l88.4 0L145.7 469.1 74.9 433.7 147.8 288zM112 192a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm80-16a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm48 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32z" />
    </Icon>
);

export default Raygun;