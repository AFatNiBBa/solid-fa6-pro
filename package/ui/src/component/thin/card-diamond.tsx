
import { Icon } from "../../index";

/**
 * A component that renders the `card-diamond` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/card-diamond?s=thin card-diamond}
 * @preview ![card-diamond](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/card-diamond.svg)
 */
const CardDiamond: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M64 16C37.5 16 16 37.5 16 64l0 384c0 26.5 21.5 48 48 48l256 0c26.5 0 48-21.5 48-48l0-384c0-26.5-21.5-48-48-48L64 16zM0 64C0 28.7 28.7 0 64 0L320 0c35.3 0 64 28.7 64 64l0 384c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zm203.3 84.7l96 96c6.2 6.2 6.2 16.4 0 22.6l-96 96c-6.2 6.2-16.4 6.2-22.6 0l-96-96c-6.2-6.2-6.2-16.4 0-22.6l96-96c6.2-6.2 16.4-6.2 22.6 0zM96 256l11.3 11.3 73.4 73.4L192 352l11.3-11.3 73.4-73.4L288 256l-11.3-11.3-73.4-73.4L192 160l-11.3 11.3-73.4 73.4L96 256z" />
    </Icon>
);

export default CardDiamond;