
import { Icon } from "../../index";

/**
 * A component that renders the `shutters` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shutters?s=light shutters}
 * @preview ![shutters](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/shutters.svg)
 */
const Shutters: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 32C14.3 32 0 46.3 0 64L0 96c0 17.7 14.3 32 32 32l448 0c17.7 0 32-14.3 32-32l0-32c0-17.7-14.3-32-32-32L32 32zm0 32l448 0 0 32L32 96l0-32zM.9 453c-.6 2-.9 4.1-.9 6.1C0 470.7 9.3 480 20.9 480l470.3 0c11.5 0 20.9-9.3 20.9-20.9c0-2.1-.3-4.1-.9-6.1l-21.2-69-33.5 0 19.7 64L35.9 448l19.7-64-33.5 0L.9 453zM22.2 256L.9 325c-.6 2-.9 4.1-.9 6.1C0 342.7 9.3 352 20.9 352l470.3 0c11.5 0 20.9-9.3 20.9-20.9c0-2.1-.3-4.1-.9-6.1l-21.2-69-33.5 0 19.7 64L35.9 320l19.7-64-33.5 0zm453.9-64L35.9 192l9.8-32-33.5 0L.9 197c-.6 2-.9 4.1-.9 6.1C0 214.7 9.3 224 20.9 224l470.3 0c11.5 0 20.9-9.3 20.9-20.9c0-2.1-.3-4.1-.9-6.1l-11.4-37-33.5 0 9.8 32z" />
    </Icon>
);

export default Shutters;