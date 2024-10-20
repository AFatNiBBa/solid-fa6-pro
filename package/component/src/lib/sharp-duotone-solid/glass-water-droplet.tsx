
import { Icon, generic } from "../../index";

/**
 * A component that renders the `glass-water-droplet` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/glass-water-droplet?s=sharp-duotone-solid glass-water-droplet}
 * @preview ![glass-water-droplet](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/glass-water-droplet.svg)
 */
const GlassWaterDroplet: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 0L5 64 40 512l304 0L379 64l5-64L319.8 0 64.2 0 0 0zM69.2 64l245.6 0c-6.1 78.6-12.3 157.2-18.4 235.8L284.8 448 99.2 448c-3.9-49.4-7.7-98.8-11.6-148.2C81.5 221.2 75.3 142.6 69.2 64z" />
        <path d="M192 96l47.9 53.9c10.4 11.7 16.1 26.7 16.1 42.4c0 35.2-28.8 63.8-64 63.8s-64-28.5-64-63.8c0-15.6 5.7-30.7 16.1-42.4L192 96zM99.2 448L87.6 299.8 96 304c20.1 10.1 43.9 10.1 64 0s43.9-10.1 64 0s43.9 10.1 64 0l8.4-4.2L284.8 448 99.2 448z" />
    </Icon>
);

export default GlassWaterDroplet;