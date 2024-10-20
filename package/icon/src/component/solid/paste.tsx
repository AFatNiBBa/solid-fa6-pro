
import { Icon } from "../../index";

/**
 * A component that renders the `paste` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/paste?s=solid paste}
 * @preview ![paste](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/paste.svg)
 */
const Paste: typeof Icon = x => (
    <Icon {...x}>
        <path d="M160 0c-23.7 0-44.4 12.9-55.4 32L48 32C21.5 32 0 53.5 0 80L0 400c0 26.5 21.5 48 48 48l144 0 0-272c0-44.2 35.8-80 80-80l48 0 0-16c0-26.5-21.5-48-48-48l-56.6 0C204.4 12.9 183.7 0 160 0zM272 128c-26.5 0-48 21.5-48 48l0 272 0 16c0 26.5 21.5 48 48 48l192 0c26.5 0 48-21.5 48-48l0-220.1c0-12.7-5.1-24.9-14.1-33.9l-67.9-67.9c-9-9-21.2-14.1-33.9-14.1L320 128l-48 0zM160 40a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </Icon>
);

export default Paste;