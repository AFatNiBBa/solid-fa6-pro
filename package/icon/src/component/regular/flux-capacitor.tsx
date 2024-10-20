
import { Icon } from "../../index";

/**
 * A component that renders the `flux-capacitor` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/flux-capacitor?s=regular flux-capacitor}
 * @preview ![flux-capacitor](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/flux-capacitor.svg)
 */
const FluxCapacitor: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M384 80c8.8 0 16 7.2 16 16l0 320c0 8.8-7.2 16-16 16L64 432c-8.8 0-16-7.2-16-16L48 96c0-8.8 7.2-16 16-16l320 0zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM283.3 253.3c6.6 1.8 13.6 2.7 20.7 2.7c44.2 0 80-35.8 80-80s-35.8-80-80-80s-80 35.8-80 80c0-44.2-35.8-80-80-80s-80 35.8-80 80s35.8 80 80 80c7.2 0 14.1-.9 20.7-2.7l-49-49c-15.6-15.6-15.6-40.9 0-56.6s40.9-15.6 56.6 0L224 199.4l51.7-51.7c15.6-15.6 40.9-15.6 56.6 0s15.6 40.9 0 56.6l-49 49zM180.4 268.9c-21.9 14.3-36.4 39-36.4 67.1c0 44.2 35.8 80 80 80s80-35.8 80-80c0-28.1-14.5-52.8-36.4-67.1l-3.6 3.6 0 63.4c0 22.1-17.9 40-40 40s-40-17.9-40-40l0-63.4-3.6-3.6zM155.3 164.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L208 262.6l0 73.4c0 8.8 7.2 16 16 16s16-7.2 16-16l0-73.4 75.3-75.3c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L224 233.4l-68.7-68.7z" />
    </Icon>
);

export default FluxCapacitor;