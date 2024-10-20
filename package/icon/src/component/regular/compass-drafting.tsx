
import { Icon } from "../../index";

/**
 * A component that renders the `compass-drafting` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/compass-drafting?s=regular compass-drafting}
 * @preview ![compass-drafting](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/compass-drafting.svg)
 */
const CompassDrafting: typeof Icon = x => (
    <Icon {...x}>
        <path d="M304 96a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm-19.6 91.7c-9 2.8-18.5 4.3-28.4 4.3s-19.4-1.5-28.4-4.3L158.1 306.4C187.9 320.3 221 328 256 328c85.8 0 160.8-46.6 201-116c6.6-11.5 21.3-15.4 32.8-8.8s15.4 21.3 8.8 32.8C450.2 319.6 359.7 376 256 376c-43.8 0-85.3-10.1-122.2-28L44.7 500.1c-6.7 11.4-21.4 15.3-32.8 8.6S-3.4 487.3 3.3 475.9L92.6 323.4C60.4 300.2 33.4 270.4 13.5 236c-6.6-11.5-2.7-26.2 8.8-32.8s26.2-2.7 32.8 8.8c15.8 27.2 36.9 51 61.9 69.7l69.8-119.2C170.2 145.2 160 121.8 160 96c0-53 43-96 96-96s96 43 96 96c0 25.8-10.2 49.2-26.7 66.5l53.5 91.4c-12.6 9.8-26.4 18.1-41.1 24.7l-53.2-90.9zM508.7 475.9c6.7 11.4 2.9 26.1-8.6 32.8s-26.1 2.9-32.8-8.6L394.4 375.7c14.4-7.1 28.2-15.4 41.2-24.6l73 124.8z" />
    </Icon>
);

export default CompassDrafting;