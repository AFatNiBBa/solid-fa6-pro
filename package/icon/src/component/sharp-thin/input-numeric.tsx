
import { Icon } from "../../index";

/**
 * A component that renders the `input-numeric` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/input-numeric?s=sharp-thin input-numeric}
 * @preview ![input-numeric](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/input-numeric.svg)
 */
const InputNumeric: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M624 80l0 352L16 432 16 80l608 0zM16 64L0 64 0 80 0 432l0 16 16 0 608 0 16 0 0-16 0-352 0-16-16 0L16 64zm88 104l0 16 8 0 24 0 0 144-24 0-8 0 0 16 8 0 64 0 8 0 0-16-8 0-24 0 0-152 0-8-8 0-32 0-8 0zm156 26.5c15.1-12.9 37.7-11.3 50.8 3.6c12.5 14.3 11.8 35.9-1.6 49.4l-74.8 74.8-2.3 2.3 0 3.3 0 8 0 8 8 0 96 0 8 0 0-16-8 0-84.7 0 69.1-69.1c17.5-17.5 20.1-44.5 7.2-64.8l.5-.4-5.3-6c-18.8-21.5-51.5-23.9-73.2-5.3l-22.8 19.5 10.4 12.1L260 194.5z" />
    </Icon>
);

export default InputNumeric;