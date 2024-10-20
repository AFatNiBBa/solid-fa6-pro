
import { Icon, generic } from "../../index";

/**
 * A component that renders the `truck-field-un` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/truck-field-un?s=duotone truck-field-un}
 * @preview ![truck-field-un](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/truck-field-un.svg)
 */
const TruckFieldUn: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M96 400a80 80 0 1 0 160 0A80 80 0 1 0 96 400zm288 0a80 80 0 1 0 160 0 80 80 0 1 0 -160 0z" />
        <path d="M96 32C60.7 32 32 60.7 32 96l0 32c-17.7 0-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32l0 32c-17.7 0-32 14.3-32 32s14.3 32 32 32l33.1 0c7.8-54.3 54.4-96 110.9-96s103.1 41.7 110.9 96l66.3 0c7.8-54.3 54.4-96 110.9-96s103.1 41.7 110.9 96l33.1 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-32c0-35.3-28.7-64-64-64l-4.2 0c-.4-1.1-.9-2.1-1.3-3.2L485.7 102c-10.3-23.1-33.2-38-58.5-38l-51.8 0C364.4 44.9 343.7 32 320 32L96 32zm288 96l43.2 0 42.7 96L384 224l0-96zm-130.7 7.1l34.7 52 0-43.2c0-8.8 7.2-16 16-16s16 7.2 16 16l0 96c0 7.1-4.6 13.3-11.4 15.3s-14-.6-17.9-6.4l-34.7-52 0 43.2c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-96c0-7.1 4.6-13.3 11.4-15.3s14 .6 17.9 6.4zM128 144l0 64c0 8.8 7.2 16 16 16s16-7.2 16-16l0-64c0-8.8 7.2-16 16-16s16 7.2 16 16l0 64c0 26.5-21.5 48-48 48s-48-21.5-48-48l0-64c0-8.8 7.2-16 16-16s16 7.2 16 16z" />
    </Icon>
);

export default TruckFieldUn;