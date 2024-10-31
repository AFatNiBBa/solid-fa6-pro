
import { Icon } from "../../index";

/**
 * A component that renders the `people-arrows` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/people-arrows?s=sharp-light people-arrows}
 * @preview ![people-arrows](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/people-arrows.svg)
 */
const PeopleArrows: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M128 96a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm0-96a64 64 0 1 1 0 128A64 64 0 1 1 128 0zM62.7 192L57.4 320l6.6 0 32 0 28.1 0 17.9 17.9L156.1 352 96 352l0 144 0 16-32 0 0-16 0-144-8 0-32 0 1.3-32L32 160l192 0 1.1 27-19.1 19.1-11.7 11.7L193.3 192 62.7 192zM160 496l0-140.1 32 32L192 496l0 16-32 0 0-16zm288 0l0-108.1 32-32L480 496l0 16-32 0 0-16zm96-144l-60.1 0 14.1-14.1L515.9 320l28.1 0 32 0 6.6 0-5.3-128-130.6 0-1.1 25.7-11.7-11.7L414.9 187l1.1-27 192 0 6.7 160 1.3 32-32 0-8 0 0 144 0 16-32 0 0-16 0-144zM512 96a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm0-96a64 64 0 1 1 0 128A64 64 0 1 1 512 0zM251.3 251.3L214.6 288l210.7 0-36.7-36.7L377.4 240 400 217.4l11.3 11.3 64 64L486.6 304l-11.3 11.3-64 64L400 390.6 377.4 368l11.3-11.3L425.4 320l-210.7 0 36.7 36.7L262.6 368 240 390.6l-11.3-11.3-64-64L153.4 304l11.3-11.3 64-64L240 217.4 262.6 240l-11.3 11.3z" />
    </Icon>
);

export default PeopleArrows;