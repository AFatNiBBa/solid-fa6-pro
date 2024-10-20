
import { Icon, generic } from "../../index";

/**
 * A component that renders the `podium-star` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/podium-star?s=duotone podium-star}
 * @preview ![podium-star](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/podium-star.svg)
 */
const PodiumStar: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M44.4 192l359.1 0L374.3 455.1c-3.6 32.4-31 56.9-63.6 56.9l-173.4 0c-32.6 0-60-24.5-63.6-56.9L44.4 192zm93.4 139.3l35.4 34c2 2 3 4.9 2.4 7.7l-9.4 49.1c-1.3 6.9 5.8 12.3 11.8 8.9l42.1-24.4c2.4-1.4 5.4-1.4 7.8 0L270 430.9c6 3.5 13.1-1.9 11.8-8.9L272.3 373c-.5-2.8 .4-5.8 2.4-7.7l35.4-34c5-4.8 2.3-13.5-4.5-14.3L257.8 311c-2.8-.3-5.2-2.1-6.3-4.8l-20.2-45.4c-2.9-6.4-11.7-6.4-14.5 0l-20.2 45.4c-1.2 2.6-3.6 4.4-6.3 4.8l-47.9 5.9c-6.8 .8-9.5 9.5-4.5 14.3z" />
        <path d="M182.4 72L168 72c-22.1 0-40 17.9-40 40l0 32 296 0c13.3 0 24 10.7 24 24s-10.7 24-24 24L24 192c-13.3 0-24-10.7-24-24s10.7-24 24-24l56 0 0-32c0-48.6 39.4-88 88-88l14.4 0C190.7 9.7 206.2 0 224 0l64 0c26.5 0 48 21.5 48 48s-21.5 48-48 48l-64 0c-17.8 0-33.3-9.7-41.6-24z" />
    </Icon>
);

export default PodiumStar;