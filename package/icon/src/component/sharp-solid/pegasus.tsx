
import { Icon } from "../../index";

/**
 * A component that renders the `pegasus` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pegasus?s=sharp-solid pegasus}
 * @preview ![pegasus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/pegasus.svg)
 */
const Pegasus: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M448 238.1l0-78.1 16 0 32 64 80-32 0-128L544 32l16 0 16 0 0-32L560 0 480 0 448 0C377.3 0 320 57.3 320 128L160 32s-20.2 141.7 68.1 199.7c-8.7-2.7-16.7-6.1-24.2-10.1c-22.5-12.1-38.6-29.4-49.9-49.8c-7.3-13.2-12.7-27.8-16.5-43c-25.9 3.5-48.1 18.6-61.1 40C33.2 174.5 0 211.4 0 256l0 56 0 24 48 0 0-24 0-56c0-13.4 6.6-25.2 16.7-32.5c1.6 13 6.3 25.4 13.6 36.4l42.4 63.6L94.1 350.1l-21 21 9.4 28.1L120.1 512l101.2 0L182.9 397l27-27L224 355.9l0-19.9 0-16 83.7 23.9c4.1 1.2 8.2 2.1 12.3 2.8L320 512l96 0 0-196.3c19.2-19.2 31.5-45.7 32-75.7c0 0 0 0 0 0l0-1.9zM496 64a16 16 0 1 1 0 32 16 16 0 1 1 0-32z" />
    </Icon>
);

export default Pegasus;