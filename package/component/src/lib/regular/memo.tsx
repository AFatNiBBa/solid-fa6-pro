
import { Icon } from "../../index";

/**
 * A component that renders the `memo` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/memo?s=regular memo}
 * @preview ![memo](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/memo.svg)
 */
const Memo: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0c8.8 0 16-7.2 16-16l0-384c0-8.8-7.2-16-16-16L64 48zM0 64C0 28.7 28.7 0 64 0L320 0c35.3 0 64 28.7 64 64l0 384c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zm120 64l144 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-144 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm0 96l144 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-144 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm0 96l48 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-48 0c-13.3 0-24-10.7-24-24s10.7-24 24-24z" />
    </Icon>
);

export default Memo;