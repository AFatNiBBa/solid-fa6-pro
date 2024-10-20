
import { Icon } from "../../index";

/**
 * A component that renders the `house-crack` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/house-crack?s=regular house-crack}
 * @preview ![house-crack](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/house-crack.svg)
 */
const HouseCrack: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M303.5 5.7c-9-7.6-22.1-7.6-31.1 0l-264 224c-10.1 8.6-11.3 23.7-2.8 33.8s23.7 11.3 33.8 2.8L64 245.5 64 432c0 44.2 35.8 80 80 80l288 0c44.2 0 80-35.8 80-80l0-186.5 24.5 20.8c10.1 8.6 25.3 7.3 33.8-2.8s7.3-25.3-2.8-33.8l-264-224zM112 432l0-227.2L288 55.5 464 204.8 464 432c0 17.7-14.3 32-32 32l-106.1 0L288 403.8l79.7-63.3c8.2-6.5 8-19.1-.4-25.3L252.2 229c-14.9-11.1-33.6 7.8-22.3 22.5L288 327.6l-84.8 67.3c-6.4 5.1-7.9 14.2-3.6 21.1L229.9 464 144 464c-17.7 0-32-14.3-32-32z" />
    </Icon>
);

export default HouseCrack;