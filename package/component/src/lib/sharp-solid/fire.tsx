
import { Icon } from "../../index";

/**
 * A component that renders the `fire` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/fire?s=sharp-solid fire}
 * @preview ![fire](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/fire.svg)
 */
const Fire: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 276.5C0 144 176 0 176 0s64.5 59.3 88.6 89.4c11-14.4 47.4-42.9 47.4-42.9s136 113.4 136 229.9C448 404.2 348.2 512 224 512C98.4 512 0 404.1 0 276.5zM225.7 416c25.3 0 47.7-7 68.8-21c42.1-29.4 53.4-88.2 28.1-134.4c-2.8-5.6-5.6-11.2-9.8-16.8l-50.6 58.8s-81.4-103.6-87.1-110.6C133.1 243.8 112 273.2 112 306.8C112 375.4 162.6 416 225.7 416z" />
    </Icon>
);

export default Fire;