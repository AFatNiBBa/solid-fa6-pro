
import { Icon } from "../../index";

/**
 * A component that renders the `trailer` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/trailer?s=light trailer}
 * @preview ![trailer](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/trailer.svg)
 */
const Trailer: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M56 64l400 0c13.3 0 24 10.7 24 24l0 264-197.5 0c-13.2-37.3-48.7-64-90.5-64s-77.4 26.7-90.5 64L56 352c-13.3 0-24-10.7-24-24L32 88c0-13.3 10.7-24 24-24zM288 384l328 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-104 0 0-264c0-30.9-25.1-56-56-56L56 32C25.1 32 0 57.1 0 88L0 328c0 30.9 25.1 56 56 56l40 0c0 53 43 96 96 96s96-43 96-96zm-32 0a64 64 0 1 1 -128 0 64 64 0 1 1 128 0zM112 96c-8.8 0-16 7.2-16 16l0 128c0 8.8 7.2 16 16 16s16-7.2 16-16l0-128c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 128c0 8.8 7.2 16 16 16s16-7.2 16-16l0-128c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 160c0 8.8 7.2 16 16 16s16-7.2 16-16l0-160c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 160c0 8.8 7.2 16 16 16s16-7.2 16-16l0-160c0-8.8-7.2-16-16-16z" />
    </Icon>
);

export default Trailer;