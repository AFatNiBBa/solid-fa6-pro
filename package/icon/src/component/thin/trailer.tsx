
import { Icon } from "../../index";

/**
 * A component that renders the `trailer` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/trailer?s=thin trailer}
 * @preview ![trailer](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/trailer.svg)
 */
const Trailer: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M48 48C30.3 48 16 62.3 16 80l0 256c0 17.7 14.3 32 32 32l16 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-16 0c-26.5 0-48-21.5-48-48L0 80C0 53.5 21.5 32 48 32l432 0c26.5 0 48 21.5 48 48l0 288 104 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-312 0c-4.4 0-8-3.6-8-8s3.6-8 8-8l192 0 0-288c0-17.7-14.3-32-32-32L48 48zM72 96c4.4 0 8 3.6 8 8l0 144c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-144c0-4.4 3.6-8 8-8zm96 0c4.4 0 8 3.6 8 8l0 144c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-144c0-4.4 3.6-8 8-8zm96 0c4.4 0 8 3.6 8 8l0 144c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-144c0-4.4 3.6-8 8-8zm96 0c4.4 0 8 3.6 8 8l0 208c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-208c0-4.4 3.6-8 8-8zm96 0c4.4 0 8 3.6 8 8l0 208c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-208c0-4.4 3.6-8 8-8zM272 384a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 384a96 96 0 1 1 192 0A96 96 0 1 1 96 384z" />
    </Icon>
);

export default Trailer;