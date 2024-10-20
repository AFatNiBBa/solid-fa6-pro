
import { Icon } from "../../index";

/**
 * A component that renders the `h5` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/h5?s=solid h5}
 * @preview ![h5](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/h5.svg)
 */
const H5: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M64 96c0-17.7-14.3-32-32-32S0 78.3 0 96L0 256 0 416c0 17.7 14.3 32 32 32s32-14.3 32-32l0-128 192 0 0 128c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160 0-160c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 128L64 224 64 96zM432 64c-15.1 0-28.2 10.6-31.3 25.4l-32 152c-2 9.4 .4 19.3 6.5 26.8s15.2 11.8 24.8 11.8l124 0c28.7 0 52 23.3 52 52s-23.3 52-52 52l-67.6 0c-10.3 0-19.5-6.6-22.8-16.4l-3.2-9.7c-5.6-16.8-23.7-25.8-40.5-20.2s-25.8 23.7-20.2 40.5l3.2 9.7c12 35.9 45.6 60.2 83.5 60.2l67.6 0c64.1 0 116-51.9 116-116s-51.9-116-116-116l-84.6 0L458 128l118 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L432 64z" />
    </Icon>
);

export default H5;