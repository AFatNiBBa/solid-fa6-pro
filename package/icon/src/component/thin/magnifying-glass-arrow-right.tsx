
import { Icon } from "../../index";

/**
 * A component that renders the `magnifying-glass-arrow-right` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/magnifying-glass-arrow-right?s=thin magnifying-glass-arrow-right}
 * @preview ![magnifying-glass-arrow-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/magnifying-glass-arrow-right.svg)
 */
const MagnifyingGlassArrowRight: typeof Icon = x => (
    <Icon {...x}>
        <path d="M208 16a192 192 0 1 1 0 384 192 192 0 1 1 0-384zm0 400c54.6 0 104.2-21 141.3-55.4l149 149c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3l-149-149C395 312.2 416 262.6 416 208C416 93.1 322.9 0 208 0S0 93.1 0 208S93.1 416 208 416zm29.7-293.7c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3L292.7 200 104 200c-4.4 0-8 3.6-8 8s3.6 8 8 8l188.7 0-66.3 66.3c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0l80-80c3.1-3.1 3.1-8.2 0-11.3l-80-80z" />
    </Icon>
);

export default MagnifyingGlassArrowRight;