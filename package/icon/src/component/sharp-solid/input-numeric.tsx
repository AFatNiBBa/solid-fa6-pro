
import { Icon } from "../../index";

/**
 * A component that renders the `input-numeric` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/input-numeric?s=sharp-solid input-numeric}
 * @preview ![input-numeric](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/input-numeric.svg)
 */
const InputNumeric: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M576 128l0 256L64 384l0-256 512 0zM64 64L0 64l0 64L0 384l0 64 64 0 512 0 64 0 0-64 0-256 0-64-64 0L64 64zm40 96l0 48 24 0 8 0 0 96-16 0-24 0 0 48 24 0 80 0 24 0 0-48-24 0-16 0 0-120 0-24-24 0-32 0-24 0zm221.4 51.8c5.9 6.7 5.7 16.7-.3 23.3L256 309.9l0 42.1 16 0 88 0 24 0 0-48-24 0-33.2 0 33.6-36.4c17-18.4 21.5-44.1 13.5-66.4l3.4-3-15.8-18.1c-26.2-30-73-29.7-98.9 .5l-16.9 19.7 36.4 31.2 16.9-19.7c6.9-8.1 19.3-8.1 26.3-.1z" />
    </Icon>
);

export default InputNumeric;