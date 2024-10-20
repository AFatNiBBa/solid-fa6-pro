
import { Icon } from "../../index";

/**
 * A component that renders the `spinner` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/spinner?s=sharp-light spinner}
 * @preview ![spinner](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/spinner.svg)
 */
const Spinner: typeof Icon = x => (
    <Icon {...x}>
        <path d="M240 64l32 0 0-32-32 0 0 32zM208 96l0-32 0-32 0-32 32 0 32 0 32 0 0 32 0 32 0 32-32 0-32 0-32 0zM64 240l-32 0 0 32 32 0 0-32zM32 208l32 0 32 0 0 32 0 32 0 32-32 0-32 0L0 304l0-32 0-32 0-32 32 0zM240 448l0 32 32 0 0-32-32 0zm-32 32l0-32 0-32 32 0 32 0 32 0 0 32 0 32 0 32-32 0-32 0-32 0 0-32zM448 240l0 32 32 0 0-32-32 0zm-32-32l32 0 32 0 32 0 0 32 0 32 0 32-32 0-32 0-32 0 0-32 0-32 0-32zM108.9 380.5L86.3 403.1l22.6 22.6 22.6-22.6-22.6-22.6zm-45.3 0l22.6-22.6 22.6-22.6 22.6 22.6 22.6 22.6 22.6 22.6-22.6 22.6-22.6 22.6L108.9 471 86.3 448.3 63.7 425.7 41 403.1l22.6-22.6zm316.8 22.6l22.6 22.6 22.6-22.6-22.6-22.6-22.6 22.6zm0 45.3l-22.6-22.6-22.6-22.6 22.6-22.6 22.6-22.6 22.6-22.6 22.6 22.6 22.6 22.6L471 403.1l-22.6 22.6-22.6 22.6L403.1 471l-22.6-22.6zM108.9 131.5l22.6-22.6L108.9 86.3 86.3 108.9l22.6 22.6zm0 45.3L86.3 154.2 63.7 131.5 41 108.9 63.7 86.3 86.3 63.7 108.9 41l22.6 22.6 22.6 22.6 22.6 22.6-22.6 22.6-22.6 22.6-22.6 22.6z" />
    </Icon>
);

export default Spinner;