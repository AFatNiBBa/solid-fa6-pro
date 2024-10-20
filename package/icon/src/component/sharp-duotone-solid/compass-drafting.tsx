
import { Icon, generic } from "../../index";

/**
 * A component that renders the `compass-drafting` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/compass-drafting?s=sharp-duotone-solid compass-drafting}
 * @preview ![compass-drafting](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/compass-drafting.svg)
 */
const CompassDrafting: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M6.6 240l55.4-32c9.8 17 21.9 32.6 35.7 46.4C86.4 273.2 75.2 291.9 64 310.7C41.3 290.4 21.9 266.5 6.6 240zM155.3 365.9L188 309.5c21.5 6.8 44.3 10.5 68 10.5s46.6-3.7 68-10.5c34.5-11 65.4-30.1 90.3-55.1c13.8-13.8 25.8-29.4 35.7-46.4l55.4 32c-15.3 26.5-34.8 50.3-57.5 70.6c-26.5 23.7-57.4 42.6-91.3 55.2C325.4 377.6 291.4 384 256 384s-69.4-6.4-100.7-18.1z" />
        <path d="M343.4 135.7c5.5-12.1 8.6-25.5 8.6-39.7c0-53-43-96-96-96s-96 43-96 96c0 14.1 3.1 27.6 8.5 39.7L0 417.8 0 512l91.4-35.8L256 192l68 117.5c34.5-11 65.3-30.1 90.3-55.1L343.4 135.7zM448 310.7c-26.5 23.7-57.4 42.6-91.3 55.2l63.9 110.3L512 512l0-94.2L448 310.7zM224 96a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
    </Icon>
);

export default CompassDrafting;