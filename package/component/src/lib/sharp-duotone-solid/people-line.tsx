
import { Icon, generic } from "../../index";

/**
 * A component that renders the `people-line` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/people-line?s=sharp-duotone-solid people-line}
 * @preview ![people-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/people-line.svg)
 */
const PeopleLine: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M7.4 358.1l42 23.3 11.7-21 27-48.6L88 384l112 0 0-72.2 27 48.6 11.7 21 42-23.3-11.7-21-35.2-63.5 3.4-6.3L264 217.5l0 86.5 112 0 0-86.5 26.9 49.9 3.4 6.3L371 337.1l-11.7 21 42 23.3 11.7-21 27-48.6 0 72.2 112 0 0-72.2 27 48.6 11.7 21 42-23.3-11.7-21L565 236.3 558.1 224 544 224l-96 0-14 0-44.9-83.4L382.3 128 368 128l-96 0-14.3 0-6.8 12.6L206 224l-14 0-96 0-14.1 0L75 236.3 19 337.1l-11.7 21zM104 168a40 40 0 1 0 80 0 40 40 0 1 0 -80 0zM280 72a40 40 0 1 0 80 0 40 40 0 1 0 -80 0zm176 96a40 40 0 1 0 80 0 40 40 0 1 0 -80 0z" />
        <path d="M0 416l32 0 576 0 32 0 0 64-32 0L32 480 0 480l0-64z" />
    </Icon>
);

export default PeopleLine;