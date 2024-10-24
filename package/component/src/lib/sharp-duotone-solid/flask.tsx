
import { Icon, generic } from "../../index";

/**
 * A component that renders the `flask` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/flask?s=sharp-duotone-solid flask}
 * @preview ![flask](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/flask.svg)
 */
const Flask: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 422.9L0 432l0 48 0 32 32 0 384 0 32 0 0-32 0-48 0-9.1-4.7-7.7L320 214.9 320 64l32 0 0-64L320 0 288 0 160 0 128 0 96 0l0 64 32 0 0 150.9L4.7 415.2 0 422.9zm64 18.1c24.8-40.4 49.7-80.7 74.5-121.1c16.3-26.4 32.5-52.8 48.8-79.2l4.7-7.7 0-9.1 0-160 64 0 0 160 0 9.1 4.7 7.7c16.3 26.4 32.5 52.8 48.8 79.2L384 441.1l0 6.9L64 448l0-6.9z" />
        <path d="M309.5 320l-171 0L64 441.1l0 6.9 320 0 0-6.9L309.5 320z" />
    </Icon>
);

export default Flask;