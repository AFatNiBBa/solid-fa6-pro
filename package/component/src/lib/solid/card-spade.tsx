
import { Icon } from "../../index";

/**
 * A component that renders the `card-spade` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/card-spade?s=solid card-spade}
 * @preview ![card-spade](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/card-spade.svg)
 */
const CardSpade: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-384c0-35.3-28.7-64-64-64L64 0zM175 137.8c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6 64 64c21.9 21.9 21.9 57.3 0 79.2s-57.3 21.9-79.2 0l-7.4-7.4c-.3-.3-.6-.6-1-.9l0 40.8 16 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-64 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l16 0 0-40.8c-.3 .3-.7 .6-1 .9l-7.4 7.4c-21.9 21.9-57.3 21.9-79.2 0s-21.9-57.3 0-79.2l64-64L175 137.8z" />
    </Icon>
);

export default CardSpade;