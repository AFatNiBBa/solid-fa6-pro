
import { Icon } from "../../index";

/**
 * A component that renders the `billboard` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/billboard?s=thin billboard}
 * @preview ![billboard](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/billboard.svg)
 */
const Billboard: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M424 8c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 24L232 32l0-24c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 24L80 32C53.5 32 32 53.5 32 80l0 288L8 368c-4.4 0-8 3.6-8 8s3.6 8 8 8l24 0 16 0 264 0 0 120c0 4.4 3.6 8 8 8s8-3.6 8-8l0-120 264 0 16 0 24 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-24 0 0-288c0-26.5-21.5-48-48-48L424 32l0-24zM320 368L48 368 48 80c0-17.7 14.3-32 32-32l136 0 0 80-24 0c-4.4 0-8 3.6-8 8s3.6 8 8 8l32 0 32 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-24 0 0-80 176 0 0 80-24 0c-4.4 0-8 3.6-8 8s3.6 8 8 8l32 0 32 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-24 0 0-80 136 0c17.7 0 32 14.3 32 32l0 288-272 0z" />
    </Icon>
);

export default Billboard;