
import { Icon } from "../../index";

/**
 * A component that renders the `tags` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tags?s=thin tags}
 * @preview ![tags](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/tags.svg)
 */
const Tags: typeof Icon = x => (
    <Icon {...x}>
        <path d="M322.3 34.3c-3.1 3.1-3.2 8.2-.1 11.3L466 190.8c40.1 40.5 40.1 105.8 0 146.3L338.1 466.4c-3.1 3.1-3.1 8.2 .1 11.3s8.2 3.1 11.3-.1L477.3 348.4c46.3-46.8 46.3-122.1 0-168.8L333.6 34.4c-3.1-3.1-8.2-3.2-11.3-.1zM16 80c0-17.7 14.3-32 32-32l149.5 0c12.7 0 24.9 5.1 33.9 14.1l168 168c18.7 18.7 18.7 49.1 0 67.9L265.9 431.4c-18.7 18.7-49.1 18.7-67.9 0l-168-168c-9-9-14.1-21.2-14.1-33.9L16 80zM0 80L0 229.5c0 17 6.7 33.3 18.7 45.3l168 168c25 25 65.5 25 90.5 0L410.7 309.3c25-25 25-65.5 0-90.5l-168-168c-12-12-28.3-18.7-45.3-18.7L48 32C21.5 32 0 53.5 0 80zm112 40a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm0 64a40 40 0 1 0 0-80 40 40 0 1 0 0 80z" />
    </Icon>
);

export default Tags;