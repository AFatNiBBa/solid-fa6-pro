
import { Icon } from "../../index";

/**
 * A component that renders the `shredder` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shredder?s=sharp-solid shredder}
 * @preview ![shredder](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/shredder.svg)
 */
const Shredder: typeof Icon = x => (
    <Icon {...x}>
        <path d="M64 0L96 0 368 0l13.3 0 9.4 9.4 48 48 9.4 9.4L448 80l0 112 64 0 0 192L0 384 0 192l64 0L64 32 64 0zM384 93.3L354.7 64 128 64l0 128 256 0 0-98.7zM456 248l-48 0 0 48 48 0 0-48zM40 416l48 0 0 72 0 24-48 0 0-24 0-72zm96 0l48 0 0 72 0 24-48 0 0-24 0-72zm96 0l48 0 0 72 0 24-48 0 0-24 0-72zm96 0l48 0 0 72 0 24-48 0 0-24 0-72zm96 0l48 0 0 72 0 24-48 0 0-24 0-72z" />
    </Icon>
);

export default Shredder;