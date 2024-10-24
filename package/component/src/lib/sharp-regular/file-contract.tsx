
import { Icon } from "../../index";

/**
 * A component that renders the `file-contract` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-contract?s=sharp-regular file-contract}
 * @preview ![file-contract](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/file-contract.svg)
 */
const FileContract: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M48 48l176 0 0 112 112 0 0 304L48 464 48 48zM256 0L48 0 0 0 0 48 0 464l0 48 48 0 288 0 48 0 0-48 0-336L256 0zM96 96L80 96l0 32 16 0 80 0 16 0 0-32-16 0L96 96zm0 64l-16 0 0 32 16 0 80 0 16 0 0-32-16 0-80 0zm56 144l-11.9 0-3.4 11.4L116.1 384 96 384l-16 0 0 32 16 0 32 0 11.9 0 3.4-11.4L160 349l16.7 55.6 3.4 11.4 11.9 0 8 0 9.9 0 4.4-8.8L225.9 384l4.2 0 11.6 23.2 4.4 8.8 9.9 0 32 0 16 0 0-32-16 0-22.1 0-11.6-23.2-4.4-8.8-9.9 0-24 0-9.9 0-4.4 8.8-3 5.9-15.4-51.4L179.9 304 168 304l-16 0z" />
    </Icon>
);

export default FileContract;