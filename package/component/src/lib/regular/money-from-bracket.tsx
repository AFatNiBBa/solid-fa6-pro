
import { Icon } from "../../index";

/**
 * A component that renders the `money-from-bracket` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/money-from-bracket?s=regular money-from-bracket}
 * @preview ![money-from-bracket](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/money-from-bracket.svg)
 */
const MoneyFromBracket: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M48 88l0 80c0 13.3-10.7 24-24 24s-24-10.7-24-24L0 88C0 39.4 39.4 0 88 0L552 0c48.6 0 88 39.4 88 88l0 80c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-80c0-22.1-17.9-40-40-40L88 48C65.9 48 48 65.9 48 88zm416 8l48 0 0 352c0 35.3-28.7 64-64 64l-256 0c-35.3 0-64-28.7-64-64l0-352 48 0 0 304c35.3 0 64 28.7 64 64l160 0c0-35.3 28.7-64 64-64l0-304zM320 352c-53 0-96-35.8-96-80s43-80 96-80s96 35.8 96 80s-43 80-96 80z" />
    </Icon>
);

export default MoneyFromBracket;