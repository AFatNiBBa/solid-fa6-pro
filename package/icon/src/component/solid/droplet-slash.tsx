
import { Icon } from "../../index";

/**
 * A component that renders the `droplet-slash` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/droplet-slash?s=solid droplet-slash}
 * @preview ![droplet-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/droplet-slash.svg)
 */
const DropletSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M320 512c53.2 0 101.4-21.6 136.1-56.6l-298.3-235C140 257.1 128 292.3 128 320c0 106 86 192 192 192zM505.2 370.7c4.4-16.2 6.8-33.1 6.8-50.7c0-91.2-130.2-262.3-166.6-308.3C339.4 4.2 330.5 0 320.9 0l-1.8 0c-9.6 0-18.5 4.2-24.5 11.7C277.8 33 240.7 81.3 205.8 136L38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L505.2 370.7zM224 336c0 44.2 35.8 80 80 80c8.8 0 16 7.2 16 16s-7.2 16-16 16c-61.9 0-112-50.1-112-112c0-8.8 7.2-16 16-16s16 7.2 16 16z" />
    </Icon>
);

export default DropletSlash;