
import { Icon } from "../../index";

/**
 * A component that renders the `droplet-percent` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/droplet-percent?s=light droplet-percent}
 * @preview ![droplet-percent](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/droplet-percent.svg)
 */
const DropletPercent: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M192 480c-88.4 0-160-71.6-160-160c0-16.2 6.1-39.2 18.3-67.5c11.9-27.6 28.5-57.5 46.6-86.8c35.9-58 76.4-110.9 94.5-133.7l1.3 0c18.1 22.9 58.6 75.7 94.5 133.7c18.1 29.2 34.6 59.1 46.6 86.8C345.9 280.8 352 303.8 352 320c0 88.4-71.6 160-160 160zM0 320C0 426 86 512 192 512s192-86 192-192c0-91.2-130.2-262.3-166.6-308.3C211.4 4.2 202.5 0 192.9 0l-1.8 0c-9.6 0-18.5 4.2-24.5 11.7C130.2 57.7 0 228.8 0 320zm267.3-52.7c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0l-128 128c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l128-128zM160 264a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm88 136a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
    </Icon>
);

export default DropletPercent;