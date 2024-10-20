
import { Icon, generic } from "../../index";

/**
 * A component that renders the `house-tree` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/house-tree?s=duotone house-tree}
 * @preview ![house-tree](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/house-tree.svg)
 */
const HouseTree: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M282.9 119.9l107.2 98.3c16.5 15.2 25.9 36.5 25.9 59L416 464c0 18-6 34.6-16 48l208 0c12.3 0 23.5-7 28.8-18.1s3.8-24.2-3.9-33.9L546.6 352l29.4 0c12.3 0 23.5-7 28.8-18.1s3.8-24.2-3.9-33.9L514.6 192l29.4 0c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128C432.4 3.1 424.2 0 416 0s-16.4 3.1-22.6 9.4L282.9 119.9z" />
        <path d="M0 464L0 277.1c0-13.5 5.6-26.3 15.6-35.4l144-132c18.4-16.8 46.5-16.8 64.9 0l144 132c9.9 9.1 15.6 21.9 15.6 35.4L384 464c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48zM168 272c-13.3 0-24 10.7-24 24l0 48c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24l-48 0z" />
    </Icon>
);

export default HouseTree;