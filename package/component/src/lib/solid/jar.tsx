
import { Icon } from "../../index";

/**
 * A component that renders the `jar` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/jar?s=solid jar}
 * @preview ![jar](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/jar.svg)
 */
const Jar: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M32 32C32 14.3 46.3 0 64 0L256 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L64 64C46.3 64 32 49.7 32 32zM0 160c0-35.3 28.7-64 64-64l192 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 160zm96 64c-17.7 0-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32l128 0c17.7 0 32-14.3 32-32l0-96c0-17.7-14.3-32-32-32L96 224z" />
    </Icon>
);

export default Jar;