
import { Icon, generic } from "../../index";

/**
 * A component that renders the `alarm-exclamation` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/alarm-exclamation?s=duotone alarm-exclamation}
 * @preview ![alarm-exclamation](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/alarm-exclamation.svg)
 */
const AlarmExclamation: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M32 288c0 50.3 16.6 96.8 44.6 134.2L41.4 457.4C35.1 463.6 32 471.8 32 480s3.1 16.4 9.4 22.6c12.5 12.5 32.8 12.5 45.3 0l35.2-35.2c37.4 28 83.8 44.6 134.1 44.6s96.8-16.6 134.2-44.6l35.2 35.2c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-35.2-35.2c28-37.4 44.6-83.8 44.6-134.2C480 164.3 379.7 64 256 64S32 164.3 32 288zm256 96a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zM232 184c0-13.3 10.7-24 24-24s24 10.7 24 24l0 112c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-112z" />
        <path d="M160 25.4L14.9 146.4C5.5 131.6 0 114 0 95.2C0 42.6 42.6 0 95.2 0c25 0 47.8 9.6 64.8 25.4zm192 0C369 9.6 391.8 0 416.8 0C469.4 0 512 42.6 512 95.2c0 18.8-5.5 36.3-14.9 51.1L352 25.4zM224 384a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm56-200l0 112c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-112c0-13.3 10.7-24 24-24s24 10.7 24 24z" />
    </Icon>
);

export default AlarmExclamation;