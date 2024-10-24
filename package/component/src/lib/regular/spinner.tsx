
import { Icon } from "../../index";

/**
 * A component that renders the `spinner` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/spinner?s=regular spinner}
 * @preview ![spinner](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/spinner.svg)
 */
const Spinner: typeof Icon = x => (
    <Icon {...x}>
        <path d="M288 32a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm0 448a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM448 256a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zM32 288a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM75 437a32 32 0 1 0 45.3-45.3A32 32 0 1 0 75 437zm316.8 0A32 32 0 1 0 437 391.8 32 32 0 1 0 391.8 437zM75 75a32 32 0 1 0 45.3 45.3A32 32 0 1 0 75 75z" />
    </Icon>
);

export default Spinner;