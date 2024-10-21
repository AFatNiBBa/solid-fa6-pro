
import { Icon } from "../../index";

/**
 * A component that renders the `staff` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/staff?s=solid staff}
 * @preview ![staff](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/staff.svg)
 */
const Staff: typeof Icon = x => (
    <Icon {...x}>
        <path d="M284.2 44.2C297.8 17.1 325.5 0 355.8 0L432 0c44.2 0 80 35.8 80 80l0 103.9c0 35.7-23.7 67.1-58 76.9l-3.9 1.1c-4 1.2-7.5 3.9-9.5 7.5l-19 33.6c-4.3 7.7-14.1 10.4-21.8 6.1l-32.8-18.5c-3.7-2.1-8.1-2.6-12.3-1.5l-85.5 24.4c-2.6 .7-5 2.1-6.9 4.1L81.9 497.9c-18.7 18.7-49.1 18.7-67.9 0s-18.7-49.1 0-67.9l77.3-77.3c3-3 4.7-7.1 4.7-11.3L96 304c0-8.8 7.2-16 16-16l37.5 0c4.2 0 8.3-1.7 11.3-4.7l39.4-39.4c9.6-9.6 21.5-16.6 34.6-20.4l169.6-48.5c6.9-2 11.6-8.2 11.6-15.4l0-47.7c0-8.8-7.2-16-16-16l-28.2 0c-3.7 0-7.2 2.1-8.8 5.5c-11.9 23.7-40.7 33.3-64.4 21.5s-33.3-40.7-21.5-64.4l7.2-14.3z" />
    </Icon>
);

export default Staff;