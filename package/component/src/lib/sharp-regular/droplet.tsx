
import { Icon } from "../../index";

/**
 * A component that renders the `droplet` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/droplet?s=sharp-regular droplet}
 * @preview ![droplet](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/droplet.svg)
 */
const Droplet: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M336 320c0-14.5-7.4-39.2-24.7-72.8c-16.5-32-39-66.6-62.3-99c-20.2-28.1-40.5-53.9-57-74.1c-16.5 20.2-36.8 46-57 74.1c-23.3 32.4-45.8 66.9-62.3 99C55.4 280.8 48 305.5 48 320c0 79.5 64.5 144 144 144s144-64.5 144-144zM0 320C0 241.2 106.1 102.8 160.5 36.9C179.3 14.1 192 0 192 0s12.7 14.1 31.5 36.9C277.9 102.8 384 241.2 384 320c0 106-86 192-192 192S0 426 0 320zm200 48l0 48c-57.4 0-104-46.6-104-104l48 0c0 30.9 25.1 56 56 56z" />
    </Icon>
);

export default Droplet;