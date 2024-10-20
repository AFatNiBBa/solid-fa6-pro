
import { Icon } from "../../index";

/**
 * A component that renders the `house-lock` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/house-lock?s=regular house-lock}
 * @preview ![house-lock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/house-lock.svg)
 */
const HouseLock: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M272.5 5.7c9-7.6 22.1-7.6 31.1 0L492.2 165.8c-16.3 5.5-31 14.7-43 26.5L288 55.5 112 204.8 112 432c0 17.7 14.3 32 32 32l48 0 0-152c0-22.1 17.9-40 40-40l112 0c22.1 0 40 17.9 40 40l0 152s0 0 0 0l0 16c0 11.7 3.1 22.6 8.6 32L144 512c-44.2 0-80-35.8-80-80l0-186.5L39.5 266.3c-10.1 8.6-25.3 7.3-33.8-2.8s-7.3-25.3 2.8-33.8l264-224zM240 464l96 0 0-144-96 0 0 144zM528 240c-17.7 0-32 14.3-32 32l0 48 64 0 0-48c0-17.7-14.3-32-32-32zm-80 32c0-44.2 35.8-80 80-80s80 35.8 80 80l0 48c17.7 0 32 14.3 32 32l0 128c0 17.7-14.3 32-32 32l-160 0c-17.7 0-32-14.3-32-32l0-128c0-17.7 14.3-32 32-32l0-48z" />
    </Icon>
);

export default HouseLock;