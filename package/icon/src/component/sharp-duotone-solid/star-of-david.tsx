
import { Icon, generic } from "../../index";

/**
 * A component that renders the `star-of-david` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/star-of-david?s=sharp-duotone-solid star-of-david}
 * @preview ![star-of-david](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/star-of-david.svg)
 */
const StarOfDavid: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M16 112l56 0 91.3 0-34.4 56-42.3 0 21.1 34.5c11 17.8 21.9 35.7 32.9 53.5c18 29.3 36 58.7 54 88l-65.7 0c-7-11.5-14.1-23-21.1-34.5c-11-17.8-21.9-35.7-32.9-53.5c-18-29.3-36-58.7-54-88L16 160l0-48zM163.3 400l65.7 0 27 44c9-14.7 18-29.4 27-44c11.5-18.7 22.9-37.3 34.4-56c18-29.3 36-58.7 54-88l32.9 53.5c-7 11.5-14.1 23-21.1 34.5l-34.4 56c-22.9 37.3-45.8 74.7-68.7 112l-48 0L163.3 400zm31.3-232c11.5-18.7 22.9-37.3 34.4-56l54 0 65.7 0 91.3 0 56 0 0 48-4.9 8-54 88c-11-17.8-21.9-35.7-32.9-53.5L425.4 168l-42.3 0-65.7 0-122.8 0z" />
        <path d="M16 400l56 0 211 0 34.4-56L86.6 344l21.1-34.5L74.9 256l-54 88L16 352l0 48zm91.8-197.5L140.6 256 256 68l27 44 65.7 0L280 0 232 0 107.8 202.5zM383.1 168l-65.7 0 108 176-42.3 0-34.4 56 91.3 0 56 0 0-48-4.9-8-108-176z" />
    </Icon>
);

export default StarOfDavid;