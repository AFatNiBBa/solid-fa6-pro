
import { Icon } from "../../index";

/**
 * A component that renders the `moon-over-sun` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/moon-over-sun?s=sharp-regular moon-over-sun}
 * @preview ![moon-over-sun](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/moon-over-sun.svg)
 */
const MoonOverSun: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 57.1L193.1 23.2 150 0 135.9 46.9l-20.5 68.4L46.9 135.9 0 150l23.2 43.1L57.1 256 23.2 318.9 0 362l46.9 14.1 68.4 20.5 20.5 68.4L150 512l43.1-23.2L256 454.9l62.9 33.9L362 512l14.1-46.9 20.5-68.4 68.4-20.5L512 362l-23.2-43.1L454.9 256l33.9-62.9L512 150l-46.9-14.1-68.4-20.5L376.1 46.9 362 0 318.9 23.2 256 57.1zm77 13.1l17.7 59 7.4 24.8 24.8 7.4 59 17.7-29.2 54.2L400.4 256l12.3 22.8L441.8 333l-59 17.7-24.8 7.4-7.4 24.8-17.7 59-54.2-29.2L256 400.4l-22.8 12.3L179 441.8l-17.7-59-7.4-24.8-24.8-7.4L70.2 333l29.2-54.2L111.6 256 99.4 233.2 70.2 179l59-17.7 24.8-7.4 7.4-24.8 17.7-59 54.2 29.2L256 111.6l22.8-12.3L333 70.2zM368 256a112 112 0 1 0 -224 0 112 112 0 1 0 224 0zm-76.9 53.5c-31.8-10.5-54.7-40.1-54.7-75.1c0-15.4 4.4-29.8 12.1-41.9c2.5-.3 4.9-.4 7.5-.4c35.3 0 64 28.7 64 64c0 22.4-11.5 42.1-28.9 53.5z" />
    </Icon>
);

export default MoonOverSun;