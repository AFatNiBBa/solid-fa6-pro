
import { Icon } from "../../index";

/**
 * A component that renders the `alarm-snooze` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/alarm-snooze?s=sharp-regular alarm-snooze}
 * @preview ![alarm-snooze](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/alarm-snooze.svg)
 */
const AlarmSnooze: typeof Icon = x => (
    <Icon {...x}>
        <path d="M160 25.4C143 9.6 120.2 0 95.2 0C42.6 0 0 42.6 0 95.2c0 18.8 5.5 36.3 14.9 51.1L160 25.4zM256 112a176 176 0 1 1 0 352 176 176 0 1 1 0-352zm0 400c53.2 0 102.1-18.6 140.5-49.5L423 489l17 17L473.9 472l-17-17-26.5-26.5c31-38.4 49.5-87.3 49.5-140.5C480 164.3 379.7 64 256 64S32 164.3 32 288c0 53.2 18.6 102.1 49.5 140.5L55 455l-17 17L72 505.9l17-17 26.5-26.5c38.4 31 87.3 49.5 140.5 49.5zM497.1 146.4C506.5 131.6 512 114 512 95.2C512 42.6 469.4 0 416.8 0C391.8 0 369 9.6 352 25.4L497.1 146.4zM200 192l-24 0 0 48 24 0 55.2 0L195 348.3 175.2 384l40.8 0 96 0 24 0 0-48-24 0-55.2 0L317 227.7 336.8 192 296 192l-96 0z" />
    </Icon>
);

export default AlarmSnooze;