
import { Icon } from "../../index";

/**
 * A component that renders the `user-hair` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-hair?s=sharp-light user-hair}
 * @preview ![user-hair](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/user-hair.svg)
 */
const UserHair: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M320 144l0-16c0-5.5-.5-10.8-1.3-16L272 112l-3.8 0-3.4-1.7-20.1-10-16 21.3L224 128l-8 0-88 0 0 16c0 53 43 96 96 96s96-43 96-96zM224 32c-41.8 0-77.4 26.7-90.5 64L208 96l19.2-25.6 8-10.7 11.9 6L275.8 80l31.4 0C290.6 51.3 259.5 32 224 32zm0-32c70.7 0 128 57.3 128 128l0 16c0 70.7-57.3 128-128 128s-128-57.3-128-128l0-16C96 57.3 153.3 0 224 0zM44.4 480l359.2 0L360.9 352 87.1 352 44.4 480zM64 320l320 0 53.3 160L448 512l-33.7 0L33.7 512 0 512l10.7-32L64 320z" />
    </Icon>
);

export default UserHair;