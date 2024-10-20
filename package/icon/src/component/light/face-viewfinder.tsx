
import { Icon } from "../../index";

/**
 * A component that renders the `face-viewfinder` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-viewfinder?s=light face-viewfinder}
 * @preview ![face-viewfinder](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/face-viewfinder.svg)
 */
const FaceViewfinder: typeof Icon = x => (
    <Icon {...x}>
        <path d="M48 0C21.5 0 0 21.5 0 48l0 96c0 8.8 7.2 16 16 16s16-7.2 16-16l0-96c0-8.8 7.2-16 16-16l96 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L48 0zM464 0L368 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l96 0c8.8 0 16 7.2 16 16l0 96c0 8.8 7.2 16 16 16s16-7.2 16-16l0-96c0-26.5-21.5-48-48-48zM0 464c0 26.5 21.5 48 48 48l96 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-96 0c-8.8 0-16-7.2-16-16l0-96c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 96zm464 48c26.5 0 48-21.5 48-48l0-96c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 96c0 8.8-7.2 16-16 16l-96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l96 0zM240 216a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm56 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48zM256 128a128 128 0 1 1 0 256 128 128 0 1 1 0-256zm0 288a160 160 0 1 0 0-320 160 160 0 1 0 0 320zM214.4 280c-4.4-7.6-14.2-10.3-21.9-5.8s-10.3 14.2-5.8 21.9c13.8 23.9 39.7 40 69.3 40s55.5-16.1 69.3-40c4.4-7.6 1.8-17.4-5.8-21.9s-17.4-1.8-21.9 5.8c-8.3 14.4-23.8 24-41.6 24s-33.3-9.6-41.6-24z" />
    </Icon>
);

export default FaceViewfinder;