
import { Icon } from "../../index";

/**
 * A component that renders the `radiation` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/radiation?s=sharp-solid radiation}
 * @preview ![radiation](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/radiation.svg)
 */
const Radiation: typeof Icon = x => (
    <Icon {...x}>
        <path d="M216 186.7c-23.9 13.8-40 39.7-40 69.3L0 256C0 161.3 51.5 78.5 128 34.3l88 152.4zM256 336c14.6 0 28.2-3.9 40-10.7l88 152.4C346.4 499.5 302.6 512 256 512s-90.4-12.5-128-34.3l88-152.4c11.8 6.8 25.4 10.7 40 10.7zm256-80l-176 0c0-29.6-16.1-55.5-40-69.3L384 34.3c76.5 44.3 128 127 128 221.7zM256 208a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
    </Icon>
);

export default Radiation;