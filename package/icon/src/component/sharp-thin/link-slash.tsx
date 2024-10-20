
import { Icon } from "../../index";

/**
 * A component that renders the `link-slash` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/link-slash?s=sharp-thin link-slash}
 * @preview ![link-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/link-slash.svg)
 */
const LinkSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M16.2 5L9.9 0 0 12.5l6.3 5L623.8 507l6.3 5 9.9-12.5-6.3-5L16.2 5zm564 239.7c50-50 50-131 0-181s-131-50-181 0l-17 17 11.3 11.3 17-17c43.7-43.7 114.7-43.7 158.4 0s43.7 114.7 0 158.4l-71.2 71.2 12.6 10 69.9-69.9zM398.7 409.9L383.6 398c-37.5 10.3-79.4 .7-108.9-28.8c-22.8-22.8-33.7-53.1-32.7-83l-15.1-11.9c-4.6 37.8 7.5 77.2 36.5 106.2c36.6 36.6 89.8 46.4 135.3 29.4zM376.6 131.5C340 95 286.8 85.2 241.3 102.1L256.4 114c37.5-10.3 79.4-.7 108.9 28.8c22.8 22.8 33.7 53.1 32.7 83l15.1 11.9c4.6-37.8-7.5-77.2-36.5-106.2zM142.3 207.4l-12.6-10L59.8 267.3c-50 50-50 131 0 181s131 50 181 0l17-17L246.5 420l-17 17c-43.7 43.7-114.7 43.7-158.4 0s-43.7-114.7 0-158.4l71.2-71.2z" />
    </Icon>
);

export default LinkSlash;