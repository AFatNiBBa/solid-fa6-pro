
import { Icon } from "../../index";

/**
 * A component that renders the `droplet-degree` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/droplet-degree?s=thin droplet-degree}
 * @preview ![droplet-degree](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/droplet-degree.svg)
 */
const DropletDegree: typeof Icon = x => (
    <Icon {...x}>
        <path d="M192 496C94.8 496 16 417.2 16 320c0-19.5 7.1-44.9 19.6-73.8c12.4-28.6 29.3-59.2 47.7-88.8c36.6-59.2 77.9-112.9 95.9-135.7c2.8-3.5 7-5.6 11.9-5.6l1.8 0c4.9 0 9.1 2.1 11.9 5.6c18.1 22.8 59.3 76.6 95.9 135.7c18.3 29.6 35.3 60.2 47.7 88.8C360.9 275.1 368 300.5 368 320c0 97.2-78.8 176-176 176zM0 320C0 426 86 512 192 512s192-86 192-192c0-91.2-130.2-262.3-166.6-308.3C211.4 4.2 202.5 0 192.9 0l-1.8 0c-9.6 0-18.5 4.2-24.5 11.7C130.2 57.7 0 228.8 0 320zM400 96a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm112 0A64 64 0 1 0 384 96a64 64 0 1 0 128 0z" />
    </Icon>
);

export default DropletDegree;