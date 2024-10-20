
import { Icon } from "../../index";

/**
 * A component that renders the `flux-capacitor` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/flux-capacitor?s=solid flux-capacitor}
 * @preview ![flux-capacitor](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/flux-capacitor.svg)
 */
const FluxCapacitor: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zM148.7 237.3l-49-49c-15.6-15.6-15.6-40.9 0-56.6s40.9-15.6 56.6 0l49 49c1.8-6.6 2.7-13.6 2.7-20.7c0-44.2-35.8-80-80-80s-80 35.8-80 80s35.8 80 80 80c7.2 0 14.1-.9 20.7-2.7zM184 282.7c-23.9 13.8-40 39.7-40 69.3c0 44.2 35.8 80 80 80s80-35.8 80-80c0-29.6-16.1-55.5-40-69.3l0 69.3c0 22.1-17.9 40-40 40s-40-17.9-40-40l0-69.3zm115.3-45.4c6.6 1.8 13.6 2.7 20.7 2.7c44.2 0 80-35.8 80-80s-35.8-80-80-80s-80 35.8-80 80c0 7.2 .9 14.1 2.7 20.7l49-49c15.6-15.6 40.9-15.6 56.6 0s15.6 40.9 0 56.6l-49 49zm-160-88.6c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L208 262.6l0 89.4c0 8.8 7.2 16 16 16s16-7.2 16-16l0-89.4 91.3-91.3c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L224 233.4l-84.7-84.7z" />
    </Icon>
);

export default FluxCapacitor;