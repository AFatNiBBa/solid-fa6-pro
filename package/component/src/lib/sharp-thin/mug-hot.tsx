
import { Icon } from "../../index";

/**
 * A component that renders the `mug-hot` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mug-hot?s=sharp-thin mug-hot}
 * @preview ![mug-hot](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/mug-hot.svg)
 */
const MugHot: typeof Icon = x => (
    <Icon {...x}>
        <path d="M80 8l0-8L64 0l0 8c0 27.3 5.1 45.2 13.6 57.9C86 78.4 97.1 85 106.7 90.6l.4 .3c9.9 5.9 18.2 10.9 24.4 20.1c6.2 9.2 10.9 23.5 10.9 49l0 8 16 0 0-8c0-27.3-5.1-45.2-13.6-57.9c-8.4-12.5-19.5-19.1-29.1-24.7l-.4-.3C105.4 71.2 97.1 66.2 90.9 57C84.7 47.8 80 33.5 80 8zM209.6 8l0-8-16 0 0 8c0 27.3 5.1 45.2 13.6 57.9c8.4 12.5 19.5 19.1 29.1 24.7l.4 .3c9.9 5.9 18.2 10.9 24.4 20.1c6.2 9.2 10.9 23.5 10.9 49l0 8 16 0 0-8c0-27.3-5.1-45.2-13.6-57.9C266 89.6 254.9 83 245.3 77.4l-.4-.3C235 71.2 226.7 66.2 220.5 57c-6.2-9.2-10.9-23.5-10.9-49zM344 208l24 0 0 288L16 496l0-288 328 0zm40 176l0-176 24 0c48.6 0 88 39.4 88 88s-39.4 88-88 88l-24 0zm0 112l0-96 24 0c57.4 0 104-46.6 104-104s-46.6-104-104-104l-24 0-16 0-24 0L16 192 0 192l0 16L0 496l0 16 16 0 352 0 16 0 0-16z" />
    </Icon>
);

export default MugHot;