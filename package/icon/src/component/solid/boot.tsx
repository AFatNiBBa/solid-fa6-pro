
import { Icon } from "../../index";

/**
 * A component that renders the `boot` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/boot?s=solid boot}
 * @preview ![boot](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/boot.svg)
 */
const Boot: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 32C0 14.3 14.3 0 32 0L320 0c17.7 0 32 14.3 32 32l0 32c0 17.7-14.3 32-32 32L0 96 0 32zM0 457.4L0 448l512 0 0 9.4c0 14.5-5.8 28.4-16 38.6s-24.1 16-38.6 16l-14.9 0c-17 0-33.3-6.7-45.3-18.7l-7.6-7.6c-3.1-3.1-8.2-3.1-11.3 0l-7.6 7.6c-12 12-28.3 18.7-45.3 18.7l-11 0c-17 0-33.3-6.7-45.3-18.7l-7.6-7.6c-3.1-3.1-8.2-3.1-11.3 0l-7.6 7.6c-12 12-28.3 18.7-45.3 18.7l-11 0c-17 0-33.3-6.7-45.3-18.7l-7.6-7.6c-3.1-3.1-8.2-3.1-11.3 0l-7.6 7.6c-12 12-28.3 18.7-45.3 18.7l-14.9 0c-14.5 0-28.4-5.8-38.6-16S0 471.9 0 457.4zM0 416L0 128l320 0 0 32-48 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l48 0 0 32-48 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l48 0 119.3 29.8C482 296.5 512 334.9 512 379l0 37L0 416z" />
    </Icon>
);

export default Boot;