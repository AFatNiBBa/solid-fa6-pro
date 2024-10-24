
import { Icon, generic } from "../../index";

/**
 * A component that renders the `star-sharp` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/star-sharp?s=duotone star-sharp}
 * @preview ![star-sharp](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/star-sharp.svg)
 */
const StarSharp: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M310.9 16.7C307.7 6.8 298.5 0 288 0s-19.7 6.8-22.9 16.7L214.5 176 56 176c-10.3 0-19.4 6.5-22.7 16.2s-.1 20.4 8 26.7L172.1 320.7 121.1 480.7c-3.2 10 .5 21 9.1 27s20.2 5.7 28.5-.7L288 406.4 417.3 506.9c8.3 6.5 19.8 6.8 28.5 .7s12.3-16.9 9.1-27L403.9 320.7 534.7 218.9c8.1-6.3 11.3-17 8-26.7s-12.4-16.2-22.7-16.2l-158.4 0L310.9 16.7z" />
    </Icon>
);

export default StarSharp;