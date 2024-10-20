
import { Icon } from "../../index";

/**
 * A component that renders the `tarp-droplet` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tarp-droplet?s=regular tarp-droplet}
 * @preview ![tarp-droplet](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/tarp-droplet.svg)
 */
const TarpDroplet: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M288 160c-35.3 0-64-26.9-64-60c0-24 33.7-70.1 52.2-93.5c6.1-7.7 17.5-7.7 23.6 0C318.3 29.9 352 76 352 100c0 33.1-28.7 60-64 60zM64 128l133.5 0c7 19.8 20.3 36.6 37.5 48L64 176c-8.8 0-16 7.2-16 16l0 256c0 8.8 7.2 16 16 16l352 0 0-80c0-17.7 14.3-32 32-32l80 0 0-160c0-8.8-7.2-16-16-16l-170.9 0c17.2-11.4 30.5-28.2 37.5-48L512 128c35.3 0 64 28.7 64 64l0 172.1c0 12.7-5.1 24.9-14.1 33.9l-99.9 99.9c-9 9-21.2 14.1-33.9 14.1L64 512c-35.3 0-64-28.7-64-64L0 192c0-35.3 28.7-64 64-64zm48 80a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default TarpDroplet;