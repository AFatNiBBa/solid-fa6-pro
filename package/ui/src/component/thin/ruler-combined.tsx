
import { Icon } from "../../index";

/**
 * A component that renders the `ruler-combined` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ruler-combined?s=thin ruler-combined}
 * @preview ![ruler-combined](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/ruler-combined.svg)
 */
const RulerCombined: typeof Icon = x => (
    <Icon {...x}>
        <path d="M192 208l-88 0c-4.4 0-8 3.6-8 8s3.6 8 8 8l88 0 0 80-88 0c-4.4 0-8 3.6-8 8s3.6 8 8 8l88 0 0 88c0 4.4 3.6 8 8 8s8-3.6 8-8l0-88 80 0 0 88c0 4.4 3.6 8 8 8s8-3.6 8-8l0-88 80 0 0 88c0 4.4 3.6 8 8 8s8-3.6 8-8l0-88 48 0c26.5 0 48 21.5 48 48l0 80c0 26.5-21.5 48-48 48l-304 0-80 0c-23.2 0-42.6-16.4-47-38.3c-.6-3.1-1-6.4-1-9.7l0-80L16 64c0-26.5 21.5-48 48-48l80 0c26.5 0 48 21.5 48 48l0 48-88 0c-4.4 0-8 3.6-8 8s3.6 8 8 8l88 0 0 80zm200 96l-96 0-72 0-16 0 0-16 0-72 0-96s0 0 0 0s0 0 0 0l0-56c0-35.3-28.7-64-64-64L64 0C28.7 0 0 28.7 0 64L0 368l0 80c0 4.4 .4 8.7 1.3 12.9C7.3 490.1 33.1 512 64 512l80 0 304 0c35.3 0 64-28.7 64-64l0-80c0-35.3-28.7-64-64-64l-56 0z" />
    </Icon>
);

export default RulerCombined;