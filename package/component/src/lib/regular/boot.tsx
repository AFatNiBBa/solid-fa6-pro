
import { Icon } from "../../index";

/**
 * A component that renders the `boot` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/boot?s=regular boot}
 * @preview ![boot](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/boot.svg)
 */
const Boot: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 0L352 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32L0 128 0 32C0 14.3 14.3 0 32 0zM0 464l0-6.6L0 448l0-32L0 160l48 0 0 256 416 0 0-56.6c0-21.2-13.9-39.9-34.2-46L345 288l-105 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l66.7 0c-1.8-5-2.7-10.4-2.7-16l0-16-64 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l64 0 0-32 48 0 0 80 91.6 27.5c40.6 12.2 68.4 49.6 68.4 92l0 56.6 0 32 0 9.4 0 6.6-.4 0c-1.5 12-6.9 23.3-15.6 32c-10.2 10.2-24.1 16-38.6 16l-14.9 0c-17 0-33.3-6.7-45.3-18.7l-7.6-7.6c-3.1-3.1-8.2-3.1-11.3 0l-7.6 7.6c-12 12-28.3 18.7-45.3 18.7l-11 0c-17 0-33.3-6.7-45.3-18.7l-7.6-7.6c-3.1-3.1-8.2-3.1-11.3 0l-7.6 7.6c-12 12-28.3 18.7-45.3 18.7l-11 0c-17 0-33.3-6.7-45.3-18.7l-7.6-7.6c-3.1-3.1-8.2-3.1-11.3 0l-7.6 7.6c-12 12-28.3 18.7-45.3 18.7l-14.9 0c-14.5 0-28.4-5.8-38.6-16C7.3 487.3 1.9 476 .4 464L0 464z" />
    </Icon>
);

export default Boot;