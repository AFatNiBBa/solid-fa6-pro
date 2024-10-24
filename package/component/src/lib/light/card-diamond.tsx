
import { Icon } from "../../index";

/**
 * A component that renders the `card-diamond` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/card-diamond?s=light card-diamond}
 * @preview ![card-diamond](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/card-diamond.svg)
 */
const CardDiamond: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M64 32C46.3 32 32 46.3 32 64l0 384c0 17.7 14.3 32 32 32l256 0c17.7 0 32-14.3 32-32l0-384c0-17.7-14.3-32-32-32L64 32zM0 64C0 28.7 28.7 0 64 0L320 0c35.3 0 64 28.7 64 64l0 384c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zm203.3 84.7l96 96c6.2 6.2 6.2 16.4 0 22.6l-96 96c-6.2 6.2-16.4 6.2-22.6 0l-96-96c-6.2-6.2-6.2-16.4 0-22.6l96-96c6.2-6.2 16.4-6.2 22.6 0zM192 329.4L265.4 256 192 182.6 118.6 256 192 329.4z" />
    </Icon>
);

export default CardDiamond;