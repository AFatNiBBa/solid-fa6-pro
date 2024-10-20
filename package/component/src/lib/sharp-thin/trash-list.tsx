
import { Icon } from "../../index";

/**
 * A component that renders the `trash-list` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/trash-list?s=sharp-thin trash-list}
 * @preview ![trash-list](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/trash-list.svg)
 */
const TrashList: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M160 0l96 0 4.4 0 2.4 3.8L300.4 64 416 64l0 16L0 80 0 64l115.6 0L153.2 3.8 155.6 0 160 0zM281.6 64l-30-48-87.1 0-30 48 147.1 0zM448 128l192 0 0 16-192 0 0-16zm0 128l160 0 0 16-160 0 0-16zm96 128l0 16-96 0 0-16 96 0zM64 504.7L31.3 112l16.1 0 32 384 257.3 0 32-384 16.1 0L352 504.7l-.6 7.3-7.4 0L72 512l-7.4 0-.6-7.3z" />
    </Icon>
);

export default TrashList;