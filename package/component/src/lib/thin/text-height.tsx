
import { Icon } from "../../index";

/**
 * A component that renders the `text-height` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/text-height?s=thin text-height}
 * @preview ![text-height](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/text-height.svg)
 */
const TextHeight: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M485.7 34.3c-3.1-3.1-8.2-3.1-11.3 0l-80 80c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0L472 59.3l0 393.4-66.3-66.3c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3l80 80c3.1 3.1 8.2 3.1 11.3 0l80-80c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0L488 452.7l0-393.4 66.3 66.3c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3l-80-80zM16 56c0-4.4 3.6-8 8-8l128 0 0 416-80 0c-4.4 0-8 3.6-8 8s3.6 8 8 8l88 0 88 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-80 0 0-416 128 0c4.4 0 8 3.6 8 8l0 48c0 4.4 3.6 8 8 8s8-3.6 8-8l0-48c0-13.3-10.7-24-24-24L160 32 24 32C10.7 32 0 42.7 0 56l0 48c0 4.4 3.6 8 8 8s8-3.6 8-8l0-48z" />
    </Icon>
);

export default TextHeight;