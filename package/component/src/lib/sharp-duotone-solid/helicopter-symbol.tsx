
import { Icon, generic } from "../../index";

/**
 * A component that renders the `helicopter-symbol` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/helicopter-symbol?s=sharp-duotone-solid helicopter-symbol}
 * @preview ![helicopter-symbol](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/helicopter-symbol.svg)
 */
const HelicopterSymbol: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M2 224l64.7 0C80.1 143.6 143.6 80.1 224 66.7L224 2C108.2 16.4 16.4 108.2 2 224zm0 64C16.4 403.8 108.2 495.6 224 510l0-64.7C143.6 431.9 80.1 368.4 66.7 288L2 288zM288 2l0 64.7C368.4 80.1 431.9 143.6 445.3 224l64.7 0C495.6 108.2 403.8 16.4 288 2zm0 443.4l0 64.7c115.8-14.4 207.6-106.2 222-222l-64.7 0C431.9 368.4 368.4 431.9 288 445.3z" />
        <path d="M208 128l0 32 0 64 96 0 0-64 0-32 64 0 0 32 0 192 0 32-64 0 0-32 0-64-96 0 0 64 0 32-64 0 0-32 0-192 0-32 64 0z" />
    </Icon>
);

export default HelicopterSymbol;