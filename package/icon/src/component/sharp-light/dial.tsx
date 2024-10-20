
import { Icon } from "../../index";

/**
 * A component that renders the `dial` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dial?s=sharp-light dial}
 * @preview ![dial](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/dial.svg)
 */
const Dial: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M312 8L264 8l0 48 48 0 0-48zM120 72L72 72l0 48 48 0 0-48zm336 0l0 48 48 0 0-48-48 0zM568 264l-48 0 0 48 48 0 0-48zM8 264l0 48 48 0 0-48L8 264zM120 456l-48 0 0 48 48 0 0-48zm336 0l0 48 48 0 0-48-48 0zM197.5 197.5c46.2-46.2 118.8-49.7 169-10.6l-89.8 89.8L265.4 288 288 310.6l11.3-11.3 89.8-89.8c39.1 50.2 35.5 122.9-10.6 169c-50 50-131 50-181 0s-50-131 0-181zm203.6-22.6A160 160 0 1 0 174.9 401.1 160 160 0 1 0 401.1 174.9z" />
    </Icon>
);

export default Dial;