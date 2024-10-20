
import { Icon, generic } from "../../index";

/**
 * A component that renders the `alarm-plus` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/alarm-plus?s=duotone alarm-plus}
 * @preview ![alarm-plus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/alarm-plus.svg)
 */
const AlarmPlus: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M32 288c0 50.3 16.6 96.8 44.6 134.2L41.4 457.4C35.1 463.6 32 471.8 32 480s3.1 16.4 9.4 22.6c12.5 12.5 32.8 12.5 45.3 0l35.2-35.2c37.4 28 83.8 44.6 134.1 44.6s96.8-16.6 134.2-44.6l35.2 35.2c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-35.2-35.2c28-37.4 44.6-83.8 44.6-134.2C480 164.3 379.7 64 256 64S32 164.3 32 288zm112 0c0-13.3 10.7-24 24-24l64 0 0-64c0-13.3 10.7-24 24-24s24 10.7 24 24l0 64 64 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-64 0 0 64c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-64-64 0c-13.3 0-24-10.7-24-24z" />
        <path d="M14.9 146.4L160 25.4C143 9.6 120.2 0 95.2 0C42.6 0 0 42.6 0 95.2c0 18.8 5.5 36.3 14.9 51.1zM280 200c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 64-64 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l64 0 0 64c0 13.3 10.7 24 24 24s24-10.7 24-24l0-64 64 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-64 0 0-64zM352 25.4L497.1 146.4C506.5 131.6 512 114 512 95.2C512 42.6 469.4 0 416.8 0C391.8 0 369 9.6 352 25.4z" />
    </Icon>
);

export default AlarmPlus;