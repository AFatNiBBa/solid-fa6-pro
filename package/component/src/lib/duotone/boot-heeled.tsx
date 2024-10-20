
import { Icon, generic } from "../../index";

/**
 * A component that renders the `boot-heeled` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/boot-heeled?s=duotone boot-heeled}
 * @preview ![boot-heeled](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/boot-heeled.svg)
 */
const BootHeeled: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M32 416l0 72c0 13.3 10.7 24 24 24l80 0c13.3 0 24-10.7 24-24l0-15.1 125 34.7c10.5 2.9 21.3 4.4 32.1 4.4L456 512l32 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-8 0-160 0L160 416 32 416z" />
        <path d="M63.3 0L128 0l0 240c0 8.8 7.2 16 16 16s16-7.2 16-16L160 0 264 0c13.3 0 24 10.7 24 24l0 220.7c0 27.3 15.4 52.2 39.8 64.4l112.4 56.2c24.4 12.2 39.8 37.1 39.8 64.4l0 34.3-160 0L160 416 32 416l0-24.2c0-12.5 1.6-24.8 4.3-36.6C43.2 325.5 56 265.2 56 232C56 154.3 34.6 47.1 32.6 37.4c-.5-2.3-.6-4.3-.6-6.2C32 14 46 0 63.3 0z" />
    </Icon>
);

export default BootHeeled;