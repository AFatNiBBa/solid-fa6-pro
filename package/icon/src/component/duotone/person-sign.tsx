
import { Icon, generic } from "../../index";

/**
 * A component that renders the `person-sign` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-sign?s=duotone person-sign}
 * @preview ![person-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/person-sign.svg)
 */
const PersonSign: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M258.1 134.5c0 9.8 6.1 19 15.8 22.6l59.7 21.7c-5.1 14.1-10.3 28.2-15.4 42.3c-7.3 20.1-14.6 40.1-21.9 60.1c-2.4 6.7-4.9 13.4-7.3 20.2c-4.5 12.5 1.9 26.2 14.3 30.8s26.2-1.9 30.8-14.3l44.6-122.6 60.6 22c12.5 4.5 26.2-1.9 30.8-14.3L508.4 97.7c4.5-12.5-1.9-26.2-14.3-30.8l-60.6-22 4.6-12.7c4.5-12.5-1.9-26.2-14.3-30.8c-2.7-1-5.5-1.5-8.2-1.5c-9.8 0-19 6.1-22.6 15.8l-4.6 12.7L328.7 6.7c-12.5-4.5-26.2 1.9-30.8 14.3L259.6 126.3c-1 2.7-1.5 5.5-1.5 8.2z" />
        <path d="M318.3 221.2l-28.8-10.8c-9.7-3.7-18.4-9.6-25.4-17.4L235 160.2c-18.2-20.5-44.3-32.2-71.8-32.2l-27.7 0c-36.4 0-69.6 20.5-85.9 53.1L3.4 273.7c-7.9 15.8-1.5 35 14.3 42.9s35 1.5 42.9-14.3L80 263.5 80 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-128 20.2 0L192 407.5l0 72.4c0 17.7 14.3 32 32 32s32-14.3 32-32l0-72.4c0-9.9-2.3-19.7-6.8-28.6L216 312.4l0-77.3 .3 .3C230.1 251 247.5 263 267 270.3l29.3 11 21.9-60.1zM144 96a48 48 0 1 0 0-96 48 48 0 1 0 0 96z" />
    </Icon>
);

export default PersonSign;