
import { Icon, generic } from "../../index";

/**
 * A component that renders the `comments` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/comments?s=sharp-duotone-solid comments}
 * @preview ![comments](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/comments.svg)
 */
const Comments: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M231.5 383C348.9 372.9 448 288.3 448 176c0-5.2-.2-10.4-.6-15.5C555.1 167.1 640 243.2 640 336c0 37.5-13.9 72.3-37.6 100.9L640 512 531.9 490.4C502.3 504.2 468.2 512 432 512c-95.6 0-176.2-54.6-200.5-129z" />
        <path d="M208 352c114.9 0 208-78.8 208-176S322.9 0 208 0S0 78.8 0 176c0 37.5 13.9 72.3 37.6 100.9L0 352l108.1-21.6C137.7 344.2 171.8 352 208 352z" />
    </Icon>
);

export default Comments;