
import { Icon } from "../../index";

/**
 * A component that renders the `paste` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/paste?s=sharp-solid paste}
 * @preview ![paste](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/paste.svg)
 */
const Paste: typeof Icon = x => (
    <Icon {...x}>
        <path d="M160 0c-23.7 0-44.4 12.9-55.4 32L0 32 0 448l192 0 0-320 0-32 32 0 96 0 0-64L215.4 32C204.4 12.9 183.7 0 160 0zm0 40a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm96 88l-32 0 0 32 0 288 0 64 288 0 0-288-96-96-96 0-64 0z" />
    </Icon>
);

export default Paste;