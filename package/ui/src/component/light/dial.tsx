
import { Icon } from "../../index";

/**
 * A component that renders the `dial` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dial?s=light dial}
 * @preview ![dial](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/dial.svg)
 */
const Dial: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M288 56a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm11.3 243.3l89.8-89.8c39.1 50.2 35.5 122.9-10.6 169c-50 50-131 50-181 0s-50-131 0-181c46.2-46.2 118.8-49.7 169-10.6l-89.8 89.8c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0zM401.1 174.9A160 160 0 1 0 174.9 401.1 160 160 0 1 0 401.1 174.9zM568 288a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM32 312a24 24 0 1 0 0-48 24 24 0 1 0 0 48zM120 96A24 24 0 1 0 72 96a24 24 0 1 0 48 0zm360 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48zM120 480a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm360 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
    </Icon>
);

export default Dial;