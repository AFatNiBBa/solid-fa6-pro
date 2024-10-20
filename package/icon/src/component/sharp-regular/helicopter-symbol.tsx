
import { Icon } from "../../index";

/**
 * A component that renders the `helicopter-symbol` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/helicopter-symbol?s=sharp-regular helicopter-symbol}
 * @preview ![helicopter-symbol](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/helicopter-symbol.svg)
 */
const HelicopterSymbol: typeof Icon = x => (
    <Icon {...x}>
        <path d="M461.6 224l48.5 0C495.6 108.2 403.8 16.4 288 2l0 48.5C377.3 64.2 447.8 134.7 461.6 224zM510 288l-48.5 0C447.8 377.3 377.3 447.8 288 461.6l0 48.5c115.8-14.4 207.6-106.2 222-222zM2 288C16.4 403.8 108.2 495.6 224 510l0-48.5C134.7 447.8 64.2 377.3 50.4 288L2 288zm0-64l48.5 0C64.2 134.7 134.7 64.2 224 50.4L224 2C108.2 16.4 16.4 108.2 2 224zm190-64l0-24-48 0 0 24 0 192 0 24 48 0 0-24 0-72 128 0 0 72 0 24 48 0 0-24 0-192 0-24-48 0 0 24 0 72-128 0 0-72z" />
    </Icon>
);

export default HelicopterSymbol;