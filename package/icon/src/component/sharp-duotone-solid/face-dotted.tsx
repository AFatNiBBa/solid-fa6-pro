
import { Icon, generic } from "../../index";

/**
 * A component that renders the `face-dotted` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-dotted?s=sharp-duotone-solid face-dotted}
 * @preview ![face-dotted](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/face-dotted.svg)
 */
const FaceDotted: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256c0-25.1 3.6-49.4 10.4-72.4l59.8 23.9C66.1 223 64 239.3 64 256s2.1 33 6.2 48.5L10.4 328.4C3.6 305.4 0 281.1 0 256zM28.2 139C52.7 91.5 91.5 52.7 139 28.2L163 88C131.5 105.5 105.5 131.5 88 163L28.2 139zm0 233.9L88 349c17.5 31.5 43.5 57.5 74.9 74.9L139 483.8C91.5 459.3 52.7 420.5 28.2 373zM183.6 10.4C206.6 3.6 230.9 0 256 0s49.4 3.6 72.4 10.4L304.5 70.2C289 66.1 272.7 64 256 64s-33 2.1-48.5 6.2L183.6 10.4zm0 491.2l23.9-59.8c15.5 4 31.7 6.2 48.5 6.2s33-2.1 48.5-6.2l23.9 59.8c-23 6.8-47.3 10.4-72.4 10.4s-49.4-3.6-72.4-10.4zM349 88L373 28.2C420.5 52.7 459.3 91.5 483.8 139L424 163C406.5 131.5 380.5 105.5 349 88zm0 336c31.5-17.5 57.5-43.5 74.9-74.9L483.8 373c-24.4 47.5-63.3 86.4-110.8 110.8L349 424zm92.8-216.5l59.8-23.9c6.8 23 10.4 47.3 10.4 72.4s-3.6 49.4-10.4 72.4l-59.8-23.9c4-15.5 6.2-31.7 6.2-48.5s-2.1-33-6.2-48.5z" />
        <path d="M208.4 208a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm160 0a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM184 328l-24 0 0 48 24 0 144 0 24 0 0-48-24 0-144 0z" />
    </Icon>
);

export default FaceDotted;