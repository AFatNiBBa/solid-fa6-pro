
import { Icon } from "../../index";

/**
 * A component that renders the `list-check` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/list-check?s=sharp-light list-check}
 * @preview ![list-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/list-check.svg)
 */
const ListCheck: typeof Icon = x => (
    <Icon {...x}>
        <path d="M156.3 58.2L166.5 46 142 25.5 131.7 37.8 62.9 120.3 27.3 84.7 16 73.4-6.6 96 4.7 107.3l48 48 12.4 12.4 11.2-13.5 80-96zm0 160L166.5 206 142 185.5l-10.2 12.3L62.9 280.3 27.3 244.7 16 233.4-6.6 256 4.7 267.3l48 48 12.4 12.4 11.2-13.5 80-96zM192 80l0 32 16 0 288 0 16 0 0-32-16 0L208 80l-16 0zm0 160l0 32 16 0 288 0 16 0 0-32-16 0-288 0-16 0zM160 400l0 32 16 0 320 0 16 0 0-32-16 0-320 0-16 0zM96 416a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
    </Icon>
);

export default ListCheck;