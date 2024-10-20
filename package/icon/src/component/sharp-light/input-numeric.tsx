
import { Icon } from "../../index";

/**
 * A component that renders the `input-numeric` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/input-numeric?s=sharp-light input-numeric}
 * @preview ![input-numeric](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/input-numeric.svg)
 */
const InputNumeric: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M608 96l0 320L32 416 32 96l576 0zM32 64L0 64 0 96 0 416l0 32 32 0 576 0 32 0 0-32 0-320 0-32-32 0L32 64zm64 96l0 32 16 0 16 0 0 128-16 0-16 0 0 32 16 0 64 0 16 0 0-32-16 0-16 0 0-144 0-16-16 0-32 0-16 0zm169.9 40c11.4-9.7 28.5-8.5 38.3 2.8c9.7 11.1 8.8 28-2 38l-73 67.4L224 313l0 7 0 16 0 16 16 0 96 0 16 0 0-32-16 0-72.4 0 60.3-55.6c19.5-18 24.3-46.3 13.3-69.2l1.6-1.4-10.5-12c-21.4-24.5-58.5-27.1-83.2-6l-23.5 20.1 20.8 24.3L265.9 200z" />
    </Icon>
);

export default InputNumeric;