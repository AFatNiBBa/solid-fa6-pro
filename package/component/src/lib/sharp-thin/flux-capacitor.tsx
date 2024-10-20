
import { Icon } from "../../index";

/**
 * A component that renders the `flux-capacitor` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/flux-capacitor?s=sharp-thin flux-capacitor}
 * @preview ![flux-capacitor](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/flux-capacitor.svg)
 */
const FluxCapacitor: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M432 48l0 416L16 464 16 48l416 0zM16 32L0 32 0 48 0 464l0 16 16 0 416 0 16 0 0-16 0-416 0-16-16 0L16 32zM312 96c39.8 0 72 32.2 72 72s-32.2 72-72 72l-8 0 0 16 8 0c48.6 0 88-39.4 88-88s-39.4-88-88-88c-32.6 0-61 17.7-76.2 44l-4 6.9 13.8 8 4-6.9c12.5-21.5 35.7-36 62.4-36zM172.6 293.6l5.6-5.7-11.4-11.2-5.6 5.7C145.6 298.3 136 320 136 344c0 48.6 39.4 88 88 88s88-39.4 88-88c0-24-9.6-45.7-25.2-61.6l-5.6-5.7-11.4 11.2 5.6 5.7c12.7 13 20.6 30.8 20.6 50.4c0 39.8-32.2 72-72 72s-72-32.2-72-72c0-19.6 7.8-37.4 20.6-50.4zM128 148.7L116.7 160l5.7 5.7L216 259.3l0 92.7 0 8 16 0 0-8 0-92.7 93.7-93.7 5.7-5.7L320 148.7l-5.7 5.7L224 244.7l-90.3-90.3-5.7-5.7zM198.5 132l4 6.9 13.8-8-4-6.9c-15.2-26.3-43.6-44-76.2-44c-48.6 0-88 39.4-88 88s39.4 88 88 88l8 0 0-16-8 0c-39.8 0-72-32.2-72-72s32.2-72 72-72c26.6 0 49.9 14.5 62.4 36z" />
    </Icon>
);

export default FluxCapacitor;