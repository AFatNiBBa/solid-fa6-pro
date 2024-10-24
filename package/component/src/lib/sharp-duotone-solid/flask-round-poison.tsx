
import { Icon, generic } from "../../index";

/**
 * A component that renders the `flask-round-poison` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/flask-round-poison?s=sharp-duotone-solid flask-round-poison}
 * @preview ![flask-round-poison](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/flask-round-poison.svg)
 */
const FlaskRoundPoison: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M16 352c0 64.3 29.2 121.8 75.1 160l265.8 0c45.9-38.2 75.1-95.7 75.1-160c0-80.2-45.4-149.9-112-184.6L320 64l32 0 0-64L320 0 256 0 192 0 128 0 96 0l0 64 32 0 0 103.4C61.4 202.1 16 271.8 16 352zm96-40c0-48.6 50.1-88 112-88s112 39.4 112 88c0 29.9-19 56.3-48 72.2l0 47.8-128 0 0-47.8c-29-15.9-48-42.3-48-72.2z" />
        <path d="M288 384.2c29-15.9 48-42.3 48-72.2c0-48.6-50.1-88-112-88s-112 39.4-112 88c0 29.9 19 56.3 48 72.2l0 47.8 128 0 0-47.8zM160 312a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm104-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </Icon>
);

export default FlaskRoundPoison;