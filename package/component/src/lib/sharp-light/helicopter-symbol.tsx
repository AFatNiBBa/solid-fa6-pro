
import { Icon } from "../../index";

/**
 * A component that renders the `helicopter-symbol` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/helicopter-symbol?s=sharp-light helicopter-symbol}
 * @preview ![helicopter-symbol](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/helicopter-symbol.svg)
 */
const HelicopterSymbol: typeof Icon = x => (
    <Icon {...x}>
        <path d="M477.7 224l32.3 0C495.6 108.2 403.8 16.4 288 2l0 32.3c98.1 14 175.7 91.6 189.7 189.7zM510 288l-32.3 0c-14 98.1-91.6 175.7-189.7 189.7l0 32.3c115.8-14.4 207.6-106.2 222-222zM2 288C16.4 403.8 108.2 495.6 224 510l0-32.3C125.9 463.7 48.3 386.1 34.3 288L2 288zm0-64l32.3 0C48.3 125.9 125.9 48.3 224 34.3L224 2C108.2 16.4 16.4 108.2 2 224zm174-80l0-16-32 0 0 16 0 224 0 16 32 0 0-16 0-96 160 0 0 96 0 16 32 0 0-16 0-224 0-16-32 0 0 16 0 96-160 0 0-96z" />
    </Icon>
);

export default HelicopterSymbol;