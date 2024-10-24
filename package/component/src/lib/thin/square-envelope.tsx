
import { Icon } from "../../index";

/**
 * A component that renders the `square-envelope` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-envelope?s=thin square-envelope}
 * @preview ![square-envelope](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/square-envelope.svg)
 */
const SquareEnvelope: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M384 48c26.5 0 48 21.5 48 48l0 320c0 26.5-21.5 48-48 48L64 464c-26.5 0-48-21.5-48-48L16 96c0-26.5 21.5-48 48-48l320 0zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM352 160c8.8 0 16 7.2 16 16l0 6.7-4 2.6L234.4 268.9c-3.1 2-6.7 3.1-10.4 3.1s-7.3-1.1-10.4-3.1L84 185.3l-4-2.6 0-6.7c0-8.8 7.2-16 16-16l256 0zm16 41.7L368 336c0 8.8-7.2 16-16 16L96 352c-8.8 0-16-7.2-16-16l0-134.3 124.9 80.6c5.7 3.7 12.3 5.6 19.1 5.6s13.4-2 19.1-5.6L368 201.7zM96 144c-17.7 0-32 14.3-32 32l0 160c0 17.7 14.3 32 32 32l256 0c17.7 0 32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L96 144z" />
    </Icon>
);

export default SquareEnvelope;