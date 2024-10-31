
import { Icon } from "../../index";

/**
 * A component that renders the `gift` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gift?s=light gift}
 * @preview ![gift](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/gift.svg)
 */
const Gift: typeof Icon = x => (
    <Icon {...x}>
        <path d="M365.1 32c-17.6 0-33.9 9-43.2 23.9l-45 72.1 11.1 0 80 0c26.5 0 48-21.5 48-48s-21.5-48-48-48l-2.9 0zm-130 96l-45-72.1C180.8 41 164.5 32 146.9 32L144 32c-26.5 0-48 21.5-48 48s21.5 48 48 48l80 0 11.1 0zM256 101l38.8-62c15.2-24.2 41.7-39 70.3-39L368 0c44.2 0 80 35.8 80 80c0 18-6 34.6-16 48l32 0c26.5 0 48 21.5 48 48l0 64c0 20.9-13.4 38.7-32 45.3l0 2.7 0 160c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64l0-160 0-2.7C13.4 278.7 0 260.9 0 240l0-64c0-26.5 21.5-48 48-48l32 0C70 114.6 64 98 64 80C64 35.8 99.8 0 144 0l2.9 0c28.6 0 55.2 14.7 70.3 39L256 101zM144 160l-96 0c-8.8 0-16 7.2-16 16l0 64c0 8.8 7.2 16 16 16l16 0 176 0 0-96-16 0-80 0zm128 0l0 96 176 0 16 0c8.8 0 16-7.2 16-16l0-64c0-8.8-7.2-16-16-16l-96 0-80 0-16 0zM240 288L64 288l0 160c0 17.7 14.3 32 32 32l144 0 0-192zm32 192l144 0c17.7 0 32-14.3 32-32l0-160-176 0 0 192z" />
    </Icon>
);

export default Gift;