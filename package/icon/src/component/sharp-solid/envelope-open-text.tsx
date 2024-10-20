
import { Icon } from "../../index";

/**
 * A component that renders the `envelope-open-text` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/envelope-open-text?s=sharp-solid envelope-open-text}
 * @preview ![envelope-open-text](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/envelope-open-text.svg)
 */
const EnvelopeOpenText: typeof Icon = x => (
    <Icon {...x}>
        <path d="M512 448l0 64-64 0L64 512 0 512l0-64L0 244.8l4.1 2.9L246.7 421l9.3 6.6 9.3-6.6L507.9 247.7l4.1-2.9L512 448zm0-256l0 13.5-22.7 16.2L416 274.1l0-74.1 0-56 0-24 0-24-32 0-16 0-90.7 0-42.7 0L144 96l-16 0L96 96l0 24 0 24 0 56 0 74.1L22.7 221.7 0 205.5 0 192l48-36 0-60 0-48 48 0 96 0L256 0l64 48 96 0 48 0 0 48 0 60 48 36zM176 160l160 0 16 0 0 32-16 0-160 0-16 0 0-32 16 0zm0 64l160 0 16 0 0 32-16 0-160 0-16 0 0-32 16 0z" />
    </Icon>
);

export default EnvelopeOpenText;