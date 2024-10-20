
import { Icon } from "../../index";

/**
 * A component that renders the `helicopter-symbol` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/helicopter-symbol?s=solid helicopter-symbol}
 * @preview ![helicopter-symbol](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/helicopter-symbol.svg)
 */
const HelicopterSymbol: typeof Icon = x => (
    <Icon {...x}>
        <path d="M445.3 224l64.7 0C495.6 108.2 403.8 16.4 288 2l0 64.7C368.4 80.1 431.9 143.6 445.3 224zM510 288l-64.7 0C431.9 368.4 368.4 431.9 288 445.3l0 64.7c115.8-14.4 207.6-106.2 222-222zM2 288C16.4 403.8 108.2 495.6 224 510l0-64.7C143.6 431.9 80.1 368.4 66.7 288L2 288zm0-64l64.7 0C80.1 143.6 143.6 80.1 224 66.7L224 2C108.2 16.4 16.4 108.2 2 224zm206-64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 192c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64 96 0 0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-192c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 64-96 0 0-64z" />
    </Icon>
);

export default HelicopterSymbol;