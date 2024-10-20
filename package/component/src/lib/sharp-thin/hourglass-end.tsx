
import { Icon } from "../../index";

/**
 * A component that renders the `hourglass-end` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hourglass-end?s=sharp-thin hourglass-end}
 * @preview ![hourglass-end](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/hourglass-end.svg)
 */
const HourglassEnd: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M0 0L8 0 376 0l8 0 0 16-8 0-24 0 0 128 0 4-3.3 2.4L205.5 256l130.3 96 .2 0 0 .2 12.7 9.4L352 364l0 4 0 128 24 0 8 0 0 16-8 0L8 512l-8 0 0-16 8 0 24 0 0-128 0-4 3.3-2.4L48 352.2l0-.2 .2 0 130.3-96L35.3 150.4 32 148l0-4L32 16 8 16 0 16 0 0zM53.5 368L48 372l0 124 288 0 0-124-5.5-4-277 0zm255.3-16L192 265.9 75.2 352l233.6 0zM48 16l0 124L192 246.1 336 140l0-124L48 16z" />
    </Icon>
);

export default HourglassEnd;