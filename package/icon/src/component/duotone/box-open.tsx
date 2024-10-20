
import { Icon, generic } from "../../index";

/**
 * A component that renders the `box-open` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/box-open?s=duotone box-open}
 * @preview ![box-open](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/box-open.svg)
 */
const BoxOpen: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M17.2 125.5L58.9 42.1c3-6.1 9.6-9.6 16.3-8.7C156.8 43.6 238.4 53.8 320 64c-27.8 46.3-55.6 92.6-83.4 139c-7.5 12.4-22.3 18.3-36.2 14.3c-45.5-13-90.9-26-136.4-39c-9-2.6-18-5.1-26.9-7.7c-19.3-5.5-28.8-27.2-19.8-45.1zM320 64L564.8 33.4c6.7-.8 13.3 2.7 16.3 8.7l41.7 83.4c9 17.9-.6 39.6-19.8 45.1c-9 2.6-18 5.1-26.9 7.7c-45.5 13-90.9 26-136.4 39c-13.9 4-28.8-1.9-36.2-14.3c-27.8-46.3-55.6-92.6-83.4-139z" />
        <path d="M320 64L236.6 203c-7.4 12.4-22.3 18.3-36.2 14.3L64 178.3l0 200.2c0 22 15 41.2 36.4 46.6l204.1 51c10.2 2.6 20.9 2.6 31 0l204.1-51c21.4-5.3 36.4-24.5 36.4-46.6l0-200.2-136.4 39c-13.9 4-28.8-1.9-36.2-14.3L320 64z" />
    </Icon>
);

export default BoxOpen;