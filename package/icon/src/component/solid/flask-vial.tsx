
import { Icon } from "../../index";

/**
 * A component that renders the `flask-vial` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/flask-vial?s=solid flask-vial}
 * @preview ![flask-vial](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/flask-vial.svg)
 */
const FlaskVial: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M175 389.4c-9.8 16-15 34.3-15 53.1c-10 3.5-20.8 5.5-32 5.5c-53 0-96-43-96-96L32 64C14.3 64 0 49.7 0 32S14.3 0 32 0L96 0l64 0 64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l0 245.9-49 79.6zM96 64l0 96 64 0 0-96L96 64zM352 0L480 0l32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l0 150.9L629.7 406.2c6.7 10.9 10.3 23.5 10.3 36.4c0 38.3-31.1 69.4-69.4 69.4l-309.2 0c-38.3 0-69.4-31.1-69.4-69.4c0-12.8 3.6-25.4 10.3-36.4L320 214.9 320 64c-17.7 0-32-14.3-32-32s14.3-32 32-32l32 0zm32 64l0 160c0 5.9-1.6 11.7-4.7 16.8L330.5 320l171 0-48.8-79.2c-3.1-5-4.7-10.8-4.7-16.8l0-160-64 0z" />
    </Icon>
);

export default FlaskVial;