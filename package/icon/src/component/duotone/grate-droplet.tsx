
import { Icon, generic } from "../../index";

/**
 * A component that renders the `grate-droplet` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/grate-droplet?s=duotone grate-droplet}
 * @preview ![grate-droplet](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/grate-droplet.svg)
 */
const GrateDroplet: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 96L0 256 0 416c0 35.3 28.7 64 64 64l64 0 96 0 96 0 24.2 0c-15.3-22.9-24.2-50.4-24.2-80c0-23.6 5.8-46.9 16.9-67.8l75.3-141.2c7.6-14.3 20.6-24.5 35.8-28.8L448 96c0-35.3-28.7-64-64-64l-64 0-96 0-96 0L64 32C28.7 32 0 60.7 0 96zm64 0l32 0 0 128-32 0L64 96zm0 192l32 0 0 128-32 0 0-128zM160 96l32 0 0 128-32 0 0-128zm0 192l32 0 0 128-32 0 0-128zM256 96l32 0 0 128-32 0 0-128zm0 192l32 0 0 128-32 0 0-128zM352 96l32 0 0 128-32 0 0-128z" />
        <path d="M365.2 347.3l75.3-141.2c4.6-8.7 13.7-14.1 23.5-14.1s18.9 5.4 23.5 14.1l75.3 141.2c8.7 16.2 13.2 34.3 13.2 52.7c0 61.9-50.1 112-112 112s-112-50.1-112-112c0-18.4 4.5-36.5 13.2-52.7z" />
    </Icon>
);

export default GrateDroplet;