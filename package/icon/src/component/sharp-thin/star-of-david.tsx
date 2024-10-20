
import { Icon } from "../../index";

/**
 * A component that renders the `star-of-david` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/star-of-david?s=sharp-thin star-of-david}
 * @preview ![star-of-david](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/star-of-david.svg)
 */
const StarOfDavid: typeof Icon = x => (
    <Icon {...x}>
        <path d="M486 368l10 16-18.9 0L336 384 265.4 496.9 256 512l-9.4-15.1L176 384 34.9 384 16 384l10-16L96 256 26 144 16 128l18.9 0L176 128 246.6 15.1 256 0l9.4 15.1L336 128l141.1 0 18.9 0-10 16L416 256l70 112zM406.6 240.9L467.1 144 346 144l60.6 96.9zM327.1 144l-142.3 0-70 112 70 112 142.3 0 70-112-70-112zm-10-16L256 30.2 194.9 128l122.3 0zM166 144L44.9 144l60.6 96.9L166 144zM105.4 271.1L44.9 368 166 368l-60.6-96.9zM346 368l121.1 0-60.6-96.9L346 368zM194.9 384L256 481.8 317.1 384l-122.3 0z" />
    </Icon>
);

export default StarOfDavid;