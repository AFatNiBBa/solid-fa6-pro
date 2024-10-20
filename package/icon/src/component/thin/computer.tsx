
import { Icon } from "../../index";

/**
 * A component that renders the `computer` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/computer?s=thin computer}
 * @preview ![computer](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/computer.svg)
 */
const Computer: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M64 48C37.5 48 16 69.5 16 96l0 224c0 26.5 21.5 48 48 48l114.2 0 5.8 0 80 0 5.8 0L384 368c26.5 0 48-21.5 48-48l0-224c0-26.5-21.5-48-48-48L64 48zM172.9 384L64 384c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 224c0 35.3-28.7 64-64 64l-108.9 0 26.7 80 74.2 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-68.9 0L296 480l-144 0-11.1 0L72 480c-4.4 0-8-3.6-8-8s3.6-8 8-8l74.2 0 26.7-80zm16.9 0l-26.7 80 121.8 0-26.7-80-68.5 0zM592 48l-64 0c-17.7 0-32 14.3-32 32l0 352c0 17.7 14.3 32 32 32l64 0c17.7 0 32-14.3 32-32l0-352c0-17.7-14.3-32-32-32zM528 32l64 0c26.5 0 48 21.5 48 48l0 352c0 26.5-21.5 48-48 48l-64 0c-26.5 0-48-21.5-48-48l0-352c0-26.5 21.5-48 48-48zm-8 104c0-4.4 3.6-8 8-8l64 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-64 0c-4.4 0-8-3.6-8-8zm8 56l64 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-64 0c-4.4 0-8-3.6-8-8s3.6-8 8-8zm0 144a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm32 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32zM72 96c-4.4 0-8 3.6-8 8l0 208c0 4.4 3.6 8 8 8l304 0c4.4 0 8-3.6 8-8l0-208c0-4.4-3.6-8-8-8L72 96zm-24 8c0-13.3 10.7-24 24-24l304 0c13.3 0 24 10.7 24 24l0 208c0 13.3-10.7 24-24 24L72 336c-13.3 0-24-10.7-24-24l0-208z" />
    </Icon>
);

export default Computer;