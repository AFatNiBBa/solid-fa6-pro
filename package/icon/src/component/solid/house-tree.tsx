
import { Icon } from "../../index";

/**
 * A component that renders the `house-tree` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/house-tree?s=solid house-tree}
 * @preview ![house-tree](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/house-tree.svg)
 */
const HouseTree: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M393.4 9.4c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8l-29.4 0L601 300c7.7 9.6 9.2 22.8 3.9 33.9S588.3 352 576 352l-29.4 0L633 460c7.7 9.6 9.2 22.8 3.9 33.9S620.3 512 608 512l-208 0c10-13.4 16-30 16-48l0-186.9c0-22.4-9.4-43.8-25.9-59L282.9 119.9 393.4 9.4zM0 277.1c0-13.5 5.6-26.3 15.6-35.4l144-132c18.4-16.8 46.5-16.8 64.9 0l144 132c9.9 9.1 15.6 21.9 15.6 35.4L384 464c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 277.1zM144 296l0 48c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24l-48 0c-13.3 0-24 10.7-24 24z" />
    </Icon>
);

export default HouseTree;