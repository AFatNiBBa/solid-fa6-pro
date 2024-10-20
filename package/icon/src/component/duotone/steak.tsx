
import { Icon, generic } from "../../index";

/**
 * A component that renders the `steak` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/steak?s=duotone steak}
 * @preview ![steak](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/steak.svg)
 */
const Steak: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 360c0 84.3 73.4 120.1 110 132.7c43.5 15 93.3 19.3 130 19.3c81.7 0 162.1-30.8 222.6-75.8C520.9 392.8 576 323.9 576 240c0-60.4-23.6-117.6-57.5-160C485.7 39 433 0 368 0c-38.3 0-72.3 12.4-99.2 37.4c-23.5 21.9-36.3 48.9-44.1 66.5c-4.4 10.1-8 18.9-11.2 26.6c-10.4 25.1-16.2 39.1-30 52.9c-23.1 23.1-50.4 36.9-77.7 50.7c-21.8 11-43.6 22.1-63.3 37.8C17.8 291.7 0 321.4 0 360zm64 9.5c0-29.8 19.8-38.3 51.7-51.9c31.1-13.3 73.6-31.5 120.6-79c28.1-28.5 41.9-62.8 54.2-93.4C308.4 100.7 323.1 64 374.2 64C443.1 64 512 151.3 512 238.5C512 343.3 370.9 448 236.3 448C167.4 448 64 430.5 64 369.5z" />
        <path d="M236.3 448C167.4 448 64 430.5 64 369.5c0-29.8 19.8-38.3 51.7-51.9c31.1-13.3 73.6-31.5 120.6-79c28.1-28.5 41.9-62.8 54.2-93.4C308.4 100.7 323.1 64 374.2 64C443.1 64 512 151.3 512 238.5C512 343.3 370.9 448 236.3 448zM384 256a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
    </Icon>
);

export default Steak;