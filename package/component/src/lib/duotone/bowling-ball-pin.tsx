
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bowling-ball-pin` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bowling-ball-pin?s=duotone bowling-ball-pin}
 * @preview ![bowling-ball-pin](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/bowling-ball-pin.svg)
 */
const BowlingBallPin: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M96 220a28 28 0 1 0 56 0 28 28 0 1 0 -56 0zm72-48a28 28 0 1 0 56 0 28 28 0 1 0 -56 0zm0 88a28 28 0 1 0 56 0 28 28 0 1 0 -56 0zM400.5 447.4l17.8 44.5C423.1 504 434.9 512 448 512l64 0c13.1 0 24.9-8 29.7-20.1L564.5 435c7.6-19.1 11.5-39.4 11.5-59.9c0-19-3.4-37.9-10-55.8L525.9 210.4c-2.2-6-3.8-12.1-4.8-18.4l-82.3 0c-1 6.3-2.6 12.4-4.8 18.4l-2.4 6.5c10.5 27 16.3 56.4 16.3 87.1c0 53.8-17.7 103.4-47.5 143.4zM416 64l0 1.1c0 7.4 1 14.8 2.9 22l17.7 64.8c.7 2.7 1.3 5.4 1.8 8.1l83.1 0c.5-2.7 1.1-5.4 1.8-8.1L541 87.1c2-7.2 3-14.6 3-22l0-1.1c0-35.3-28.7-64-64-64s-64 28.7-64 64z" />
        <path d="M0 304a208 208 0 1 1 416 0A208 208 0 1 1 0 304zM224 172a28 28 0 1 0 -56 0 28 28 0 1 0 56 0zM196 288a28 28 0 1 0 0-56 28 28 0 1 0 0 56zm-44-68a28 28 0 1 0 -56 0 28 28 0 1 0 56 0zm286.5-60l83.1 0c-1 5.7-1.5 11.4-1.5 17.2c0 5 .4 9.9 1.2 14.8l-82.3 0c.8-4.9 1.2-9.9 1.2-14.8c0-5.8-.5-11.5-1.5-17.2z" />
    </Icon>
);

export default BowlingBallPin;