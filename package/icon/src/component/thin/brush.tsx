
import { Icon } from "../../index";

/**
 * A component that renders the `brush` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/brush?s=thin brush}
 * @preview ![brush](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/brush.svg)
 */
const Brush: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M256 352c-8.8 0-16 7.2-16 16l0 80c0 26.5-21.5 48-48 48s-48-21.5-48-48l0-80c0-8.8-7.2-16-16-16l-48 0c-35.3 0-64-28.7-64-64l0-16 352 0 0 16c0 35.3-28.7 64-64 64l-48 0zm112-96L16 256 16 64c0-26.5 21.5-48 48-48l16 0 0 104c0 4.4 3.6 8 8 8s8-3.6 8-8L96 16l80 0 0 72c0 4.4 3.6 8 8 8s8-3.6 8-8l0-72 64 0 0 88c0 4.4 3.6 8 8 8s8-3.6 8-8l0-88 48 0c26.5 0 48 21.5 48 48l0 192zM80 368l32 0 16 0 0 16 0 64c0 35.3 28.7 64 64 64s64-28.7 64-64l0-64 0-16 16 0 32 0c44.2 0 80-35.8 80-80l0-224c0-35.3-28.7-64-64-64L64 0C28.7 0 0 28.7 0 64L0 288c0 44.2 35.8 80 80 80zm128 80a16 16 0 1 0 -32 0 16 16 0 1 0 32 0z" />
    </Icon>
);

export default Brush;