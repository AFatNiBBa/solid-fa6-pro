
import { Icon, generic } from "../../index";

/**
 * A component that renders the `eye-low-vision` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/eye-low-vision?s=sharp-duotone-solid eye-low-vision}
 * @preview ![eye-low-vision](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/eye-low-vision.svg)
 */
const EyeLowVision: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M151.7 95l70.9 55c51.7-47.6 131.8-51.4 188-5.9c54.7 44.3 68.5 120.3 36.3 180.1L524 384.1c41.9-44 70.2-93.9 84-128.1C578 181.3 478.4 32 320 32c-66.9 0-123.2 26.6-168.3 63zm149.5 66.9l11.6 58.2c31.8 24.7 63.5 49.3 95.3 74c5.1-11.7 7.9-24.6 7.9-38.1c0-53-43-96-96-96c-6.4 0-12.7 .6-18.8 1.8z" />
        <path d="M48.4 14.8L29.4 .1 0 38 19 52.7 591.5 497.2l19 14.7L639.9 474l-19-14.7L48.4 14.8zM34.9 249.2c-1 2.3-2 4.6-2.9 6.8c30 74.7 129.6 224 288 224c3.1 0 6.1-.1 9.2-.2L34.9 249.2zM393.1 469c18.3-5.7 35.6-13.3 51.8-22.4L85.7 163.5c-10.9 14.3-20.4 28.6-28.5 42.2L393.1 469z" />
    </Icon>
);

export default EyeLowVision;