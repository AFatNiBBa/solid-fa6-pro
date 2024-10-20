
import { Icon } from "../../index";

/**
 * A component that renders the `shredder` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shredder?s=regular shredder}
 * @preview ![shredder](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/shredder.svg)
 */
const Shredder: typeof Icon = x => (
    <Icon {...x}>
        <path d="M112 192l0-128c0-8.8 7.2-16 16-16l229.5 0c4.2 0 8.3 1.7 11.3 4.7l26.5 26.5c3 3 4.7 7.1 4.7 11.3L400 192l-288 0zM64 64l0 128c-35.3 0-64 28.7-64 64l0 96c0 17.7 14.3 32 32 32l448 0c17.7 0 32-14.3 32-32l0-96c0-35.3-28.7-64-64-64l0-101.5c0-17-6.7-33.3-18.7-45.3L402.7 18.7C390.7 6.7 374.5 0 357.5 0L128 0C92.7 0 64 28.7 64 64zM448 240c8.8 0 16 7.2 16 16l0 80L48 336l0-80c0-8.8 7.2-16 16-16l384 0zM40 488c0 13.3 10.7 24 24 24s24-10.7 24-24l0-72-48 0 0 72zm96 0c0 13.3 10.7 24 24 24s24-10.7 24-24l0-72-48 0 0 72zm96 0c0 13.3 10.7 24 24 24s24-10.7 24-24l0-72-48 0 0 72zm96 0c0 13.3 10.7 24 24 24s24-10.7 24-24l0-72-48 0 0 72zm96 0c0 13.3 10.7 24 24 24s24-10.7 24-24l0-72-48 0 0 72z" />
    </Icon>
);

export default Shredder;