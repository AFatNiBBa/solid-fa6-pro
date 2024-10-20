
import { Icon, generic } from "../../index";

/**
 * A component that renders the `award-simple` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/award-simple?s=sharp-duotone-solid award-simple}
 * @preview ![award-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/award-simple.svg)
 */
const AwardSimple: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M64 512l128-32 128 32L284.5 358.2c-16.1-.4-32.2-.8-48.3-1.1c-14.7 9-29.5 18-44.2 26.9c-14.7-9-29.5-18-44.2-26.9c-13.1 .3-26.2 .6-39.2 .9c-3 .1-6 .1-9 .2L64 512z" />
        <path d="M236.2 26.9L192 0 147.8 26.9 96 25.7 71.2 71.2 25.7 96l1.2 51.8L0 192l26.9 44.2L25.7 288l45.4 24.8L96 358.3l51.8-1.2L192 384l44.2-26.9 51.8 1.2 24.8-45.4L358.3 288l-1.2-51.8L384 192l-26.9-44.2L358.3 96 312.8 71.2 288 25.7l-51.8 1.2zM192 112a80 80 0 1 1 0 160 80 80 0 1 1 0-160z" />
    </Icon>
);

export default AwardSimple;