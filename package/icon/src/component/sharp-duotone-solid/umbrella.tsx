
import { Icon, generic } from "../../index";

/**
 * A component that renders the `umbrella` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/umbrella?s=sharp-duotone-solid umbrella}
 * @preview ![umbrella](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/umbrella.svg)
 */
const Umbrella: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M149.1 433.7l14.3 28.6 2.3 4.7c13.8 27.6 42 45 72.8 45c45 0 81.4-36.5 81.4-81.4l0-151.9c-9.8-4.3-20.6-6.7-32-6.7c-1.4 0-2.8 0-4.2 .1s-2.8 .2-4.2 .3c-2.8 .3-5.5 .7-8.2 1.3c-5.4 1.1-10.5 2.8-15.4 4.9l0 151.9c0 9.6-7.8 17.4-17.4 17.4c-6.6 0-12.6-3.7-15.6-9.6l-2.3-4.7-14.3-28.6-57.2 28.6z" />
        <path d="M320 32l0-32L256 0l0 32 0 17.7C124.2 63.4 18.3 161 2.1 285.9L-.2 304 18 304l6.5 0 7.2 0 4.8-5.3C51 282.3 72.3 272 96 272c44.2 0 80 35.8 80 80l16 0 16 0c0-44.2 35.8-80 80-80s80 35.8 80 80l16 0 16 0c0-44.2 35.8-80 80-80c23.7 0 45 10.3 59.6 26.7l4.8 5.3 7.2 0 6.5 0 18.2 0-2.3-18.1C557.7 161 451.8 63.4 320 49.7L320 32z" />
    </Icon>
);

export default Umbrella;