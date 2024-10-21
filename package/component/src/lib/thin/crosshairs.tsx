
import { Icon } from "../../index";

/**
 * A component that renders the `crosshairs` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/crosshairs?s=thin crosshairs}
 * @preview ![crosshairs](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/crosshairs.svg)
 */
const Crosshairs: typeof Icon = x => (
    <Icon {...x}>
        <path d="M264 8c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 40.2C139.5 52.3 52.3 139.5 48.2 248L8 248c-4.4 0-8 3.6-8 8s3.6 8 8 8l40.2 0C52.3 372.5 139.5 459.7 248 463.8l0 40.2c0 4.4 3.6 8 8 8s8-3.6 8-8l0-40.2c108.5-4.1 195.7-91.3 199.8-199.8l40.2 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-40.2 0C459.7 139.5 372.5 52.3 264 48.2L264 8zM120 264c4.4 0 8-3.6 8-8s-3.6-8-8-8l-55.8 0C68.2 148.3 148.3 68.2 248 64.2l0 55.8c0 4.4 3.6 8 8 8s8-3.6 8-8l0-55.8c99.7 4.1 179.8 84.2 183.8 183.8L392 248c-4.4 0-8 3.6-8 8s3.6 8 8 8l55.8 0c-4.1 99.7-84.2 179.8-183.8 183.8l0-55.8c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 55.8C148.3 443.8 68.2 363.7 64.2 264l55.8 0zm112-8a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm64 0a40 40 0 1 0 -80 0 40 40 0 1 0 80 0z" />
    </Icon>
);

export default Crosshairs;