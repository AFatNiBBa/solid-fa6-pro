
import { Icon } from "../../index";

/**
 * A component that renders the `value-absolute` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/value-absolute?s=thin value-absolute}
 * @preview ![value-absolute](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/value-absolute.svg)
 */
const ValueAbsolute: typeof Icon = x => (
    <Icon {...x}>
        <path d="M8 32c-4.4 0-8 3.6-8 8L0 472c0 4.4 3.6 8 8 8s8-3.6 8-8L16 40c0-4.4-3.6-8-8-8zM149.7 138.3c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3L244.7 256 138.3 362.3c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0L256 267.3 362.3 373.7c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3L267.3 256 373.7 149.7c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0L256 244.7 149.7 138.3zM512 40c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 432c0 4.4 3.6 8 8 8s8-3.6 8-8l0-432z" />
    </Icon>
);

export default ValueAbsolute;