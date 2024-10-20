
import { Icon } from "../../index";

/**
 * A component that renders the `ruler-vertical` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ruler-vertical?s=thin ruler-vertical}
 * @preview ![ruler-vertical](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/ruler-vertical.svg)
 */
const RulerVertical: typeof Icon = x => (
    <Icon viewBox="0 0 256 512" {...x}>
        <path d="M192 16c26.5 0 48 21.5 48 48l0 40-80 0c-4.4 0-8 3.6-8 8s3.6 8 8 8l80 0 0 80-80 0c-4.4 0-8 3.6-8 8s3.6 8 8 8l80 0 0 80-80 0c-4.4 0-8 3.6-8 8s3.6 8 8 8l80 0 0 80-80 0c-4.4 0-8 3.6-8 8s3.6 8 8 8l80 0 0 40c0 26.5-21.5 48-48 48L64 496c-26.5 0-48-21.5-48-48L16 64c0-26.5 21.5-48 48-48l128 0zm64 384l0-96 0-96 0-96 0-48c0-35.3-28.7-64-64-64L64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l128 0c35.3 0 64-28.7 64-64l0-48z" />
    </Icon>
);

export default RulerVertical;