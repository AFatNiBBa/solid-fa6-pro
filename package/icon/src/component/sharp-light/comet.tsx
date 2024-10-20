
import { Icon } from "../../index";

/**
 * A component that renders the `comet` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/comet?s=sharp-light comet}
 * @preview ![comet](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/comet.svg)
 */
const Comet: typeof Icon = x => (
    <Icon {...x}>
        <path d="M304 16L270.4 35.4 101.3 133.4C38.6 169.7 0 236.6 0 309C0 421.1 90.9 512 203 512c72.4 0 139.4-38.6 175.7-101.3l97.9-169.1L496 208l-25 1.9L457.3 211l-21.2 1.6 11.8-33L498.1 38.9 512 0 473.1 13.9 332.4 64.1l-33 11.8L301 54.7 302.1 41 304 16zM117.3 161.1L267.4 74.1l-3.7 48.5 46.5-16.6 149-53.2-53.2 149-16.6 46.5 48.5-3.7L350.9 394.7C320.4 447.5 264 480 203 480c-94.4 0-171-76.5-171-171c0-61 32.5-117.4 85.3-148zm108.6 55.5L208 180.8l-17.9 35.7-21.7 43.3-48.3 6.9L80 272.5l29.3 28.1L144 334l-8.2 47.2-6.9 39.6 35.7-18.5L208 379.8l43.4 22.5 35.7 18.5-6.9-39.6L272 334l34.7-33.4L336 272.5l-40.2-5.8-48.3-6.9-21.7-43.3zM243 291.5l23.5 3.4-16.7 16-12.3 11.8 2.9 16.8 4 23.2-21.8-11.3L208 343.8l-14.7 7.6-21.8 11.3 4-23.2 2.9-16.8-12.3-11.8-16.7-16 23.5-3.4 16.6-2.4 7.5-15L208 252.3l10.9 21.9 7.5 15 16.6 2.4z" />
    </Icon>
);

export default Comet;