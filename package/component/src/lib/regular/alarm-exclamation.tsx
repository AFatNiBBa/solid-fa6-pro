
import { Icon } from "../../index";

/**
 * A component that renders the `alarm-exclamation` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/alarm-exclamation?s=regular alarm-exclamation}
 * @preview ![alarm-exclamation](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/alarm-exclamation.svg)
 */
const AlarmExclamation: typeof Icon = x => (
    <Icon {...x}>
        <path d="M14.9 146.4C5.5 131.6 0 114 0 95.2C0 42.6 42.6 0 95.2 0c25 0 47.8 9.6 64.8 25.4L14.9 146.4zM432 288A176 176 0 1 0 80 288a176 176 0 1 0 352 0zM396.5 462.5C358.1 493.4 309.2 512 256 512s-102.1-18.6-140.5-49.5L73 505c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l42.5-42.5C50.6 390.1 32 341.2 32 288C32 164.3 132.3 64 256 64s224 100.3 224 224c0 53.2-18.6 102.1-49.5 140.5L473 471c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-42.5-42.5zM352 25.4C369 9.6 391.8 0 416.8 0C469.4 0 512 42.6 512 95.2c0 18.8-5.5 36.3-14.9 51.1L352 25.4zM256 352a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm24-168l0 112c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-112c0-13.3 10.7-24 24-24s24 10.7 24 24z" />
    </Icon>
);

export default AlarmExclamation;