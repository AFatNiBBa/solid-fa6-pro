
import { Icon } from "../../index";

/**
 * A component that renders the `h2` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/h2?s=solid h2}
 * @preview ![h2](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/h2.svg)
 */
const H2: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M64 96c0-17.7-14.3-32-32-32S0 78.3 0 96L0 256 0 416c0 17.7 14.3 32 32 32s32-14.3 32-32l0-128 192 0 0 128c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160 0-160c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 128L64 224 64 96zm385.9 47.4c11.6-9.9 26.4-15.4 41.7-15.4l4.5 0c35.3 0 64 28.7 64 64l0 5.8c0 17.9-7.5 35.1-20.8 47.2L378.4 392.4c-9.7 8.9-13 22.9-8.2 35.2S386.8 448 400 448l208 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-125.7 0 100.2-91.9c26.4-24.2 41.5-58.5 41.5-94.4l0-5.8c0-70.7-57.3-128-128-128l-4.5 0c-30.6 0-60.1 10.9-83.3 30.8l-29 24.9c-13.4 11.5-15 31.7-3.5 45.1s31.7 15 45.1 3.5l29-24.9z" />
    </Icon>
);

export default H2;