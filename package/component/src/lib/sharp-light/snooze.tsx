
import { Icon } from "../../index";

/**
 * A component that renders the `snooze` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/snooze?s=sharp-light snooze}
 * @preview ![snooze](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/snooze.svg)
 */
const Snooze: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M160 0l16 0L304 0l16 0 0 16 0 8 0 7.3L314.5 36 209.4 128l94.6 0 16 0 0 32-16 0-128 0-16 0 0-16 0-8 0-7.3 5.5-4.8L270.6 32 176 32l-16 0 0-32zM0 224l16 0 192 0 16 0 0 16 0 8 0 5.6-3.5 4.4L42.9 480 208 480l16 0 0 32-16 0L16 512 0 512l0-16 0-8 0-5.6L3.5 478 181.1 256 16 256 0 256l0-32zm304 0l128 0 16 0 0 16 0 8 0 6.1-4 4.5L332.5 384l99.5 0 16 0 0 32-16 0-128 0-16 0 0-16 0-8 0-6.1 4-4.5L403.5 256 304 256l-16 0 0-32 16 0z" />
    </Icon>
);

export default Snooze;