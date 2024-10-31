
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-up-to-line` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-to-line?s=thin arrow-up-to-line}
 * @preview ![arrow-up-to-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/arrow-up-to-line.svg)
 */
const ArrowUpToLine: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M8 32c-4.4 0-8 3.6-8 8s3.6 8 8 8l368 0c4.4 0 8-3.6 8-8s-3.6-8-8-8L8 32zm189.7 98.3c-3.1-3.1-8.2-3.1-11.3 0l-136 136c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0L184 155.3 184 472c0 4.4 3.6 8 8 8s8-3.6 8-8l0-316.7L322.3 277.7c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3l-136-136z" />
    </Icon>
);

export default ArrowUpToLine;