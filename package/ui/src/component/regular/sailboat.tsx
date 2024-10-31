
import { Icon } from "../../index";

/**
 * A component that renders the `sailboat` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sailboat?s=regular sailboat}
 * @preview ![sailboat](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/sailboat.svg)
 */
const Sailboat: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M284.6 6.2c-4.2-5.4-11.4-7.5-17.8-5.3S256 9.2 256 16l0 288c0 8.8 7.2 16 16 16l224 0c6.1 0 11.7-3.5 14.4-9s2-12-1.7-16.9l-224-288zm-72 90.5c-6.7-2-14 .6-17.9 6.4l-128 192c-3.3 4.9-3.6 11.2-.8 16.4s8.2 8.5 14.1 8.5l128 0c8.8 0 16-7.2 16-16l0-192c0-7.1-4.6-13.3-11.4-15.3zM60 400l456 0-.4 1.6c-8.2 36.5-40.6 62.4-78 62.4l-299.2 0c-37.4 0-69.8-25.9-78-62.4L60 400zM20 352c-10.3 0-17.9 9.5-15.6 19.5l9.1 40.6c13.1 58.4 65 99.9 124.9 99.9l299.2 0c59.9 0 111.7-41.5 124.9-99.9l9.1-40.6c2.2-10-5.4-19.5-15.6-19.5L20 352z" />
    </Icon>
);

export default Sailboat;