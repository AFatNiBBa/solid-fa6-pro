
import { Icon, generic } from "../../index";

/**
 * A component that renders the `star-of-david` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/star-of-david?s=duotone star-of-david}
 * @preview ![star-of-david](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/star-of-david.svg)
 */
const StarOfDavid: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M16 149.4c0 6.9 1.9 13.7 5.5 19.6c17.8 29 35.6 58 53.4 87l32.9 53.5c7 11.5 14.1 23 21.1 34.5l65.7 0c-18-29.3-36-58.7-54-88l-32.9-53.5L86.6 168l42.3 0 34.4-56L53.4 112C32.8 112 16 128.8 16 149.4zM163.3 400l56.2 91.5c7.8 12.7 21.6 20.5 36.6 20.5s28.8-7.7 36.6-20.5c18.7-30.5 37.4-61 56.2-91.5l34.4-56c7-11.5 14.1-23 21.1-34.5L371.4 256c-18 29.3-36 58.7-54 88c-11.5 18.7-22.9 37.3-34.4 56c-9 14.7-18 29.4-27 44l-27-44-65.7 0zm31.3-232l122.8 0 65.7 0 42.3 0-21.1 34.5c11 17.8 21.9 35.7 32.9 53.5l53.4-87c3.6-5.9 5.5-12.7 5.5-19.6c0-20.7-16.8-37.4-37.4-37.4l-109.8 0L283 112l-54 0-34.4 56z" />
        <path d="M283 112L256 68 140.6 256l-32.9-53.5 111.7-182C227.2 7.7 241.1 0 256 0s28.8 7.7 36.6 20.5L348.7 112 283 112zm100.1 56L490.5 343c3.6 5.9 5.5 12.7 5.5 19.6c0 20.7-16.8 37.4-37.4 37.4l-109.8 0 34.4-56 42.3 0-108-176 65.7 0zM283 400L53.4 400C32.8 400 16 383.2 16 362.6c0-6.9 1.9-13.7 5.5-19.6l53.4-87 32.9 53.5L86.6 344l230.8 0L283 400z" />
    </Icon>
);

export default StarOfDavid;