
import { Icon, generic } from "../../index";

/**
 * A component that renders the `mask-snorkel` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mask-snorkel?s=duotone mask-snorkel}
 * @preview ![mask-snorkel](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/mask-snorkel.svg)
 */
const MaskSnorkel: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M288 384c0 1.7 .1 3.5 .4 5.3l.3 1.9c11.6 69.7 72 120.8 142.6 120.8C511.3 512 576 447.3 576 367.4L576 192l-64 0 0 175.4c0 44.5-36.1 80.6-80.6 80.6c-39.4 0-73-28.5-79.5-67.4l-.3-1.9c-2.9-17.4-19.4-29.2-36.8-26.3C299.1 355 288 368.6 288 384zM512 64l0 96 64 0 0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32z" />
        <path d="M64 64C28.7 64 0 92.7 0 128l0 96c0 35.3 28.7 64 64 64l79.7 0c28.6 0 53.7-18.9 61.5-46.4l3.4-11.7c4.4-15.5 26.3-15.5 30.8 0l3.4 11.7c7.8 27.5 33 46.4 61.5 46.4l79.7 0c35.3 0 64-28.7 64-64l0-96c0-35.3-28.7-64-64-64L64 64zm512 96l-64 0 0 32 64 0 0-32z" />
    </Icon>
);

export default MaskSnorkel;