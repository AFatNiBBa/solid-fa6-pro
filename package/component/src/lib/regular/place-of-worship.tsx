
import { Icon } from "../../index";

/**
 * A component that renders the `place-of-worship` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/place-of-worship?s=regular place-of-worship}
 * @preview ![place-of-worship](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/place-of-worship.svg)
 */
const PlaceOfWorship: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M320 0c6.8 0 13.3 2.9 17.8 7.9l67.9 75.4c6.6 7.3 10.3 16.9 10.3 26.8l0 75.4 38.4 24.9c15.9 10.3 25.6 28 25.6 47L480 464l88 0c13.3 0 24-10.7 24-24l0-69.9c0-8.1-4.1-15.7-11-20.2l-69-44.7 0-57.2 95.1 61.5c20.5 13.3 32.9 36 32.9 60.4l0 69.9c0 39.8-32.2 72-72 72l-184 0s0 0 0 0l-160 0s0 0 0 0L72 512c-39.8 0-72-32.2-72-72l0-69.9c0-24.4 12.4-47.2 32.9-60.5L128 248.1l0 57.2L59 350c-6.8 4.4-11 12-11 20.2L48 440c0 13.3 10.7 24 24 24l88 0 0-206.6c0-19 9.6-36.7 25.6-47L224 185.5l0-75.4c0-9.9 3.7-19.4 10.3-26.8L302.2 7.9C306.7 2.9 313.2 0 320 0zM272 113.2l0 85.4c0 8.1-4.1 15.7-11 20.1l-49.4 32c-2.3 1.5-3.7 4-3.7 6.7L208 464l64 0 0-96c0-26.5 21.5-48 48-48s48 21.5 48 48l0 96 64 0 0-206.6c0-2.7-1.4-5.2-3.7-6.7l-49.4-32c-6.8-4.4-11-12-11-20.1l0-85.4L320 59.9l-48 53.3z" />
    </Icon>
);

export default PlaceOfWorship;