
import { Icon, generic } from "../../index";

/**
 * A component that renders the `rotate-exclamation` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rotate-exclamation?s=duotone rotate-exclamation}
 * @preview ![rotate-exclamation](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/rotate-exclamation.svg)
 */
const RotateExclamation: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M16 320l0 112c0 17.7 14.3 32 32 32s32-14.3 32-32l0-37.4c41 52 104.6 85.4 176 85.4c97.6 0 180.5-62.4 211.2-149.3c5.9-16.7-2.8-34.9-19.5-40.8s-34.9 2.8-40.8 19.5C384.9 371.5 325.6 416 256 416c-52.3 0-98.8-25.1-128-64l32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L48 288c-17.7 0-32 14.3-32 32zM44.8 181.3c-5.9 16.7 2.8 34.9 19.5 40.8s34.9-2.8 40.8-19.5C127.1 140.5 186.4 96 256 96c52.3 0 98.8 25.1 128 64l-32 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l84.3 0c.5 0 1 0 1.5 0l26.2 0c17.7 0 32-14.3 32-32l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 37.4C391 65.4 327.4 32 256 32C158.4 32 75.5 94.4 44.8 181.3z" />
        <path d="M280 152c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112zM256 384a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
    </Icon>
);

export default RotateExclamation;