
import { Icon } from "../../index";

/**
 * A component that renders the `droplet` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/droplet?s=light droplet}
 * @preview ![droplet](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/droplet.svg)
 */
const Droplet: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M192 480c-88.4 0-160-71.6-160-160c0-16.2 6.1-39.2 18.3-67.5c11.9-27.6 28.5-57.5 46.6-86.8c35.9-58 76.4-110.9 94.5-133.7l1.3 0c18.1 22.9 58.6 75.7 94.5 133.7c18.1 29.2 34.6 59.1 46.6 86.8C345.9 280.8 352 303.8 352 320c0 88.4-71.6 160-160 160zM0 320C0 426 86 512 192 512s192-86 192-192c0-91.2-130.2-262.3-166.6-308.3C211.4 4.2 202.5 0 192.9 0l-1.8 0c-9.6 0-18.5 4.2-24.5 11.7C130.2 57.7 0 228.8 0 320zm112 0c0-8.8-7.2-16-16-16s-16 7.2-16 16c0 61.9 50.1 112 112 112c8.8 0 16-7.2 16-16s-7.2-16-16-16c-44.2 0-80-35.8-80-80z" />
    </Icon>
);

export default Droplet;