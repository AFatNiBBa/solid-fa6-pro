
import { Icon, generic } from "../../index";

/**
 * A component that renders the `eye-dropper-full` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/eye-dropper-full?s=duotone eye-dropper-full}
 * @preview ![eye-dropper-full](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/eye-dropper-full.svg)
 */
const EyeDropperFull: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 480c0 8.3 3.2 16.5 9.4 22.6s14.4 9.4 22.6 9.4c6.1 0 12.3-1.8 17.7-5.4L89.7 480l42.4 0c21.2 0 41.6-8.4 56.6-23.4L332 313.3 286.7 268c-8.5 8.5-16.9 16.9-25.4 25.4L143.4 411.3c-3 3-7.1 4.7-11.3 4.7L96 416c0-12 0-24.1 0-36.1c0-.5 0-1.1 .1-1.6s.1-1 .2-1.6c.2-1 .5-2 .9-3c.8-1.9 2-3.7 3.5-5.2c39.3-39.3 78.6-78.6 117.9-117.9c8.5-8.5 16.9-16.9 25.4-25.4c-15.1-15.1-30.2-30.2-45.3-45.3L55.4 323.3c-15 15-23.4 35.4-23.4 56.6l0 42.4L5.4 462.2C1.8 467.7 0 473.8 0 480z" />
        <path d="M341.6 29.2L240.1 130.8l-9.4-9.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-9.4-9.4L482.8 170.4c39-39 39-102.2 0-141.1s-102.2-39-141.1 0zM143.4 411.3L261.4 293.4l-42.7-42.7L100.7 368.6c-3 3-4.7 7.1-4.7 11.3L96 416l36.1 0c4.2 0 8.3-1.7 11.3-4.7z" />
    </Icon>
);

export default EyeDropperFull;