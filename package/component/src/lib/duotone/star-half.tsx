
import { Icon, generic } from "../../index";

/**
 * A component that renders the `star-half` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/star-half?s=duotone star-half}
 * @preview ![star-half](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/star-half.svg)
 */
const StarHalf: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M288.1 0c12.3 0 23.5 7 28.8 18l64.3 132.3 143.6 21.2c12 1.8 22 10.2 25.7 21.7s.7 24.2-7.9 32.7L438.5 329l24.6 145.7c2 12-3 24.2-12.9 31.3c-5.1 3.7-11.1 5.7-17.1 6l-3.2 0c-4.6-.2-9.2-1.5-13.5-3.7c-42.8-22.8-85.6-45.7-128.5-68.4c0-146.7 0-293.3 .1-439.9z" />
        <path d="M288 0c-12.2 .1-23.3 7-28.6 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3L288 439.8 288 0zM429.9 512c1.1 .1 2.1 .1 3.2 0l-3.2 0z" />
    </Icon>
);

export default StarHalf;