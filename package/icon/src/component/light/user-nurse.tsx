
import { Icon } from "../../index";

/**
 * A component that renders the `user-nurse` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-nurse?s=light user-nurse}
 * @preview ![user-nurse](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/user-nurse.svg)
 */
const UserNurse: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M128 128l0 16 192 0 0-16 0-57.8-96-36-96 36 0 57.8zM96 160l0-32 0-57.8c0-13.3 8.3-25.3 20.8-30l96-36c7.2-2.7 15.2-2.7 22.5 0l96 36c12.5 4.7 20.8 16.6 20.8 30l0 57.8 0 32 0 16c0 70.7-57.3 128-128 128s-128-57.3-128-128l0-16zm224 16l-192 0c0 53 43 96 96 96s96-43 96-96zM119 359.1C68.7 376.5 32.5 424 32 480l384 0c-.5-56-36.7-103.5-86.9-120.9L259 433.6c-19 20.1-51 20.1-69.9 0L119 359.1zm22.4-22.9l71 75.5c6.3 6.7 17 6.7 23.3 0l71-75.5c7.6-8.1 18.9-11.9 29.4-8.5C401 348.6 448 409.4 448 481.3c0 17-13.8 30.7-30.7 30.7L30.7 512C13.8 512 0 498.2 0 481.3c0-71.9 47-132.7 111.9-153.6c10.5-3.4 21.8 .4 29.4 8.5zM216 48l16 0c4.4 0 8 3.6 8 8l0 16 16 0c4.4 0 8 3.6 8 8l0 16c0 4.4-3.6 8-8 8l-16 0 0 16c0 4.4-3.6 8-8 8l-16 0c-4.4 0-8-3.6-8-8l0-16-16 0c-4.4 0-8-3.6-8-8l0-16c0-4.4 3.6-8 8-8l16 0 0-16c0-4.4 3.6-8 8-8z" />
    </Icon>
);

export default UserNurse;