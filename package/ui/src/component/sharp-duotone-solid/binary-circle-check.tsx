
import { Icon, generic } from "../../index";

/**
 * A component that renders the `binary-circle-check` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/binary-circle-check?s=sharp-duotone-solid binary-circle-check}
 * @preview ![binary-circle-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/binary-circle-check.svg)
 */
const BinaryCircleCheck: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 0L32 0 160 0l32 0 0 32 0 160 0 32-32 0L32 224 0 224l0-32L0 32 0 0zM0 288l32 0 48 0 32 0 0 32 0 128 16 0 32 0 0 64-32 0-48 0-48 0L0 512l0-64 32 0 16 0 0-96-16 0L0 352l0-64zM64 64l0 96 64 0 0-96L64 64zM192 288l32 0 115.2 0c-12.3 24-19.2 51.2-19.2 80l0-16-64 0 0 96 32 0 32 0 19.2 0c11 21.5 26.3 40.5 44.8 55.8l0 8.2-32 0-128 0-32 0 0-32 0-160 0-32zM224 0l32 0 48 0 32 0 0 32 0 128 16 0 32 0 0 64-32 0-48 0-48 0-32 0 0-64 32 0 16 0 0-96-16 0-32 0 0-64zm96 368c0 5.4 .2 10.7 .7 16l-.7 0 0-16z" />
        <path d="M496 512a144 144 0 1 0 0-288 144 144 0 1 0 0 288zm67.3-164.7l-72 72L480 430.6l-11.3-11.3-40-40L417.4 368 440 345.4l11.3 11.3L480 385.4l60.7-60.7L552 313.4 574.6 336l-11.3 11.3z" />
    </Icon>
);

export default BinaryCircleCheck;