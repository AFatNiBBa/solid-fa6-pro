
import { Icon } from "../../index";

/**
 * A component that renders the `gift` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gift?s=sharp-light gift}
 * @preview ![gift](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/gift.svg)
 */
const Gift: typeof Icon = x => (
    <Icon {...x}>
        <path d="M365.1 32c-17.6 0-33.9 9-43.2 23.9l-45 72.1 11.1 0 80 0c26.5 0 48-21.5 48-48s-21.5-48-48-48l-2.9 0zm-130 96l-45-72.1C180.8 41 164.5 32 146.9 32L144 32c-26.5 0-48 21.5-48 48s21.5 48 48 48l80 0 11.1 0zM256 101l38.8-62c15.2-24.2 41.7-39 70.3-39L368 0c44.2 0 80 35.8 80 80c0 18-6 34.6-16 48l48 0 32 0 0 32 0 96 0 32-32 0 0 192 0 32-32 0L64 512l-32 0 0-32 0-192L0 288l0-32 0-96 0-32 32 0 48 0C70 114.6 64 98 64 80C64 35.8 99.8 0 144 0l2.9 0c28.6 0 55.2 14.7 70.3 39L256 101zM144 160L32 160l0 96 32 0 176 0 0-96-16 0-80 0zm128 0l0 96 176 0 32 0 0-96-112 0-80 0-16 0zM240 288L64 288l0 192 176 0 0-192zm32 192l176 0 0-192-176 0 0 192z" />
    </Icon>
);

export default Gift;