
import { Icon } from "../../index";

/**
 * A component that renders the `card-spade` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/card-spade?s=thin card-spade}
 * @preview ![card-spade](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/card-spade.svg)
 */
const CardSpade: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M64 16C37.5 16 16 37.5 16 64l0 384c0 26.5 21.5 48 48 48l256 0c26.5 0 48-21.5 48-48l0-384c0-26.5-21.5-48-48-48L64 16zM0 64C0 28.7 28.7 0 64 0L320 0c35.3 0 64 28.7 64 64l0 384c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zm186.3 62.5c3.1-3.1 8.2-3.1 11.3 0l39.6 39.6L297 225.9c25 25 25 65.5 0 90.5s-65.5 25-90.5 0l-6.5-6.5 0 56.1 24 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-64 0c-4.4 0-8-3.6-8-8s3.6-8 8-8l24 0 0-56.1-6.5 6.5c-25 25-65.5 25-90.5 0s-25-65.5 0-90.5l59.7-59.7 39.6-39.6zM192 301.9l-.1 .1 .2 0-.1-.1zm0-158.4l-33.9 33.9L98.3 237.2c-18.7 18.7-18.7 49.1 0 67.9s49.1 18.7 67.9 0l20.1-20.1c3.1-3.1 8.2-3.1 11.3 0l20.1 20.1c18.7 18.7 49.1 18.7 67.9 0s18.7-49.1 0-67.9l-59.7-59.7L192 143.5z" />
    </Icon>
);

export default CardSpade;