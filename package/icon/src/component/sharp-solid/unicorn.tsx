
import { Icon } from "../../index";

/**
 * A component that renders the `unicorn` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/unicorn?s=sharp-solid unicorn}
 * @preview ![unicorn](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/unicorn.svg)
 */
const Unicorn: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M448 160l0 78.1 0 1.9s0 0 0 0c-.5 30-12.8 56.4-32 75.7L416 512l-96 0 0-165.3c-4.1-.7-8.2-1.6-12.3-2.8L224 320l0 16 0 19.9-14.1 14.1-27 27 38.3 115-101.2 0L82.5 399.2 73.1 371l21-21 26.6-26.6L78.2 259.9c-7.3-11-11.9-23.4-13.6-36.4C54.6 230.8 48 242.6 48 256l0 56 0 24L0 336l0-24 0-56c0-44.6 33.2-81.5 76.3-87.2c14.9-24.4 41.8-40.8 72.5-40.8l54.4 0 52.8 0 64 0C320 57.3 377.3 0 448 0l32 0 64 0 16 0 0 32-16 0-16 0 16 16 96 0 0 16L560 90.7 560 192l-80 32-32-64zm64-80a16 16 0 1 0 -32 0 16 16 0 1 0 32 0z" />
    </Icon>
);

export default Unicorn;