
import { Icon, generic } from "../../index";

/**
 * A component that renders the `link` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/link?s=sharp-duotone-solid link}
 * @preview ![link](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/link.svg)
 */
const Link: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M238.6 210.1c-29.5 54.6-21.3 124.2 24.9 170.3c28.1 28.1 65 42.2 101.8 42.2s73.7-14.1 101.8-42.2L580.2 267.3c56.2-56.2 56.2-147.4 0-203.6c-28.1-28.1-65-42.2-101.8-42.2s-73.7 14.1-101.8 42.2L365.3 75l45.3 45.3 11.3-11.3c31.2-31.2 81.9-31.2 113.1 0s31.2 81.9 0 113.1L421.8 335.2c-31.2 31.2-81.9 31.2-113.1 0c-25.6-25.6-30.3-64.3-13.8-94.6c1.8-3.4 3.9-6.7 6.3-9.8l-51.2-38.4c-4.3 5.7-8.1 11.6-11.4 17.8z" />
        <path d="M59.8 448.3c-56.2-56.2-56.2-147.4 0-203.6L172.9 131.5c56.2-56.2 147.4-56.2 203.6 0c46.2 46.2 54.4 115.8 24.9 170.3c-3.3 6.1-7.1 12.1-11.4 17.8l-51.2-38.4c2.4-3.2 4.5-6.4 6.3-9.8c16.4-30.3 11.8-69-13.8-94.6c-31.2-31.2-81.9-31.2-113.1 0L105 289.9c-31.2 31.2-31.2 81.9 0 113.1s81.9 31.2 113.1 0l11.3-11.3L274.7 437l-11.3 11.3c-56.2 56.2-147.4 56.2-203.6 0z" />
    </Icon>
);

export default Link;