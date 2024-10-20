
import { Icon } from "../../index";

/**
 * A component that renders the `magnifying-glass-location` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/magnifying-glass-location?s=thin magnifying-glass-location}
 * @preview ![magnifying-glass-location](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/magnifying-glass-location.svg)
 */
const MagnifyingGlassLocation: typeof Icon = x => (
    <Icon {...x}>
        <path d="M208 16a192 192 0 1 1 0 384 192 192 0 1 1 0-384zm0 400c54.6 0 104.2-21 141.3-55.4l149 149c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3l-149-149C395 312.2 416 262.6 416 208C416 93.1 322.9 0 208 0S0 93.1 0 208S93.1 416 208 416zm40.1-170.5c-13.4 23.4-29.3 44.4-40.1 57.7c-10.8-13.3-26.7-34.4-40.1-57.7C153.9 220.9 144 196.1 144 176c0-35.3 28.7-64 64-64s64 28.7 64 64c0 20.1-9.9 44.9-23.9 69.5zm-28.7 69.1c22.1-27 68.6-89.8 68.6-138.6c0-44.2-35.8-80-80-80s-80 35.8-80 80c0 48.8 46.5 111.6 68.6 138.6c6 7.3 16.8 7.3 22.7 0zM224 176a16 16 0 1 0 -32 0 16 16 0 1 0 32 0z" />
    </Icon>
);

export default MagnifyingGlassLocation;