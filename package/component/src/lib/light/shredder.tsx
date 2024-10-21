
import { Icon } from "../../index";

/**
 * A component that renders the `shredder` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shredder?s=light shredder}
 * @preview ![shredder](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/shredder.svg)
 */
const Shredder: typeof Icon = x => (
    <Icon {...x}>
        <path d="M96 64l0 128 320 0 0-101.5c0-8.5-3.4-16.6-9.4-22.6L380.1 41.4c-6-6-14.1-9.4-22.6-9.4L128 32c-17.7 0-32 14.3-32 32zM64 192L64 64C64 28.7 92.7 0 128 0L357.5 0c17 0 33.3 6.7 45.3 18.7l26.5 26.5c12 12 18.7 28.3 18.7 45.3L448 192c35.3 0 64 28.7 64 64l0 96c0 17.7-14.3 32-32 32L32 384c-17.7 0-32-14.3-32-32l0-96c0-35.3 28.7-64 64-64zm0 32c-17.7 0-32 14.3-32 32l0 96 448 0 0-96c0-17.7-14.3-32-32-32L64 224zm344 48a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM96 496l0-80 32 0 0 80c0 8.8-7.2 16-16 16s-16-7.2-16-16zm96 0l0-80 32 0 0 80c0 8.8-7.2 16-16 16s-16-7.2-16-16zm96 0l0-80 32 0 0 80c0 8.8-7.2 16-16 16s-16-7.2-16-16zm96 0l0-80 32 0 0 80c0 8.8-7.2 16-16 16s-16-7.2-16-16z" />
    </Icon>
);

export default Shredder;