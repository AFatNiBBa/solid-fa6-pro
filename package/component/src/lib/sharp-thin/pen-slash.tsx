
import { Icon } from "../../index";

/**
 * A component that renders the `pen-slash` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pen-slash?s=sharp-thin pen-slash}
 * @preview ![pen-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/pen-slash.svg)
 */
const PenSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M323.2 350.2L215.8 457.6 86 490l32.5-129.8 95.9-95.9-12.6-10L104 352 68.4 494.4 64 512l17.6-4.4L224 472 335.8 360.2l-12.6-10zM444.7 11.3L304.2 151.8l12.6 10L377.7 101 475 198.3l-49.4 49.4 12.6 10L564.7 131.3 576 120l-11.3-11.3L467.3 11.3 456 0 444.7 11.3zM486.3 187L389 89.7l67-67L553.4 120l-67 67zM16.2 5L9.9 0 0 12.5l6.3 5L623.8 507l6.3 5 9.9-12.5-6.3-5L16.2 5z" />
    </Icon>
);

export default PenSlash;