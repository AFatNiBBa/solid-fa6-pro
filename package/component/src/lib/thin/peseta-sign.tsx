
import { Icon } from "../../index";

/**
 * A component that renders the `peseta-sign` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/peseta-sign?s=thin peseta-sign}
 * @preview ![peseta-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/peseta-sign.svg)
 */
const PesetaSign: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M79.3 32C62 32 48 46 48 63.3L48 176 8 176c-4.4 0-8 3.6-8 8s3.6 8 8 8l40 0 0 120 0 160c0 4.4 3.6 8 8 8s8-3.6 8-8l0-152 128 0c74.1 0 135.2-56 143.1-128l40.9 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-40 0c0-79.5-64.5-144-144-144L79.3 32zM320 176L64 176 64 63.3C64 54.9 70.9 48 79.3 48L192 48c70.7 0 128 57.3 128 128zM64 192l255 0c-7.9 63.1-61.7 112-127 112L64 304l0-112z" />
    </Icon>
);

export default PesetaSign;