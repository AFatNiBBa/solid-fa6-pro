
import { Icon } from "../../index";

/**
 * A component that renders the `binary-slash` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/binary-slash?s=thin binary-slash}
 * @preview ![binary-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/binary-slash.svg)
 */
const BinarySlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M432 224l72 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-64 0L440 8c0-2.6-1.3-5.1-3.4-6.6s-4.9-1.8-7.4-.9l-64 24c-4.1 1.6-6.2 6.2-4.7 10.3s6.2 6.2 10.3 4.7L424 19.5 424 208l-48.6 0 20.3 16 36.3 0zM304 64c0-35.3-28.7-64-64-64L208 0c-23.7 0-44.4 12.9-55.5 32.1l12.7 10.1C173.2 26.6 189.4 16 208 16l32 0c26.5 0 48 21.5 48 48l0 75 16 12.6L304 64zm32 384c0 35.3 28.7 64 64 64l32 0c23.7 0 44.4-12.9 55.5-32.1l-12.7-10.1c-8 15.5-24.1 26.1-42.7 26.1l-32 0c-26.5 0-48-21.5-48-48l0-75-16-12.6 0 87.6zM216 296c0-2.6-1.3-5.1-3.4-6.6s-4.9-1.8-7.4-.9l-64 24c-4.1 1.6-6.2 6.2-4.7 10.3s6.2 6.2 10.3 4.7L200 307.5 200 496l-64 0c-4.4 0-8 3.6-8 8s3.6 8 8 8l72 0 72 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-64 0 0-200zM13 1.7C9.5-1 4.5-.4 1.7 3S-.4 11.5 3 14.3l624 496c3.5 2.7 8.5 2.2 11.2-1.3s2.2-8.5-1.3-11.2L13 1.7z" />
    </Icon>
);

export default BinarySlash;