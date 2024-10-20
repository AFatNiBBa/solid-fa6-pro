
import { Icon } from "../../index";

/**
 * A component that renders the `card-spade` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/card-spade?s=regular card-spade}
 * @preview ![card-spade](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/card-spade.svg)
 */
const CardSpade: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0c8.8 0 16-7.2 16-16l0-384c0-8.8-7.2-16-16-16L64 48zM0 64C0 28.7 28.7 0 64 0L320 0c35.3 0 64 28.7 64 64l0 384c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zm175 77.2c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6 59.7 59.7c21.9 21.9 21.9 57.3 0 79.2s-57.3 21.9-79.2 0l-3.2-3.2c-.3-.3-.6-.6-1-.9l0 37.4 16 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-64 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l16 0 0-37.4c-.3 .3-.7 .6-1 .9l-3.2 3.2c-21.9 21.9-57.3 21.9-79.2 0s-21.9-57.3 0-79.2l59.7-59.7L175 141.2z" />
    </Icon>
);

export default CardSpade;