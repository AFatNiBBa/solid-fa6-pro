
import { Icon, generic } from "../../index";

/**
 * A component that renders the `people-group` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/people-group?s=sharp-duotone-solid people-group}
 * @preview ![people-group](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/people-group.svg)
 */
const PeopleGroup: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 280L64 384l0 64 128 0 0-64 0-2.5-42-58.9L138 305.9l10.2-17.8 64-112C154.8 176 97.4 176 40 176L0 280zm53.3-4.9L64 247.3l0 45.1L53.3 275.1zM72 88a56 56 0 1 0 112 0A56 56 0 1 0 72 88zm355.7 88c21.4 37.5 42.7 74.8 64.1 112.1L502 305.9 490 322.6l-42 58.9 0 2.5 0 64 128 0 0-64 64-104L600 176l-172.3 0zM456 88a56 56 0 1 0 112 0A56 56 0 1 0 456 88zM576 247.3l10.7 27.8L576 292.4l0-45.1z" />
        <path d="M384 96A64 64 0 1 0 256 96a64 64 0 1 0 128 0zM256 260.7l0 72.7-23.1-32.3L256 260.7zm128 72.7l0-72.7 23.1 40.4L384 333.4zm0 82.6l80-112L400 192l-160 0L176 304l80 112 0 64 128 0 0-64z" />
    </Icon>
);

export default PeopleGroup;