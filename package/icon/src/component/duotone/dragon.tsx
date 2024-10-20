
import { Icon, generic } from "../../index";

/**
 * A component that renders the `dragon` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dragon?s=duotone dragon}
 * @preview ![dragon](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/dragon.svg)
 */
const Dragon: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M1.5 246.8c3 6.4 9.9 10.1 16.9 9L171 232.3l-69.4 59.5c-5.1 4.4-6.9 11.4-4.6 17.7s8.3 10.4 15 10.4l269.8 0c-9.6-13.5-17.1-28.3-22.1-44c-2.5-7.8-4.4-15.9-5.7-24.1c-.7-4.1-1.1-8.3-1.5-12.4c-.2-2.1-.3-4.2-.4-6.2c-.1-2-.1-4-.1-5.9c0-.1 0-.2 0-.3c0-2.1 0-4.1 0-6.2L189.4 112.4c-18.2-12.1-42.2-10.4-58.5 4.1L5.4 228c-5.3 4.7-6.9 12.4-3.8 18.8z" />
        <path d="M300.1 111.5l51.9 13 0 57 0 45.5c0 42.4 16.9 83.1 46.9 113.1l44.4 44.4c3 3 4.7 7.1 4.7 11.4c0 8.4-6.4 15.4-14.7 16.1L29.5 448.1c-3.3 .3-6.6 1-9.5 2.2C11 454 4.2 461.5 1.4 470.7c-1 3.4-1.5 7-1.3 10.7c.2 3.8 1 7.3 2.3 10.7c3.6 9 11.2 15.8 20.4 18.6c3 .9 6.3 1.4 9.6 1.4L432 512l64 0 34.2 0C590.9 512 640 462.9 640 402.2c0-37.8-19.5-73-51.6-93.1L481.8 242.5c-21.1-13.2-33.8-36.2-33.8-61.1l0-21.5 32 0 13.3 13.3c12 12 28.3 18.7 45.3 18.7l21.5 0c26.5 0 48-21.5 48-48c0-10.4-3.4-20.5-9.6-28.8L540.8 38.4C522.7 14.2 494.2 0 464 0L448 0 416 0 304 0c-6.9 0-13 4.4-15.2 10.9s.1 13.7 5.6 17.9l43.3 32.5L296.8 81.7c-6 3-9.5 9.4-8.7 16.1s5.5 12.2 12 13.8zM510.7 79.7C507.5 89.2 498.6 96 488 96c-13.3 0-24-10.7-24-24c0-1.3 .1-2.6 .3-3.9l46.4 11.6zm1.3-7.4l0-.6c0 .1 0 .2 0 .3s0 .2 0 .3z" />
    </Icon>
);

export default Dragon;