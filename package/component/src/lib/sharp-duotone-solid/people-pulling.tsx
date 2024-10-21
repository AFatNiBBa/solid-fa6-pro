
import { Icon, generic } from "../../index";

/**
 * A component that renders the `people-pulling` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/people-pulling?s=sharp-duotone-solid people-pulling}
 * @preview ![people-pulling](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/people-pulling.svg)
 */
const PeoplePulling: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 128l0 32L0 320l0 32 58.2 0L84.4 509.3l.5 2.7 64.9 0-2.2-13.3L123.1 352l15.7 0 29.8 134.1 3.9 23.2 .5 2.7 64.9 0-2.2-13.3-4-24c-.1-.6-.2-1.1-.3-1.7L174.3 216.8l89.1 43.7c3.5-10.4 6.8-20.5 10.2-30.7c3.4-10.2 6.8-20.4 10.2-30.6l-138.7-68-6.7-3.3-7.4 0L32 128 0 128zM32 48a48 48 0 1 0 96 0A48 48 0 1 0 32 48z" />
        <path d="M512 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM398.3 128.6l-10-2-9.3 4.1-72 32-12.9 5.7-4.5 13.4-16 48-10.1 30.4 60.7 20.2 10.1-30.4 11.5-34.6 36.7-16.3-17 63.6c-5.6 21.1-.1 43.6 14.7 59.7l70.9 77.4 22 80.5 8.4 30.9 61.7-16.8-8.4-30.9-24-88-2-7.5-5.2-5.7-52.3-57 18.4-62.4 13.7 27.4 4.8 9.5 9.5 4.8 48 24 28.6-57.2-38.5-19.2-35.2-70.5-7-14-15.3-3.1-80-16zM324.7 398l-43.4 43.4L258.7 464 304 509.3l22.6-22.6 48-48 4.6-4.6 2.4-6.1 15.7-39.3-40.7-44.4c-2.5-2.7-4.8-5.6-7-8.6l-25 62.4z" />
    </Icon>
);

export default PeoplePulling;