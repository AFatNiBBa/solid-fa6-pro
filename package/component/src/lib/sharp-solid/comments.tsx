
import { Icon } from "../../index";

/**
 * A component that renders the `comments` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/comments?s=sharp-solid comments}
 * @preview ![comments](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/comments.svg)
 */
const Comments: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M416 176c0 97.2-93.1 176-208 176c-36.2 0-70.3-7.8-99.9-21.6L0 352l37.6-75.1C13.9 248.3 0 213.5 0 176C0 78.8 93.1 0 208 0S416 78.8 416 176zm32 0c0-5.2-.2-10.4-.6-15.5C555.1 167.1 640 243.2 640 336c0 37.5-13.9 72.3-37.6 100.9L640 512 531.9 490.4C502.3 504.2 468.2 512 432 512c-95.6 0-176.2-54.6-200.5-129C348.9 372.9 448 288.3 448 176z" />
    </Icon>
);

export default Comments;