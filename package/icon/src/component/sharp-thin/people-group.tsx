
import { Icon } from "../../index";

/**
 * A component that renders the `people-group` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/people-group?s=sharp-thin people-group}
 * @preview ![people-group](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/people-group.svg)
 */
const PeopleGroup: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M128 48a40 40 0 1 1 0 80 40 40 0 1 1 0-80zm0 96a56 56 0 1 0 0-112 56 56 0 1 0 0 112zM512 48a40 40 0 1 1 0 80 40 40 0 1 1 0-80zm0 96a56 56 0 1 0 0-112 56 56 0 1 0 0 112zM72 264l0-8-16 0 0 8 0 89.7L18.6 287.6 61.2 192l139.4 0 7.1-16L56 176l-5.2 0-2.1 4.7L2.3 284.7 .6 288.4l2 3.5L56 386.1 56 456l0 8 8 0 128 0 8 0 0-8 0-89.7-16-28.2L184 448 72 448l0-184zm384 74.1l-16 28.2 0 89.7 0 8 8 0 128 0 8 0 0-8 0-69.9 53.4-94.2 2-3.5-1.6-3.7-46.4-104-2.1-4.7-5.2 0-151.8 0 7.1 16 139.4 0 42.6 95.6L584 353.7l0-89.7 0-8-16 0 0 8 0 184-112 0 0-109.9zM272 96a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm112 0A64 64 0 1 0 256 96a64 64 0 1 0 128 0zM264 272l-16 0 0 8 0 73.7-37.4-66.1L253.2 192l133.6 0 42.6 95.6L392 353.7l0-73.7 0-8-16 0 0 8 0 184-112 0 0-184 0-8zM248 386.1l0 85.9 0 8 8 0 128 0 8 0 0-8 0-85.9 53.4-94.2 2-3.5-1.6-3.7-46.4-104-2.1-4.7-5.2 0-144 0-5.2 0-2.1 4.7-46.4 104-1.6 3.7 2 3.5L248 386.1z" />
    </Icon>
);

export default PeopleGroup;