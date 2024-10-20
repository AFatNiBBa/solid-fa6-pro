
import { Icon, generic } from "../../index";

/**
 * A component that renders the `eye-low-vision` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/eye-low-vision?s=duotone eye-low-vision}
 * @preview ![eye-low-vision](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/eye-low-vision.svg)
 */
const EyeLowVision: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M150.7 92.8l72.4 56.7C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7c26.4 20.7 52.7 41.3 79.1 62c39.6-40.6 66.4-86.1 79.9-118.4c1.6-3.9 2.5-8.1 2.5-12.3s-.8-8.4-2.5-12.3c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8zm161 67.6c5.3 9.3 8.4 20.1 8.4 31.6c0 10.2-2.4 19.8-6.6 28.3c31.5 24.7 63 49.4 94.6 74.1c5.2-11.8 8-24.8 8-38.5c0-53-43-96-96-96c-2.8 0-5.6 .1-8.4 .4z" />
        <path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L38.8 5.1zM33.1 247.8c-1.8 6.8-1.3 14 1.4 20.5c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c3.1 0 6.1-.1 9.2-.2L33.1 247.8zM393.6 469.4c18.7-5.5 36.2-13 52.6-21.8L83.1 161.5c-11 14.4-20.5 28.7-28.4 42.2l339 265.7z" />
    </Icon>
);

export default EyeLowVision;