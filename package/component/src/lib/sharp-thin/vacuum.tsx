
import { Icon } from "../../index";

/**
 * A component that renders the `vacuum` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/vacuum?s=sharp-thin vacuum}
 * @preview ![vacuum](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/vacuum.svg)
 */
const Vacuum: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M232 0l-6.4 0-1.4 6.2L173.9 224l16.4 0 48-208L528 16c53 0 96 43 96 96c0 39.5-23.9 73.4-58 88.2c-35.2-44-89.3-72.2-150-72.2l-48 0-16 0 0 16 0 148c5.2-1.3 10.6-2.4 16-3l0-145 48 0c97.2 0 176 78.8 176 176l0 176-108.1 0c-4.6 5.8-9.7 11.1-15.3 16L592 512l16 0 0-16 0-176c0-39.5-11.9-76.1-32.3-106.6c38-17.9 64.3-56.6 64.3-101.4C640 50.1 589.9 0 528 0L232 0zM183 256l-16.4 0L129.6 416 48 416 0 464l0 32 0 16 16 0 192 0 16 0 0-16 0-64 0-16-16 0-61.9 0L183 256zM135.8 432l.3 0 71.8 0 0 64L16 496l0-25.4L54.6 432l81.2 0zM384 336a80 80 0 1 1 0 160 80 80 0 1 1 0-160zm0 176a96 96 0 1 0 0-192 96 96 0 1 0 0 192zm-16-96a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm48 0a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
    </Icon>
);

export default Vacuum;