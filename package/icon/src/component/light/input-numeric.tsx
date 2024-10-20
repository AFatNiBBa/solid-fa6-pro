
import { Icon } from "../../index";

/**
 * A component that renders the `input-numeric` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/input-numeric?s=light input-numeric}
 * @preview ![input-numeric](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/input-numeric.svg)
 */
const InputNumeric: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M576 96c17.7 0 32 14.3 32 32l0 256c0 17.7-14.3 32-32 32L64 416c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l512 0zM64 64C28.7 64 0 92.7 0 128L0 384c0 35.3 28.7 64 64 64l512 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64L64 64zM96 176c0 8.8 7.2 16 16 16l16 0 0 128-16 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l64 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-16 0 0-144c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm168.7 27.4c9.4-11.3 26.2-12.6 37.2-2.9c10.8 9.5 11.9 25.9 2.5 36.7l-76.6 88.3c-4.1 4.7-5.1 11.4-2.5 17.1s8.3 9.4 14.6 9.4l96 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-61 0 53.6-61.9c20.9-24.2 18.4-60.7-5.6-81.8c-24.6-21.5-62-18.5-82.9 6.5l-12.4 14.9c-5.7 6.8-4.7 16.9 2 22.5s16.9 4.7 22.5-2l12.4-14.9z" />
    </Icon>
);

export default InputNumeric;