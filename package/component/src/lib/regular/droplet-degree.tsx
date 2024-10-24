
import { Icon } from "../../index";

/**
 * A component that renders the `droplet-degree` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/droplet-degree?s=regular droplet-degree}
 * @preview ![droplet-degree](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/droplet-degree.svg)
 */
const DropletDegree: typeof Icon = x => (
    <Icon {...x}>
        <path d="M192 464c-79.5 0-144-64.5-144-144c0-13 5.1-33.5 17-61.1c11.5-26.6 27.6-55.8 45.5-84.7c29-46.8 61-90.2 81.5-117c20.5 26.7 52.6 70.2 81.5 117c17.9 28.9 34 58 45.5 84.7c11.9 27.6 17 48.2 17 61.1c0 79.5-64.5 144-144 144zM0 320C0 426 86 512 192 512s192-86 192-192c0-91.2-130.2-262.3-166.6-308.3C211.4 4.2 202.5 0 192.9 0l-1.8 0c-9.6 0-18.5 4.2-24.5 11.7C130.2 57.7 0 228.8 0 320zM400 112a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm112 0a80 80 0 1 0 -160 0 80 80 0 1 0 160 0z" />
    </Icon>
);

export default DropletDegree;