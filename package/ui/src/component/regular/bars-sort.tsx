
import { Icon } from "../../index";

/**
 * A component that renders the `bars-sort` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bars-sort?s=regular bars-sort}
 * @preview ![bars-sort](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/bars-sort.svg)
 */
const BarsSort: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 88C0 74.7 10.7 64 24 64l400 0c13.3 0 24 10.7 24 24s-10.7 24-24 24L24 112C10.7 112 0 101.3 0 88zM0 248c0-13.3 10.7-24 24-24l272 0c13.3 0 24 10.7 24 24s-10.7 24-24 24L24 272c-13.3 0-24-10.7-24-24zM192 408c0 13.3-10.7 24-24 24L24 432c-13.3 0-24-10.7-24-24s10.7-24 24-24l144 0c13.3 0 24 10.7 24 24z" />
    </Icon>
);

export default BarsSort;