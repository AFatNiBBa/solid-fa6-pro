
import { Icon } from "../../index";

/**
 * A component that renders the `hand-love` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hand-love?s=sharp-thin hand-love}
 * @preview ![hand-love](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/hand-love.svg)
 */
const HandLove: typeof Icon = x => (
    <Icon {...x}>
        <path d="M144 0l8 0 80 0 8 0 0 8 0 24 0 8 0 120 64 0 16 0 0 16 0 16 64 0 0-120 0-8 8 0 80 0 8 0 0 8 0 272c0 92.8-75.2 168-168 168l-8.5 0c-63.7 0-124.7-25.3-169.7-70.3L44.5 352.3 16.2 324.1l-5.7-5.7 5.7-5.7 56.6-56.6 5.7-5.7 5.7 5.7 28.3 28.3L144 316.1 144 8l0-8zM400 192l0 13.4 0 2.6 0 128 0 16-16 0-64 0-16 0-64 0-16 0 0-16 0-80 0-8 0-42.6L224 40l0-8 0-16-64 0 0 319.4-13.7 5.7L101 295.8 78.4 273.1 33.1 318.4 55.8 341l89.4 89.4c42 42 99 65.6 158.4 65.6l8.5 0c83.9 0 152-68.1 152-152l0-264-64 0 0 112zm-16 16l-64 0 0 128 64 0 0-80 0-48zm-80-16l0-16-64 0 0 160 64 0 0-128 0-16z" />
    </Icon>
);

export default HandLove;