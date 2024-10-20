
import { Icon } from "../../index";

/**
 * A component that renders the `pager` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pager?s=regular pager}
 * @preview ![pager](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/pager.svg)
 */
const Pager: typeof Icon = x => (
    <Icon {...x}>
        <path d="M448 112c8.8 0 16 7.2 16 16l0 256c0 8.8-7.2 16-16 16L64 400c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l384 0zM64 64C28.7 64 0 92.7 0 128L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64L64 64zM96 192l0 32c0 17.7 14.3 32 32 32l256 0c17.7 0 32-14.3 32-32l0-32c0-17.7-14.3-32-32-32l-256 0c-17.7 0-32 14.3-32 32zm16 112c-13.3 0-24 10.7-24 24s10.7 24 24 24l56 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-56 0zm136 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l48 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-48 0z" />
    </Icon>
);

export default Pager;