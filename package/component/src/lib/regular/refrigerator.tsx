
import { Icon } from "../../index";

/**
 * A component that renders the `refrigerator` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/refrigerator?s=regular refrigerator}
 * @preview ![refrigerator](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/refrigerator.svg)
 */
const Refrigerator: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M288 48c26.5 0 48 21.5 48 48l0 64-48 0 0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40L48 160l0-64c0-26.5 21.5-48 48-48l192 0zM240 208l0 136c0 13.3 10.7 24 24 24s24-10.7 24-24l0-136 48 0 0 240c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-240 192 0zM96 0C43 0 0 43 0 96L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-352c0-53-43-96-96-96L96 0z" />
    </Icon>
);

export default Refrigerator;