
import { Icon } from "../../index";

/**
 * A component that renders the `meteor` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/meteor?s=sharp-light meteor}
 * @preview ![meteor](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/meteor.svg)
 */
const Meteor: typeof Icon = x => (
    <Icon {...x}>
        <path d="M304 16L270.4 35.4 101.3 133.4C38.6 169.7 0 236.6 0 309C0 421.1 90.9 512 203 512c72.4 0 139.4-38.6 175.7-101.3l97.9-169.1L496 208l-25 1.9L457.3 211l-21.2 1.6 11.8-33L498.1 38.9 512 0 473.1 13.9 332.4 64.1l-33 11.8L301 54.7 302.1 41 304 16zM117.3 161.1L267.4 74.1l-3.7 48.5 46.5-16.6 149-53.2-53.2 149-16.6 46.5 48.5-3.7L350.9 394.7C320.4 447.5 264 480 203 480c-94.4 0-171-76.5-171-171c0-61 32.5-117.4 85.3-148zM296 312a96 96 0 1 1 -192 0 96 96 0 1 1 192 0zM200 184a128 128 0 1 0 0 256 128 128 0 1 0 0-256zm8 96a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm16 88a16 16 0 1 0 0-32 16 16 0 1 0 0 32z" />
    </Icon>
);

export default Meteor;