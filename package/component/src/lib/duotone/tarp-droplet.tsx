
import { Icon, generic } from "../../index";

/**
 * A component that renders the `tarp-droplet` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tarp-droplet?s=duotone tarp-droplet}
 * @preview ![tarp-droplet](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/tarp-droplet.svg)
 */
const TarpDroplet: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 192L0 448c0 35.3 28.7 64 64 64l352 0 0-128c0-17.7 14.3-32 32-32l128 0 0-160c0-35.3-28.7-64-64-64l-133.5 0c-13.2 37.3-48.7 64-90.5 64s-77.4-26.7-90.5-64L64 128c-35.3 0-64 28.7-64 64zm128 32a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z" />
        <path d="M288 160c35.3 0 64-26.9 64-60c0-24-33.7-70.1-52.2-93.5c-6.1-7.7-17.5-7.7-23.6 0C257.7 29.9 224 76 224 100c0 33.1 28.7 60 64 60zM416 512L576 352l-128 0c-17.7 0-32 14.3-32 32l0 128z" />
    </Icon>
);

export default TarpDroplet;