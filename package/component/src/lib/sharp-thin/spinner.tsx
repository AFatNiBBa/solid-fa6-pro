
import { Icon } from "../../index";

/**
 * A component that renders the `spinner` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/spinner?s=sharp-thin spinner}
 * @preview ![spinner](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/spinner.svg)
 */
const Spinner: typeof Icon = x => (
    <Icon {...x}>
        <path d="M224 80l64 0 0-64-64 0 0 64zM208 96l0-16 0-64 0-16 16 0 64 0 16 0 0 16 0 64 0 16-16 0-64 0-16 0zM80 224l-64 0 0 64 64 0 0-64zM16 208l64 0 16 0 0 16 0 64 0 16-16 0-64 0L0 304l0-16 0-64 0-16 16 0zM224 432l0 64 64 0 0-64-64 0zm-16 64l0-64 0-16 16 0 64 0 16 0 0 16 0 64 0 16-16 0-64 0-16 0 0-16zM432 224l0 64 64 0 0-64-64 0zm-16-16l16 0 64 0 16 0 0 16 0 64 0 16-16 0-64 0-16 0 0-16 0-64 0-16zM108.9 357.8L63.7 403.1l45.3 45.3 45.3-45.3-45.3-45.3zM52.4 391.8l45.3-45.3 11.3-11.3 11.3 11.3 45.3 45.3 11.3 11.3-11.3 11.3-45.3 45.3L108.9 471 97.6 459.6 52.4 414.4 41 403.1l11.3-11.3zm305.5 11.3l45.3 45.3 45.3-45.3-45.3-45.3-45.3 45.3zm33.9 56.6l-45.3-45.3-11.3-11.3 11.3-11.3 45.3-45.3 11.3-11.3 11.3 11.3 45.3 45.3L471 403.1l-11.3 11.3-45.3 45.3L403.1 471l-11.3-11.3zM108.9 154.2l45.3-45.3L108.9 63.7 63.7 108.9l45.3 45.3zm0 22.6L97.6 165.5 52.4 120.2 41 108.9 52.4 97.6 97.6 52.4 108.9 41l11.3 11.3 45.3 45.3 11.3 11.3-11.3 11.3-45.3 45.3-11.3 11.3z" />
    </Icon>
);

export default Spinner;