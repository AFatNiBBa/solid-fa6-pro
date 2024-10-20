
import { Icon, generic } from "../../index";

/**
 * A component that renders the `floppy-disk-circle-arrow-right` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/floppy-disk-circle-arrow-right?s=sharp-duotone-solid floppy-disk-circle-arrow-right}
 * @preview ![floppy-disk-circle-arrow-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/floppy-disk-circle-arrow-right.svg)
 */
const FloppyDiskCircleArrowRight: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 32l32 0 288 0 13.3 0 9.4 9.4 96 96 9.4 9.4 0 13.3 0 32.7c-5.3-.5-10.6-.7-16-.7c-75 0-139.1 47-164.4 113.1C256.1 294.5 240.8 288 224 288c-35.3 0-64 28.7-64 64s28.7 64 64 64c13.3 0 25.7-4.1 35.9-11c6 28.1 18.7 53.7 36.3 75L32 480 0 480l0-32L0 64 0 32zM64 96l0 128 256 0 0-128L64 96z" />
        <path d="M432 512a144 144 0 1 0 0-288 144 144 0 1 0 0 288zm19.3-211.3l56 56L518.6 368l-11.3 11.3-56 56L440 446.6 417.4 424l11.3-11.3L457.4 384 368 384l-16 0 0-32 16 0 89.4 0-28.7-28.7L417.4 312 440 289.4l11.3 11.3z" />
    </Icon>
);

export default FloppyDiskCircleArrowRight;