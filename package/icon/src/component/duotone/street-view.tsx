
import { Icon, generic } from "../../index";

/**
 * A component that renders the `street-view` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/street-view?s=duotone street-view}
 * @preview ![street-view](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/street-view.svg)
 */
const StreetView: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 424c0 22.1 15.1 37.4 29.8 47c15.2 9.9 35.5 17.5 57.8 23.3C132.7 505.9 192.9 512 256 512s123.3-6.1 168.4-17.8c22.4-5.8 42.6-13.3 57.8-23.3c14.7-9.6 29.8-24.9 29.8-47s-15.1-37.4-29.8-47c-15.2-9.9-35.5-17.5-57.8-23.3c-30.9-8-68.8-13.4-109.9-16l-5.3 47.8c39.6 2.4 75.3 7.5 103.2 14.7c56.6 14.6 56.6 32.9 0 47.5C372.5 458.1 316.6 464 256 464s-116.5-5.9-156.4-16.2c-56.6-14.6-56.6-32.9 0-47.5c27.9-7.2 63.6-12.3 103.2-14.7c-1.8-15.9-3.5-31.8-5.3-47.8c-41.1 2.6-79 8-109.9 16C65.2 359.6 45 367.1 29.8 377C15.1 386.6 0 401.9 0 424z" />
        <path d="M256 0a64 64 0 1 1 0 128A64 64 0 1 1 256 0zM160 224c0-35.3 28.7-64 64-64l64 0c35.3 0 64 28.7 64 64l0 48c0 17.7-14.3 32-32 32l-1.8 0-11.1 99.5c-1.8 16.2-15.5 28.5-31.8 28.5l-38.7 0c-16.3 0-30-12.3-31.8-28.5L193.8 304l-1.8 0c-17.7 0-32-14.3-32-32l0-48z" />
    </Icon>
);

export default StreetView;