
import { Icon } from "../../index";

/**
 * A component that renders the `calculator` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/calculator?s=regular calculator}
 * @preview ![calculator](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/calculator.svg)
 */
const Calculator: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M336 176l0 272c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-272 288 0zm0-48L48 128l0-64c0-8.8 7.2-16 16-16l256 0c8.8 0 16 7.2 16 16l0 64zm48 0l0-64c0-35.3-28.7-64-64-64L64 0C28.7 0 0 28.7 0 64l0 64 0 24 0 24L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-272 0-24 0-24zM80 232a24 24 0 1 0 48 0 24 24 0 1 0 -48 0zm24 64a24 24 0 1 0 0 48 24 24 0 1 0 0-48zM80 408c0 13.3 10.7 24 24 24l88 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-88 0c-13.3 0-24 10.7-24 24zM192 208a24 24 0 1 0 0 48 24 24 0 1 0 0-48zM168 320a24 24 0 1 0 48 0 24 24 0 1 0 -48 0zM280 208a24 24 0 1 0 0 48 24 24 0 1 0 0-48zM256 320a24 24 0 1 0 48 0 24 24 0 1 0 -48 0zm24 64a24 24 0 1 0 0 48 24 24 0 1 0 0-48z" />
    </Icon>
);

export default Calculator;