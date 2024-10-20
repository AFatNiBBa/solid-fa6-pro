
import { Icon } from "../../index";

/**
 * A component that renders the `gift` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gift?s=sharp-regular gift}
 * @preview ![gift](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/gift.svg)
 */
const Gift: typeof Icon = x => (
    <Icon {...x}>
        <path d="M231.9 44.4C215.7 16.9 186.1 0 154.2 0L152 0C103.4 0 64 39.4 64 88c0 14.4 3.5 28 9.6 40L48 128 0 128l0 48 0 64 0 48 32 0 0 176 0 48 48 0 352 0 48 0 0-48 0-176 32 0 0-48 0-64 0-48-48 0-25.6 0c6.1-12 9.6-25.6 9.6-40c0-48.6-39.4-88-88-88l-2.2 0c-31.9 0-61.5 16.9-77.7 44.4L256 85.5l-24.1-41zM464 176l0 64-32 0-144 0 0-64 72 0 104 0zm-240 0l0 64L80 240l-32 0 0-64 104 0 72 0zm0 112l0 176L80 464l0-176 144 0zm64 176l0-176 144 0 0 176-144 0zm72-336l-72 0-1.3 0 34.8-59.2C329.1 55.9 342.9 48 357.8 48l2.2 0c22.1 0 40 17.9 40 40s-17.9 40-40 40zm-136 0l-72 0c-22.1 0-40-17.9-40-40s17.9-40 40-40l2.2 0c14.9 0 28.8 7.9 36.3 20.8L225.3 128l-1.3 0z" />
    </Icon>
);

export default Gift;