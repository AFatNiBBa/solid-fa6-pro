
import { Icon, generic } from "../../index";

/**
 * A component that renders the `rotate-reverse` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rotate-reverse?s=duotone rotate-reverse}
 * @preview ![rotate-reverse](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/rotate-reverse.svg)
 */
const RotateReverse: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M44.5 330.6C55.3 361.3 73 390 97.4 414.4C141.1 458.1 198.4 480 255.8 480c56.9 0 113.8-21.5 157.4-64.6L454.8 457c6.9 6.9 17.2 8.9 26.2 5.2s14.8-12.5 14.8-22.2l0-119.6 0-.4 0-.4 0-7.6c0-13.3-10.7-24-24-24l-7.6 0c-.2 0-.5 0-.7 0l-119.6 0c-9.7 0-18.5 5.8-22.2 14.8s-1.7 19.3 5.2 26.2l41.1 41.1c-62.6 61.5-163.1 61.2-225.3-1c-17.5-17.5-30.1-38-37.8-59.8c-4.6-13.1-17-21.4-30.2-21.4c-3.5 0-7.1 .6-10.6 1.8c-16.7 5.9-25.4 24.2-19.5 40.8z" />
        <path d="M406.6 202.6c-7.7-21.8-20.2-42.3-37.8-59.8c-62.2-62.2-162.7-62.5-225.3-1L184.7 183c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8L48.3 224c0 0 0 0 0 0l-8.4 0c-13.3 0-24-10.7-24-24l0-128c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2L98.3 96.6c87.6-86.5 228.7-86.2 315.8 1c24.4 24.4 42.1 53.1 52.9 83.7c5.9 16.7-2.9 34.9-19.5 40.8s-34.9-2.9-40.8-19.5z" />
    </Icon>
);

export default RotateReverse;