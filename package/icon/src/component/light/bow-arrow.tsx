
import { Icon } from "../../index";

/**
 * A component that renders the `bow-arrow` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bow-arrow?s=light bow-arrow}
 * @preview ![bow-arrow](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/bow-arrow.svg)
 */
const BowArrow: typeof Icon = x => (
    <Icon {...x}>
        <path d="M511.7 18.9c1-5.2-.7-10.5-4.4-14.3S498.2-.7 493.1 .3l-128 24c-5.8 1.1-10.6 5.3-12.3 11s-.2 11.8 4 16L397.4 92 153.7 335.7l-59.9-15c-8.2-2-16.8 .4-22.8 6.3L7 391c-6.1 6.1-8.5 15-6.2 23.4s8.9 14.8 17.3 16.9l50 12.5 12.5 50c2.1 8.4 8.5 15 16.9 17.3s17.3 0 23.4-6.2l64-64c6-6 8.4-14.6 6.3-22.8l-15-59.9L420 114.6l40.7 40.7c4.2 4.2 10.4 5.7 16 4s9.9-6.5 11-12.3l24-128zm-49.9 92.3L400.8 50.1 476 36l-14.1 75.2zm-81.2 88C403 234.1 416 275.5 416 320c0 47.9-15 92.3-40.7 128.7L253.3 326.6l-22.6 22.6L388.7 507.3c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-13-13C429.5 429.2 448 376.8 448 320c0-53.3-16.3-102.9-44.2-143.9l-23.1 23.1zM4.7 123.3L162.7 281.4l22.6-22.6L63.3 136.7C99.7 111 144.1 96 192 96c44.5 0 85.9 13 120.8 35.3l23.1-23.1C294.9 80.3 245.3 64 192 64C135.2 64 82.8 82.5 40.4 113.7l-13-13c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6zM99.3 436c-2.9-11.5-11.8-20.4-23.3-23.3l-36.3-9.1 50.8-50.8 54.9 13.7 13.7 54.9-50.8 50.8L99.3 436z" />
    </Icon>
);

export default BowArrow;