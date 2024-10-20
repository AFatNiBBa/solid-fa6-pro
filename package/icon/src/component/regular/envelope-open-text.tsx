
import { Icon } from "../../index";

/**
 * A component that renders the `envelope-open-text` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/envelope-open-text?s=regular envelope-open-text}
 * @preview ![envelope-open-text](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/envelope-open-text.svg)
 */
const EnvelopeOpenText: typeof Icon = x => (
    <Icon {...x}>
        <path d="M392 48L120 48c-4.4 0-8 3.6-8 8l0 169.2L69.2 190.1c-1.7-1.4-3.4-2.6-5.2-3.8L64 56C64 25.1 89.1 0 120 0L392 0c30.9 0 56 25.1 56 56l0 130.2c-1.8 1.2-3.5 2.5-5.2 3.8L400 225.2 400 56c0-4.4-3.6-8-8-8zM160 120c0-13.3 10.7-24 24-24l144 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-144 0c-13.3 0-24-10.7-24-24zm0 80c0-13.3 10.7-24 24-24l144 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-144 0c-13.3 0-24-10.7-24-24zM48 276.2L48 456c0 4.4 3.6 8 8 8l400 0c4.4 0 8-3.6 8-8l0-179.8L322 392.8c-38.4 31.5-93.7 31.5-132 0L48 276.2zM0 237.9C0 221.4 13.4 208 29.9 208c6.9 0 13.6 2.4 19 6.8l171.6 141c20.7 17 50.4 17 71.1 0l171.6-141c5.3-4.4 12.1-6.8 19-6.8c16.5 0 29.9 13.4 29.9 29.9L512 456c0 30.9-25.1 56-56 56L56 512c-30.9 0-56-25.1-56-56L0 237.9z" />
    </Icon>
);

export default EnvelopeOpenText;