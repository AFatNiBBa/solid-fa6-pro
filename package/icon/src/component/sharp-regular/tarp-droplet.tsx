
import { Icon } from "../../index";

/**
 * A component that renders the `tarp-droplet` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tarp-droplet?s=sharp-regular tarp-droplet}
 * @preview ![tarp-droplet](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/tarp-droplet.svg)
 */
const TarpDroplet: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M288 160c-35.3 0-64-26.9-64-60S288-8 288-8s64 74.9 64 108s-28.7 60-64 60zM48 128l149.5 0c7 19.8 20.3 36.6 37.5 48L48 176l0 288 368 0 0-112 112 0 0-176-186.9 0c17.2-11.4 30.5-28.2 37.5-48L528 128l48 0 0 48 0 208L448 512 48 512 0 512l0-48L0 176l0-48 48 0zm64 80a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default TarpDroplet;