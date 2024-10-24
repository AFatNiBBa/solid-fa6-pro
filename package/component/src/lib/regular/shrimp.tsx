
import { Icon } from "../../index";

/**
 * A component that renders the `shrimp` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shrimp?s=regular shrimp}
 * @preview ![shrimp](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/shrimp.svg)
 */
const Shrimp: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 104C0 64.2 32.2 32 72 32l352 0c13.3 0 24 10.7 24 24s-10.7 24-24 24L72 80c-13.3 0-24 10.7-24 24s10.7 24 24 24l264 0c97.2 0 176 78.8 176 176s-78.8 176-176 176l-88 0c-13.3 0-24-10.7-24-24c0-12 8.8-21.9 20.2-23.7l-4.9-1.9c-12.4-4.8-18.5-18.7-13.7-31.1s18.7-18.5 31.1-13.7l68.7 26.7c20.5 8 42.6-7.1 42.6-29.1c0-17.3-14-31.2-31.2-31.2l-77.3 0C158 352 74.5 274.6 64.9 175.7C28.5 172.1 0 141.4 0 104zM464 304c0-9.3-1-18.4-2.9-27.2L401 336.9c9.4 13 15 29 15 46.3c0 8.2-1.2 16-3.4 23.4C443.8 383.3 464 346 464 304zm-23.7-74.2c-21.8-30.5-56.6-51.1-96.3-53.5l0 128.1c6.2 .6 12.2 1.8 18 3.8l78.3-78.3zM296 176l-182.7 0c9.5 72.2 71.4 128 146.2 128l36.5 0 0-128zm-72 24a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </Icon>
);

export default Shrimp;