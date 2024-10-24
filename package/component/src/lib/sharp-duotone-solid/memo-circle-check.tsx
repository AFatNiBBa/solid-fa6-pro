
import { Icon, generic } from "../../index";

/**
 * A component that renders the `memo-circle-check` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/memo-circle-check?s=sharp-duotone-solid memo-circle-check}
 * @preview ![memo-circle-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/memo-circle-check.svg)
 */
const MemoCircleCheck: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 0L384 0l0 198.6C310.1 219.5 256 287.4 256 368c0 59.5 29.6 112.1 74.8 144L0 512 0 0zM64 128l0 32 16 0 224 0 16 0 0-32-16 0L80 128l-16 0zm0 96l0 32 16 0 160 0 16 0 0-32-16 0L80 224l-16 0zm0 96l0 32 16 0 96 0 16 0 0-32-16 0-96 0-16 0z" />
        <path d="M432 512a144 144 0 1 0 0-288 144 144 0 1 0 0 288zm67.3-164.7l-72 72L416 430.6l-11.3-11.3-40-40L353.4 368 376 345.4l11.3 11.3L416 385.4l60.7-60.7L488 313.4 510.6 336l-11.3 11.3z" />
    </Icon>
);

export default MemoCircleCheck;