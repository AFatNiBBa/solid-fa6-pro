
import { Icon, generic } from "../../index";

/**
 * A component that renders the `star-half-stroke` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/star-half-stroke?s=duotone star-half-stroke}
 * @preview ![star-half-stroke](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/star-half-stroke.svg)
 */
const StarHalfStroke: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M288.1 0c.5 0 1.1 0 1.6 0c11.6 .6 22.1 7.4 27.2 18l64.3 132.3 143.6 21.2c12 1.8 22 10.2 25.7 21.7c1.1 3.3 1.6 6.6 1.6 10c0 8.4-3.3 16.6-9.5 22.7L438.5 329l24.6 145.7c2 12-3 24.2-12.9 31.3c-5.1 3.7-11.1 5.7-17.1 6l-3.2 0c-4.6-.2-9.2-1.5-13.5-3.7c-42.8-22.8-85.6-45.7-128.5-68.4c0-21.2 0-42.3 .1-63.5c8.9 4.7 17.6 9.3 26.4 14l85.2 45.5-16.5-97.6-4.8-28.7 20.7-20.5 70.1-69.3-96.1-14.2-29.3-4.3-12.9-26.6c-14.2-29.3-28.5-58.6-42.9-87.6c0-29 0-58.1 .1-87.2z" />
        <path d="M289.7 0L288 0l0 87.1 0 289.2 0 63.5L159.8 508.3C149 514 135.9 513.1 126 506s-14.9-19.3-12.9-31.3L137.8 329 33.6 225.9c-8.6-8.5-11.7-21.2-7.9-32.7s13.7-19.9 25.7-21.7L195 150.3 259.4 18c5.4-11 16.5-18 28.8-18c.5 0 1.1 0 1.6 0zM433.2 512c-1.1 .1-2.1 .1-3.2 0l3.2 0z" />
    </Icon>
);

export default StarHalfStroke;