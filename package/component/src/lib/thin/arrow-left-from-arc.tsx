
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-left-from-arc` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-left-from-arc?s=thin arrow-left-from-arc}
 * @preview ![arrow-left-from-arc](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/arrow-left-from-arc.svg)
 */
const ArrowLeftFromArc: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 256C496 123.5 388.5 16 256 16c-4.4 0-8-3.6-8-8s3.6-8 8-8C397.4 0 512 114.6 512 256s-114.6 256-256 256c-4.4 0-8-3.6-8-8s3.6-8 8-8c132.5 0 240-107.5 240-240zM154.8 121.9c3.4-2.8 8.4-2.4 11.3 1s2.4 8.4-1 11.3L29.9 248 344 248c4.4 0 8 3.6 8 8s-3.6 8-8 8L29.9 264 165.2 377.9c3.4 2.8 3.8 7.9 1 11.3s-7.9 3.8-11.3 1l-152-128C1 260.6 0 258.4 0 256s1-4.6 2.8-6.1l152-128z" />
    </Icon>
);

export default ArrowLeftFromArc;