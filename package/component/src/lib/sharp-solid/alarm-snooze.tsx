
import { Icon } from "../../index";

/**
 * A component that renders the `alarm-snooze` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/alarm-snooze?s=sharp-solid alarm-snooze}
 * @preview ![alarm-snooze](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/alarm-snooze.svg)
 */
const AlarmSnooze: typeof Icon = x => (
    <Icon {...x}>
        <path d="M160 25.4C143 9.6 120.2 0 95.2 0C42.6 0 0 42.6 0 95.2c0 18.8 5.5 36.3 14.9 51.1L160 25.4zM256 512c50.3 0 96.8-16.6 134.2-44.6l19.2 19.2L432 509.3 477.3 464l-22.6-22.6-19.2-19.2c28-37.4 44.6-83.8 44.6-134.2C480 164.3 379.7 64 256 64S32 164.3 32 288c0 50.3 16.6 96.8 44.6 134.2L57.4 441.4 34.7 464 80 509.3l22.6-22.6 19.2-19.2c37.4 28 83.8 44.6 134.1 44.6zM497.1 146.4C506.5 131.6 512 114 512 95.2C512 42.6 469.4 0 416.8 0C391.8 0 369 9.6 352 25.4L497.1 146.4zM200 192l96 0 40.8 0L317 227.7 256.8 336l55.2 0 24 0 0 48-24 0-96 0-40.8 0L195 348.3 255.2 240 200 240l-24 0 0-48 24 0z" />
    </Icon>
);

export default AlarmSnooze;