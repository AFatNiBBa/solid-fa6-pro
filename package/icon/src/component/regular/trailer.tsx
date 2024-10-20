
import { Icon } from "../../index";

/**
 * A component that renders the `trailer` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/trailer?s=regular trailer}
 * @preview ![trailer](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/trailer.svg)
 */
const Trailer: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M64 80l432 0c8.8 0 16 7.2 16 16l0 240-236.8 0c-16.6-28.7-47.6-48-83.2-48s-66.6 19.3-83.2 48L64 336c-8.8 0-16-7.2-16-16L48 96c0-8.8 7.2-16 16-16zM288 384l328 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-56 0 0-240c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96L0 320c0 35.3 28.7 64 64 64l32 0c0 53 43 96 96 96s96-43 96-96zM136 112c-13.3 0-24 10.7-24 24l0 96c0 13.3 10.7 24 24 24s24-10.7 24-24l0-96c0-13.3-10.7-24-24-24zm96 0c-13.3 0-24 10.7-24 24l0 96c0 13.3 10.7 24 24 24s24-10.7 24-24l0-96c0-13.3-10.7-24-24-24zm96 0c-13.3 0-24 10.7-24 24l0 144c0 13.3 10.7 24 24 24s24-10.7 24-24l0-144c0-13.3-10.7-24-24-24zm96 0c-13.3 0-24 10.7-24 24l0 144c0 13.3 10.7 24 24 24s24-10.7 24-24l0-144c0-13.3-10.7-24-24-24zM144 384a48 48 0 1 1 96 0 48 48 0 1 1 -96 0z" />
    </Icon>
);

export default Trailer;