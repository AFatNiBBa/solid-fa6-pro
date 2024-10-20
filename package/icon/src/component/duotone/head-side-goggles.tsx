
import { Icon, generic } from "../../index";

/**
 * A component that renders the `head-side-goggles` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/head-side-goggles?s=duotone head-side-goggles}
 * @preview ![head-side-goggles](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/head-side-goggles.svg)
 */
const HeadSideGoggles: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M32 192l208 0c14.6 19.4 37.8 32 64 32l112 0 32 0 32 0 2.6 0 19.8 24.8c6.2 7.8 9.6 17.4 9.6 27.4c0 24.2-19.6 43.8-43.8 43.8L448 320l0 64c0 35.3-28.7 64-64 64l-64 0 0 32c0 17.7-14.3 32-32 32l-160 0c-17.7 0-32-14.3-32-32l0-104.2c0-17-7.1-33-17.5-46.4C50.3 293.2 32 246.5 32 201.7c0-3.3 .1-6.5 0-9.7zm13.9-64C75.3 53.1 148.3 0 233.7 0L256 0c56.9 0 108 24.7 143.1 64L304 64c-38.7 0-71 27.5-78.4 64L45.9 128z" />
        <path d="M304 64l112 0 0 160-112 0c-26.2 0-49.4-12.6-64-32L32 192c-17.7 0-32-14.3-32-32s14.3-32 32-32l193.6 0C233 91.5 265.3 64 304 64zM480 224l-32 0 0-160 32 0c17.7 0 32 14.3 32 32l0 96c0 17.7-14.3 32-32 32z" />
    </Icon>
);

export default HeadSideGoggles;