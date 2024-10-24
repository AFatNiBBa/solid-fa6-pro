
import { Icon } from "../../index";

/**
 * A component that renders the `star-and-crescent` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/star-and-crescent?s=sharp-solid star-and-crescent}
 * @preview ![star-and-crescent](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/star-and-crescent.svg)
 */
const StarAndCrescent: typeof Icon = x => (
    <Icon {...x}>
        <path d="M328 48c44.1 0 85 13.7 118.6 37.1C399.8 32.9 331.7 0 256 0C114.6 0 0 114.6 0 256S114.6 512 256 512c75.7 0 143.8-32.9 190.6-85.1C413 450.3 372.1 464 328 464c-114.9 0-208-93.1-208-208s93.1-208 208-208zm98.3 157.8L384 120l-42.3 85.8L247 219.5l68.5 66.7-16.2 94.2L384 336l84.6 44.5-16.2-94.2L521 219.5l-94.6-13.8z" />
    </Icon>
);

export default StarAndCrescent;