
import { Icon } from "../../index";

/**
 * A component that renders the `ruble-sign` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ruble-sign?s=thin ruble-sign}
 * @preview ![ruble-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/ruble-sign.svg)
 */
const RubleSign: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M96.7 32C78.6 32 64 46.6 64 64.7L64 288 8 288c-4.4 0-8 3.6-8 8s3.6 8 8 8l56 0 0 64L8 368c-4.4 0-8 3.6-8 8s3.6 8 8 8l56 0 0 80c0 4.4 3.6 8 8 8s8-3.6 8-8l0-80 232 0c4.4 0 8-3.6 8-8s-3.6-8-8-8L80 368l0-64 152 0c75.1 0 136-60.9 136-136s-60.9-136-136-136L96.7 32zM232 288L80 288 80 64.7C80 55.5 87.5 48 96.7 48L232 48c66.3 0 120 53.7 120 120s-53.7 120-120 120z" />
    </Icon>
);

export default RubleSign;