
import { Icon } from "../../index";

/**
 * A component that renders the `people-line` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/people-line?s=sharp-solid people-line}
 * @preview ![people-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/people-line.svg)
 */
const PeopleLine: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M320 112a40 40 0 1 0 0-80 40 40 0 1 0 0 80zM144 208a40 40 0 1 0 0-80 40 40 0 1 0 0 80zm392-40a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zM96 224l-14.1 0L75 236.3 19 337.1l-11.7 21 42 23.3 11.7-21 27-48.6L88 384l112 0 0-72.2 27 48.6 11.7 21 42-23.3-11.7-21-35.2-63.5 3.4-6.3L264 217.5l0 86.5 112 0 0-86.5 26.9 49.9 3.4 6.3L371 337.1l-11.7 21 42 23.3 11.7-21 27-48.6 0 72.2 112 0 0-72.2 27 48.6 11.7 21 42-23.3-11.7-21L565 236.3 558.1 224 544 224l-96 0-14 0-44.9-83.4L382.3 128 368 128l-96 0-14.3 0-6.8 12.6L206 224l-14 0-96 0zM32 416L0 416l0 64 32 0 576 0 32 0 0-64-32 0L32 416z" />
    </Icon>
);

export default PeopleLine;