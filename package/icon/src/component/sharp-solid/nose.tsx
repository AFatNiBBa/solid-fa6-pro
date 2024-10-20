
import { Icon } from "../../index";

/**
 * A component that renders the `nose` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/nose?s=sharp-solid nose}
 * @preview ![nose](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/nose.svg)
 */
const Nose: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M448 368l0 144-96 0-67.2 0L208 448l-33.6 0c-25.6 0-46.4 20.8-46.4 46.4l0 17.6-16 0C50.8 512 1.1 462.9 0 401.9C1 345.3 44.3 298 100.9 292.4l44.7-4.5 15.9-1.6-3.2-31.8-15.9 1.6-44.7 4.5c-11.7 1.2-23 3.7-33.7 7.5L64 0 176 0 448 368z" />
    </Icon>
);

export default Nose;