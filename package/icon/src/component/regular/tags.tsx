
import { Icon } from "../../index";

/**
 * A component that renders the `tags` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tags?s=regular tags}
 * @preview ![tags](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/tags.svg)
 */
const Tags: typeof Icon = x => (
    <Icon {...x}>
        <path d="M345 39.1c-9.3-9.4-24.5-9.5-33.9-.2s-9.5 24.5-.2 33.9L438.6 202.1c33.9 34.3 33.9 89.4 0 123.7L326.7 439.1c-9.3 9.4-9.2 24.6 .2 33.9s24.6 9.2 33.9-.2L472.8 359.6c52.4-53 52.4-138.2 0-191.2L345 39.1zM242.7 50.7c-12-12-28.3-18.7-45.3-18.7L48 32C21.5 32 0 53.5 0 80L0 229.5c0 17 6.7 33.3 18.7 45.3l168 168c25 25 65.5 25 90.5 0L410.7 309.3c25-25 25-65.5 0-90.5l-168-168zM48 80l149.5 0c4.2 0 8.3 1.7 11.3 4.7l168 168c6.2 6.2 6.2 16.4 0 22.6L243.3 408.8c-6.2 6.2-16.4 6.2-22.6 0l-168-168c-3-3-4.7-7.1-4.7-11.3L48 80zm96 64a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
    </Icon>
);

export default Tags;