
import { Icon } from "../../index";

/**
 * A component that renders the `people-group` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/people-group?s=sharp-solid people-group}
 * @preview ![people-group](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/people-group.svg)
 */
const PeopleGroup: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M128 32a56 56 0 1 1 0 112 56 56 0 1 1 0-112zM53.3 275.1L64 292.4l0-45.1L53.3 275.1zM0 280L40 176l172.3 0-.1 .1-64 112L138 305.9 150 322.6l42 58.9 0 2.5 0 64L64 448l0-64L0 280zM448 381.5l42-58.9L502 305.9l-10.2-17.8-64-112-.1-.1L600 176l40 104L576 384l0 64-128 0 0-64 0-2.5zM512 32a56 56 0 1 1 0 112 56 56 0 1 1 0-112zm74.7 243.1L576 247.3l0 45.1 10.7-17.3zM320 32a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM232.9 301.1L256 333.4l0-72.7-23.1 40.4zM384 260.7l0 72.7 23.1-32.3L384 260.7zM464 304L384 416l0 64-128 0 0-64L176 304l64-112 160 0 64 112z" />
    </Icon>
);

export default PeopleGroup;