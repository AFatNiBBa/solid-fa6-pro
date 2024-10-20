
import { Icon } from "../../index";

/**
 * A component that renders the `pedestal` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pedestal?s=regular pedestal}
 * @preview ![pedestal](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/pedestal.svg)
 */
const Pedestal: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M352 48L96 48c-8.8 0-16 7.2-16 16l0 368-48 0L32 64C32 28.7 60.7 0 96 0L352 0c35.3 0 64 28.7 64 64l0 368-48 0 0-368c0-8.8-7.2-16-16-16zM24 464l400 0c13.3 0 24 10.7 24 24s-10.7 24-24 24L24 512c-13.3 0-24-10.7-24-24s10.7-24 24-24zm96-352a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM304 88a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </Icon>
);

export default Pedestal;