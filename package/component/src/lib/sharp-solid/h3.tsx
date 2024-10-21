
import { Icon } from "../../index";

/**
 * A component that renders the `h3` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/h3?s=sharp-solid h3}
 * @preview ![h3](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/h3.svg)
 */
const H3: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M64 96l0-32L0 64 0 96 0 256 0 416l0 32 64 0 0-32 0-128 192 0 0 128 0 32 64 0 0-32 0-160 0-160 0-32-64 0 0 32 0 128L64 224 64 96zm560 13.3L624 64l-32 0L400 64l-32 0 0 64 32 0 114.7 0L432 210.7l0 61.3 16 0 72 0c30.9 0 56 25.1 56 56s-25.1 56-56 56l-60.3 0c-11 0-20.6-7.5-23.3-18.2L431 344.2 369 359.8l5.4 21.6c9.8 39.2 45 66.7 85.4 66.7l60.3 0c55.2 0 101.7-37.3 115.7-88l4.3 0 0-32c0-64.6-51-117.2-114.9-119.9l89.5-89.5 9.4-9.4z" />
    </Icon>
);

export default H3;