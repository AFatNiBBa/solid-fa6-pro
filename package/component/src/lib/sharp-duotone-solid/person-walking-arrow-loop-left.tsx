
import { Icon, generic } from "../../index";

/**
 * A component that renders the `person-walking-arrow-loop-left` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-walking-arrow-loop-left?s=sharp-duotone-solid person-walking-arrow-loop-left}
 * @preview ![person-walking-arrow-loop-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/person-walking-arrow-loop-left.svg)
 */
const PersonWalkingArrowLoopLeft: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M2.7 464L48 509.3l22.6-22.6 48-48 4.6-4.6 2.4-6.1 15.7-39.3-40.7-44.4c-2.5-2.7-4.8-5.6-7-8.6L68.7 398 25.4 441.4 2.7 464zM7.5 260.2l60.7 20.2 10.1-30.4 11.5-34.6 36.7-16.3-17 63.6c-5.6 21.1-.1 43.6 14.7 59.7l70.9 77.4 22 80.5 8.4 30.9 61.7-16.8-8.4-30.9-24-88-2-7.5-5.2-5.7-52.3-57 18.4-62.4 13.7 27.4 4.8 9.5 9.5 4.8 48 24 28.6-57.2-38.5-19.2-35.2-70.5-7-14-15.3-3.1-80-16-10-2-9.3 4.1-72 32-12.9 5.7-4.5 13.4-16 48L7.5 260.2zM160 48a48 48 0 1 0 96 0 48 48 0 1 0 -96 0z" />
        <path d="M464 477.3l-22.6-22.6-80-80L338.7 352l22.6-22.6 80-80L464 226.7 509.3 272l-22.6 22.6L461.3 320 576 320l0-192-224 0-32 0 0-64 32 0 256 0 32 0 0 32 0 256 0 32-32 0-146.7 0 25.4 25.4L509.3 432 464 477.3z" />
    </Icon>
);

export default PersonWalkingArrowLoopLeft;