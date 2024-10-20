
import { Icon } from "../../index";

/**
 * A component that renders the `bell` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bell?s=sharp-light bell}
 * @preview ![bell](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/bell.svg)
 */
const Bell: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M208 0l32 0 0 32.8c80.9 8 144 76.2 144 159.2l0 97.4 59.3 59.3 4.7 4.7 0 6.6 0 40 0 16-16 0L16 416 0 416l0-16 0-40 0-6.6 4.7-4.7L64 289.4 64 192c0-83 63.1-151.2 144-159.2L208 0zm16 64C153.3 64 96 121.3 96 192l0 104 0 6.6-4.7 4.7L32 366.6 32 384l384 0 0-17.4-59.3-59.3-4.7-4.7 0-6.6 0-104c0-70.7-57.3-128-128-128zM160 448l32 0c0 17.7 14.3 32 32 32s32-14.3 32-32l32 0c0 35.3-28.7 64-64 64s-64-28.7-64-64z" />
    </Icon>
);

export default Bell;