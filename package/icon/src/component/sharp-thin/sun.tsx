
import { Icon } from "../../index";

/**
 * A component that renders the `sun` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sun?s=sharp-thin sun}
 * @preview ![sun](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/sun.svg)
 */
const Sun: typeof Icon = x => (
    <Icon {...x}>
        <path d="M164.3 7.7L256 57.1 347.7 7.7 362 0l4.7 15.6 29.9 99.7 99.7 29.9L512 150l-7.7 14.4L454.9 256l49.4 91.7L512 362l-15.6 4.7-99.7 29.9-29.9 99.7L362 512l-14.4-7.7L256 454.9l-91.7 49.4L150 512l-4.7-15.6-29.9-99.7L15.6 366.7 0 362l7.7-14.4L57.1 256 7.7 164.3 0 150l15.6-4.7 99.7-29.9 29.9-99.7L150 0l14.4 7.7zm99.2 63.5L256 75.3l-7.6-4.1L159.7 23.4l-29 96.6-2.5 8.3-8.3 2.5-96.6 29 47.8 88.8 4.1 7.6-4.1 7.6L23.4 352.3l96.6 29 8.3 2.5 2.5 8.3 29 96.6 88.8-47.8 7.6-4.1 7.6 4.1 88.8 47.8 29-96.6 2.5-8.3 8.3-2.5 96.6-29-47.8-88.8-4.1-7.6 4.1-7.6 47.8-88.8-96.6-29-8.3-2.5-2.5-8.3-29-96.6L263.6 71.2zM256 144a112 112 0 1 1 0 224 112 112 0 1 1 0-224zm96 112a96 96 0 1 0 -192 0 96 96 0 1 0 192 0z" />
    </Icon>
);

export default Sun;