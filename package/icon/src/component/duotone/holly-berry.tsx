
import { Icon, generic } from "../../index";

/**
 * A component that renders the `holly-berry` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/holly-berry?s=duotone holly-berry}
 * @preview ![holly-berry](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/holly-berry.svg)
 */
const HollyBerry: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M9.3 376c0 2.5 .4 5.1 1.3 7.6l4.3 12.8c6 18 6.5 37.3 1.5 55.6l-5.3 19.4C6.2 489.4 22.6 505.8 40.5 501L60 495.7c18.3-5 37.6-4.5 55.6 1.5l12.8 4.3c15.5 5.2 31.6-6.4 31.6-22.8l0-32c0-34.6 28.1-62.7 62.7-62.7c16.4 0 27.9-16.1 22.8-31.6l-4.3-12.8c-6-18-6.5-37.3-1.5-55.6l5.3-19.4c4.9-17.9-11.6-34.4-29.5-29.5L196 240.4c-18.3 5-37.6 4.4-55.6-1.5l-12.8-4.3c-15.5-5.2-31.6 6.4-31.6 22.8l0 32C96 323.9 67.9 352 33.3 352c-13.7 0-24 11.2-24 24zM275 298.7c-1.5 8.4-1.4 17 .5 25.3l5.3 23.9c2.8 12.7 1.1 25.2-4 35.9c1 .1 2.1 .2 3.2 .2c39.8 0 72 32.2 72 72l0 22.7c0 16.4 16 27.9 31.6 22.8l12.8-4.3c18-6 37.3-6.5 55.6-1.5l19.4 5.3c17.9 4.9 34.4-11.6 29.5-29.5L495.6 452c-5-18.3-4.4-37.6 1.5-55.6l4.3-12.8c5.2-15.5-6.4-31.6-22.8-31.6c-34.6 0-62.7-28.1-62.7-62.7l0-32c0-16.4-16-27.9-31.6-22.8l-12.8 4.3c-18 6-37.3 6.5-55.6 1.5l-29.6-8.1c-2.1-.6-4.3-.9-6.4-.9c-.8 0-1.6 0-2.3 .1c4.2 9.7 5.8 20.8 3.7 32.3L275 298.7z" />
        <path d="M256 96a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm-32 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm160 0a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z" />
    </Icon>
);

export default HollyBerry;