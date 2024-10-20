
import { Icon } from "../../index";

/**
 * A component that renders the `h3` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/h3?s=solid h3}
 * @preview ![h3](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/h3.svg)
 */
const H3: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M64 96c0-17.7-14.3-32-32-32S0 78.3 0 96L0 256 0 416c0 17.7 14.3 32 32 32s32-14.3 32-32l0-128 192 0 0 128c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160 0-160c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 128L64 224 64 96zM400 64c-17.7 0-32 14.3-32 32s14.3 32 32 32l114.7 0-89.4 89.4c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8l72 0c30.9 0 56 25.1 56 56s-25.1 56-56 56l-64.6 0c-11.7 0-21.7-8.5-23.7-20.1l-.2-1.2c-2.9-17.4-19.4-29.2-36.8-26.3s-29.2 19.4-26.3 36.8l.2 1.2c7.1 42.4 43.8 73.5 86.8 73.5l64.6 0c66.3 0 120-53.7 120-120c0-64.6-51-117.2-114.9-119.9l89.5-89.5c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L400 64z" />
    </Icon>
);

export default H3;