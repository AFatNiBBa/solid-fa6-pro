
import { Icon } from "../../index";

/**
 * A component that renders the `brake-warning` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/brake-warning?s=sharp-regular brake-warning}
 * @preview ![brake-warning](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/brake-warning.svg)
 */
const BrakeWarning: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M320 80a176 176 0 1 1 0 352 176 176 0 1 1 0-352zm0 400a224 224 0 1 0 0-448 224 224 0 1 0 0 448zM104.1 88.8l-40.4-26L50.7 83C18.6 132.9 0 192.3 0 256s18.6 123.1 50.7 173l13 20.2 40.4-26L91.1 403C63.8 360.6 48 310.2 48 256s15.8-104.6 43.1-147l13-20.2zm472.2-26l-40.4 26 13 20.2c27.3 42.4 43.1 92.8 43.1 147s-15.8 104.6-43.1 147l-13 20.2 40.4 26 13-20.2C621.4 379.1 640 319.7 640 256s-18.6-123.1-50.7-173l-13-20.2zM344 128l-48 0 0 24 0 112 0 24 48 0 0-24 0-112 0-24zM296 368l48 0 0-48-48 0 0 48z" />
    </Icon>
);

export default BrakeWarning;