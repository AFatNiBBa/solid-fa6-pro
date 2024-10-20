
import { Icon } from "../../index";

/**
 * A component that renders the `align-slash` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/align-slash?s=sharp-solid align-slash}
 * @preview ![align-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/align-slash.svg)
 */
const AlignSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M48.4 14.8L29.4 .1 0 38l19 14.7L591.5 497.2l19 14.7L639.9 474l-19-14.7L482.7 352l61.3 0 0-64-143.7 0-82.4-64L544 224l0-64-308.6 0L153 96l391 0 0-64L96 32l0 19.8-47.6-37zM324.9 352l-81.2-64L96 288l0 64 228.9 0zM162.5 224L96 171.6 96 224l66.5 0zM487.4 480l-81.2-64L96 416l0 64 391.4 0z" />
    </Icon>
);

export default AlignSlash;