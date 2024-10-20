
import { Icon } from "../../index";

/**
 * A component that renders the `text-slash` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/text-slash?s=thin text-slash}
 * @preview ![text-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/text-slash.svg)
 */
const TextSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M13 1.7C9.5-1 4.5-.4 1.7 3S-.4 11.5 3 14.3l624 496c3.5 2.7 8.5 2.2 11.2-1.3s2.2-8.5-1.3-11.2L13 1.7zM390 48l157.5 0c5.2 0 9 4.9 7.8 9.9l-11 44.1c-1.1 4.3 1.5 8.6 5.8 9.7s8.6-1.5 9.7-5.8l11-44.1c3.8-15.1-7.7-29.8-23.3-29.8L384.2 32l-.4 0L180.5 32c-9.8 0-18.5 6-22.2 14.8l13.6 10.7 .9-3.5c.9-3.6 4.1-6.1 7.8-6.1l192.8 0L332.8 184.6l13.5 10.7L390 48zM293.7 316.7L250 464l-82 0c-4.4 0-8 3.6-8 8s3.6 8 8 8l87.8 0 .4 0 87.8 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-77.3 0 40.5-136.6-13.5-10.7z" />
    </Icon>
);

export default TextSlash;