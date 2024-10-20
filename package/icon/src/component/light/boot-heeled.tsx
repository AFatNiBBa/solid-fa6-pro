
import { Icon } from "../../index";

/**
 * A component that renders the `boot-heeled` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/boot-heeled?s=light boot-heeled}
 * @preview ![boot-heeled](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/boot-heeled.svg)
 */
const BootHeeled: typeof Icon = x => (
    <Icon {...x}>
        <path d="M37 0C16.5 0 0 16.5 0 37c0 3.5 .5 7 1.5 10.3C6.5 65.1 32 158.5 32 232c0 15.4-3.7 37.3-9 60C17.9 314.4 11.6 336.3 7 351.5C2.6 366 0 381.3 0 396.9L0 432l0 64c0 8.8 7.2 16 16 16l96 0c8.8 0 16-7.2 16-16l0-46.5 118.9 52.8c14.3 6.4 29.8 9.7 45.5 9.7L464 512l32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-16 0 0-34.3c0-24.2-13.7-46.4-35.4-57.2L300.2 316.2C273.1 302.7 256 275 256 244.7L256 40c0-22.1-17.9-40-40-40L112 0 37 0zM96 32l0 208c0 8.8 7.2 16 16 16s16-7.2 16-16l0-208 88 0c4.4 0 8 3.6 8 8l0 204.7c0 42.4 24 81.2 61.9 100.2L430.3 417c10.8 5.4 17.7 16.5 17.7 28.6l0 34.3-155.6 0c-11.2 0-22.3-2.3-32.5-6.9L134.5 417.4c-2-.9-4.3-1.4-6.5-1.4l-16 0-80 0 0-19.1c0-12.1 2-24.2 5.6-36.1c4.7-15.5 11.3-38.2 16.6-61.6c5.3-23 9.8-47.9 9.8-67.2C64 153.5 37.2 56.2 32.2 38.5c-.2-.6-.2-1.1-.2-1.6c0-2.7 2.2-5 5-5l59 0zm0 448l-64 0 0-32 64 0 0 32z" />
    </Icon>
);

export default BootHeeled;