
import { Icon } from "../../index";

/**
 * A component that renders the `billboard` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/billboard?s=regular billboard}
 * @preview ![billboard](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/billboard.svg)
 */
const Billboard: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M440 24c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 8L248 32l0-8c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 8L80 32C53.5 32 32 53.5 32 80l0 272-8 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l56 0 216 0 0 88c0 13.3 10.7 24 24 24s24-10.7 24-24l0-88 216 0 56 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-8 0 0-272c0-26.5-21.5-48-48-48L440 32l0-8zM320 352L80 352 80 80l120 0 0 48-8 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l32 0 32 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-8 0 0-48 144 0 0 48-8 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l32 0 32 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-8 0 0-48 120 0 0 272-240 0z" />
    </Icon>
);

export default Billboard;