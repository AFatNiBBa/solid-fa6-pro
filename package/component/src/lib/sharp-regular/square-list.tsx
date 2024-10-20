
import { Icon } from "../../index";

/**
 * A component that renders the `square-list` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-list?s=sharp-regular square-list}
 * @preview ![square-list](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/square-list.svg)
 */
const SquareList: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M48 80l0 352 352 0 0-352L48 80zM0 32l48 0 352 0 48 0 0 48 0 352 0 48-48 0L48 480 0 480l0-48L0 80 0 32zM96 160a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm104-24l24 0 96 0 24 0 0 48-24 0-96 0-24 0 0-48zm0 96l24 0 96 0 24 0 0 48-24 0-96 0-24 0 0-48zm0 96l24 0 96 0 24 0 0 48-24 0-96 0-24 0 0-48zm-72-40a32 32 0 1 1 0-64 32 32 0 1 1 0 64zM96 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
    </Icon>
);

export default SquareList;