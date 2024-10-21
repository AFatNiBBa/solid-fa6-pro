
import { Icon } from "../../index";

/**
 * A component that renders the `compass-drafting` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/compass-drafting?s=sharp-thin compass-drafting}
 * @preview ![compass-drafting](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/compass-drafting.svg)
 */
const CompassDrafting: typeof Icon = x => (
    <Icon {...x}>
        <path d="M320 80A64 64 0 1 0 192 80a64 64 0 1 0 128 0zm-22.7 68.5C285.3 155.8 271.1 160 256 160s-29.3-4.2-41.3-11.5l-88.9 160c37.4 22.6 81.2 35.5 128 35.5c91.8 0 171.9-49.9 214.8-124l13.8 8c-45.6 78.9-131 132-228.7 132c-49.6 0-96.1-13.7-135.8-37.5L15 507.9 1 500.1 104.5 313.8C72.1 291.5 44.8 262.2 25.1 228l13.8-8c18.3 31.7 43.5 58.9 73.4 79.8L201 140.1l.7-1.3C185.9 124.2 176 103.2 176 80c0-44.2 35.8-80 80-80s80 35.8 80 80c0 23.2-9.9 44.2-25.7 58.8l.7 1.3 71.8 129.2c-4.3 3.2-8.7 6.2-13.2 9.1L297.3 148.5zM497 507.9L408.4 348.4c4.6-2.8 9-5.7 13.4-8.8L511 500.1l-14 7.8z" />
    </Icon>
);

export default CompassDrafting;