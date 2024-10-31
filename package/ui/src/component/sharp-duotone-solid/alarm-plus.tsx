
import { Icon, generic } from "../../index";

/**
 * A component that renders the `alarm-plus` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/alarm-plus?s=sharp-duotone-solid alarm-plus}
 * @preview ![alarm-plus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/alarm-plus.svg)
 */
const AlarmPlus: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M32 288c0 50.3 16.6 96.8 44.6 134.2L57.4 441.4 34.7 464 80 509.3l22.6-22.6 19.2-19.2c37.4 28 83.8 44.6 134.1 44.6s96.8-16.6 134.2-44.6l19.2 19.2L432 509.3 477.3 464l-22.6-22.6-19.2-19.2c28-37.4 44.6-83.8 44.6-134.2C480 164.3 379.7 64 256 64S32 164.3 32 288zm112-24l24 0 64 0 0-64 0-24 48 0 0 24 0 64 64 0 24 0 0 48-24 0-64 0 0 64 0 24-48 0 0-24 0-64-64 0-24 0 0-48z" />
        <path d="M14.9 147.2C5.5 132.3 0 114.7 0 95.8C0 42.9 42.9 0 95.8 0c25.1 0 48 9.7 65.1 25.5L14.9 147.2zm482.1 0L351.1 25.5C368.2 9.7 391.1 0 416.2 0C469.1 0 512 42.9 512 95.8c0 18.9-5.5 36.5-14.9 51.4zM280 176l0 24 0 64 64 0 24 0 0 48-24 0-64 0 0 64 0 24-48 0 0-24 0-64-64 0-24 0 0-48 24 0 64 0 0-64 0-24 48 0z" />
    </Icon>
);

export default AlarmPlus;