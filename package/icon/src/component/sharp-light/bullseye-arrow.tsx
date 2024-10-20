
import { Icon } from "../../index";

/**
 * A component that renders the `bullseye-arrow` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bullseye-arrow?s=sharp-light bullseye-arrow}
 * @preview ![bullseye-arrow](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/bullseye-arrow.svg)
 */
const BullseyeArrow: typeof Icon = x => (
    <Icon {...x}>
        <path d="M323.2 8.9C301.8 3.1 279.3 0 256 0C114.6 0 0 114.6 0 256S114.6 512 256 512s256-114.6 256-256c0-23.3-3.1-45.8-8.9-67.2l-26.7 26.7c2.4 13.1 3.6 26.7 3.6 40.5c0 123.7-100.3 224-224 224S32 379.7 32 256S132.3 32 256 32c13.8 0 27.3 1.3 40.5 3.6L323.2 8.9zm-50 88c-5.6-.6-11.4-.9-17.2-.9C167.6 96 96 167.6 96 256s71.6 160 160 160s160-71.6 160-160c0-5.8-.3-11.5-.9-17.2l-32.6-2.5c1 6.4 1.5 13 1.5 19.7c0 70.7-57.3 128-128 128s-128-57.3-128-128s57.3-128 128-128c6.7 0 13.3 .5 19.7 1.5l-2.5-32.6zM437.2 75.2l-.4-.4 .1 .3 .3 .1zm-56 33l-39.9 39.9-4.8-62 25.6-25.6 19.1 47.7zm-47.1 92.4l96.7 7.4 7.3 .6 5.2-5.2 48-48 17.2-17.2-22.5-9L412.3 99.7 382.9 26.1l-9-22.5L356.7 20.7l-48 48-5.2 5.2 .6 7.3 7.4 96.7-66.8 66.8L233.4 256 256 278.6l11.3-11.3 66.8-66.8zm29.8-29.8l39.9-39.9 47.7 19.1-25.6 25.6-62-4.8z" />
    </Icon>
);

export default BullseyeArrow;