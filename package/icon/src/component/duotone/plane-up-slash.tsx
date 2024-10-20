
import { Icon, generic } from "../../index";

/**
 * A component that renders the `plane-up-slash` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/plane-up-slash?s=duotone plane-up-slash}
 * @preview ![plane-up-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/plane-up-slash.svg)
 */
const PlaneUpSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M64 305.1l0 56.7c0 10.9 10.7 18.6 21.1 15.2L256 320l0 80-57.6 43.2c-4 3-6.4 7.8-6.4 12.8l0 42c0 7.8 6.3 14 14 14c1.3 0 2.6-.2 3.9-.5L320 480l110.1 31.5c1.3 .4 2.6 .5 3.9 .5c7.8 0 14-6.3 14-14l0-42.7c0-2.8-.7-5.6-2.1-8L161.3 223.1 78.2 278.5C69.3 284.4 64 294.4 64 305.1zM245.4 167.1c79 61.9 158 123.8 237 185.8L554.9 377c10.4 3.5 21.1-4.3 21.1-15.2l0-56.7c0-10.7-5.3-20.7-14.2-26.6L384 160l0-66.3C384 59.5 356 0 320 0c-35 0-64 59.5-64 93.7l0 66.3-10.6 7.1z" />
        <path d="M5.1 9.2C13.3-1.2 28.4-3.1 38.8 5.1l592 464c10.4 8.2 12.3 23.3 4.1 33.7s-23.3 12.3-33.7 4.1L9.2 42.9C-1.2 34.7-3.1 19.6 5.1 9.2z" />
    </Icon>
);

export default PlaneUpSlash;