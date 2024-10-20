
import { Icon, generic } from "../../index";

/**
 * A component that renders the `place-of-worship` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/place-of-worship?s=duotone place-of-worship}
 * @preview ![place-of-worship](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/place-of-worship.svg)
 */
const PlaceOfWorship: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 375c0-18.9 11.1-36 28.3-43.8L160 272l0 240c-37.3 0-74.7 0-112 0c-26.5 0-48-21.5-48-48l0-89zM480 272l131.7 59.3C628.9 339 640 356.2 640 375l0 89c0 26.5-21.5 48-48 48c-37.3 0-74.7 0-112 0l0-240z" />
        <path d="M224 201.6l0-92.3c0-8.5 3.4-16.6 9.4-22.6l75.3-75.3c6.2-6.2 16.4-6.2 22.6 0l75.3 75.3c6 6 9.4 14.1 9.4 22.6l0 92.3L456.7 226c14.5 8.7 23.3 24.3 23.3 41.2L480 512l-96 0 0-96c0-35.3-28.7-64-64-64s-64 28.7-64 64l0 96-96 0 0-244.8c0-16.9 8.8-32.5 23.3-41.2L224 201.6z" />
    </Icon>
);

export default PlaceOfWorship;