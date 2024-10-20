
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-right-to-arc` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-right-to-arc?s=thin arrow-right-to-arc}
 * @preview ![arrow-right-to-arc](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/arrow-right-to-arc.svg)
 */
const ArrowRightToArc: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 256C496 123.5 388.5 16 256 16c-4.4 0-8-3.6-8-8s3.6-8 8-8C397.4 0 512 114.6 512 256s-114.6 256-256 256c-4.4 0-8-3.6-8-8s3.6-8 8-8c132.5 0 240-107.5 240-240zM197.2 121.9l152 128c1.8 1.5 2.8 3.8 2.8 6.1s-1 4.6-2.8 6.1l-152 128c-3.4 2.8-8.4 2.4-11.3-1s-2.4-8.4 1-11.3L322.1 264 8 264c-4.4 0-8-3.6-8-8s3.6-8 8-8l314.1 0L186.8 134.1c-3.4-2.8-3.8-7.9-1-11.3s7.9-3.8 11.3-1z" />
    </Icon>
);

export default ArrowRightToArc;