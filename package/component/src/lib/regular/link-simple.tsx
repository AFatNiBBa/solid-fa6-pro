
import { Icon } from "../../index";

/**
 * A component that renders the `link-simple` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/link-simple?s=regular link-simple}
 * @preview ![link-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/link-simple.svg)
 */
const LinkSimple: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M0 256C0 167.6 71.6 96 160 96l72 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-72 0C98.1 144 48 194.1 48 256s50.1 112 112 112l72 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-72 0C71.6 416 0 344.4 0 256zm576 0c0 88.4-71.6 160-160 160l-72 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l72 0c61.9 0 112-50.1 112-112s-50.1-112-112-112l-72 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l72 0c88.4 0 160 71.6 160 160zM184 232l208 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-208 0c-13.3 0-24-10.7-24-24s10.7-24 24-24z" />
    </Icon>
);

export default LinkSimple;