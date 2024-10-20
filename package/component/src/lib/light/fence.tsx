
import { Icon } from "../../index";

/**
 * A component that renders the `fence` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/fence?s=light fence}
 * @preview ![fence](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/fence.svg)
 */
const Fence: typeof Icon = x => (
    <Icon {...x}>
        <path d="M64 32c5 0 9.8 2.4 12.8 6.4l44.8 59.7c4.2 5.5 6.4 12.3 6.4 19.2l0 42.7 64 0 0-42.7c0-6.9 2.2-13.7 6.4-19.2l44.8-59.7c3-4 7.8-6.4 12.8-6.4s9.8 2.4 12.8 6.4l44.8 59.7c4.2 5.5 6.4 12.3 6.4 19.2l0 42.7 64 0 0-42.7c0-6.9 2.2-13.7 6.4-19.2l44.8-59.7c3-4 7.8-6.4 12.8-6.4s9.8 2.4 12.8 6.4l44.8 59.7c4.2 5.5 6.4 12.3 6.4 19.2L512 448c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-64-64 0 0 64c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-64-64 0 0 64c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32L0 117.3c0-6.9 2.2-13.7 6.4-19.2L51.2 38.4c3-4 7.8-6.4 12.8-6.4zM288 384l0-32 0-160 0-32 0-42.7L256 74.7l-32 42.7L224 448l64 0 0-64zm32-32l64 0 0-160-64 0 0 160zm96 0l0 32 0 64 64 0 0-330.7L448 74.7l-32 42.7L416 352zM192 192l-64 0 0 160 64 0 0-160zm-96 0l0-32 0-42.7L64 74.7 32 117.3 32 448l64 0 0-64 0-32 0-160z" />
    </Icon>
);

export default Fence;