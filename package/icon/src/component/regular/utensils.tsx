
import { Icon } from "../../index";

/**
 * A component that renders the `utensils` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/utensils?s=regular utensils}
 * @preview ![utensils](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/utensils.svg)
 */
const Utensils: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M71.9 26.7c1.5-13.2-8-25-21.2-26.5s-25 8-26.5 21.2l-16 144L8 166.7 8 168l0 16c0 48.6 39.4 88 88 88l8 0 0 216c0 13.3 10.7 24 24 24s24-10.7 24-24l0-216 8 0c48.6 0 88-39.4 88-88l0-16 0-1.3-.1-1.3-16-144C230.4 8.2 218.5-1.3 205.3 .1s-22.7 13.3-21.2 26.5L200 169.3l0 14.7c0 22.1-17.9 40-40 40l-32 0-32 0c-22.1 0-40-17.9-40-40l0-14.7L71.9 26.7zM152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 144c0 13.3 10.7 24 24 24s24-10.7 24-24l0-144zM336 176c0-57.7 21.7-88.6 41.4-105.7c7.7-6.6 15.5-11.6 22.6-15.2L400 248l0 56-48 0c-8.8 0-16-7.2-16-16l0-112zm64 176l0 136c0 13.3 10.7 24 24 24s24-10.7 24-24l0-136 0-48 0-56 0-216c0-17.7-14.3-32-32-32C400 0 288 32 288 176l0 112c0 35.3 28.7 64 64 64l48 0z" />
    </Icon>
);

export default Utensils;