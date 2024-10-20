
import { Icon } from "../../index";

/**
 * A component that renders the `text-slash` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/text-slash?s=sharp-thin text-slash}
 * @preview ![text-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/text-slash.svg)
 */
const TextSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M16.2 5L9.9 0 0 12.5l6.3 5L623.8 507l6.3 5 9.9-12.5-6.3-5L16.2 5zM348.8 187L390 48l167.8 0-16 64 16.5 0 17.5-70.1 2.5-9.9L568 32 384.2 32l-.4 0L168 32l-6.2 0-1.5 6.1c0 0 0 0 0 .1L174 49l.2-1 199 0-38 128.3L348.8 187zM304.7 335.7L291.2 325 250 464l-82 0-8 0 0 16 8 0 87.8 0 .4 0 87.8 0 8 0 0-16-8 0-77.3 0 38-128.3z" />
    </Icon>
);

export default TextSlash;