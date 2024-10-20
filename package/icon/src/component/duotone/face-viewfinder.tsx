
import { Icon, generic } from "../../index";

/**
 * A component that renders the `face-viewfinder` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-viewfinder?s=duotone face-viewfinder}
 * @preview ![face-viewfinder](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/face-viewfinder.svg)
 */
const FaceViewfinder: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 56C0 25.1 25.1 0 56 0l80 0c13.3 0 24 10.7 24 24s-10.7 24-24 24L56 48c-4.4 0-8 3.6-8 8l0 80c0 13.3-10.7 24-24 24s-24-10.7-24-24L0 56zM0 376c0-13.3 10.7-24 24-24s24 10.7 24 24l0 80c0 4.4 3.6 8 8 8l80 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-30.9 0-56-25.1-56-56l0-80zM352 24c0-13.3 10.7-24 24-24l80 0c30.9 0 56 25.1 56 56l0 80c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-80c0-4.4-3.6-8-8-8l-80 0c-13.3 0-24-10.7-24-24zm0 464c0-13.3 10.7-24 24-24l80 0c4.4 0 8-3.6 8-8l0-80c0-13.3 10.7-24 24-24s24 10.7 24 24l0 80c0 30.9-25.1 56-56 56l-80 0c-13.3 0-24-10.7-24-24z" />
        <path d="M256 416a160 160 0 1 0 0-320 160 160 0 1 0 0 320zM200 192a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm88 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm-95.5 76.9C208.5 309.6 231 320 256 320s47.5-10.4 63.5-27.1c6.1-6.4 16.2-6.6 22.6-.5s6.6 16.2 .5 22.6C320.8 337.8 290 352 256 352s-64.8-14.2-86.6-36.9c-6.1-6.4-5.9-16.5 .5-22.6s16.5-5.9 22.6 .5z" />
    </Icon>
);

export default FaceViewfinder;