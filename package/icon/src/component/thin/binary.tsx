
import { Icon } from "../../index";

/**
 * A component that renders the `binary` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/binary?s=thin binary}
 * @preview ![binary](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/binary.svg)
 */
const Binary: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M312 8c0-2.6-1.3-5.1-3.4-6.6s-4.9-1.8-7.4-.9l-64 24c-4.1 1.6-6.2 6.2-4.7 10.3s6.2 6.2 10.3 4.7L296 19.5 296 208l-64 0c-4.4 0-8 3.6-8 8s3.6 8 8 8l72 0 72 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-64 0L312 8zM88 296c0-2.6-1.3-5.1-3.4-6.6s-4.9-1.8-7.4-.9l-64 24c-4.1 1.6-6.2 6.2-4.7 10.3s6.2 6.2 10.3 4.7L72 307.5 72 496 8 496c-4.4 0-8 3.6-8 8s3.6 8 8 8l72 0 72 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-64 0 0-200zM16 64l0 96c0 35.3 28.7 64 64 64l32 0c35.3 0 64-28.7 64-64l0-96c0-35.3-28.7-64-64-64L80 0C44.7 0 16 28.7 16 64zM80 16l32 0c26.5 0 48 21.5 48 48l0 96c0 26.5-21.5 48-48 48l-32 0c-26.5 0-48-21.5-48-48l0-96c0-26.5 21.5-48 48-48zM272 288c-35.3 0-64 28.7-64 64l0 96c0 35.3 28.7 64 64 64l32 0c35.3 0 64-28.7 64-64l0-96c0-35.3-28.7-64-64-64l-32 0zm-48 64c0-26.5 21.5-48 48-48l32 0c26.5 0 48 21.5 48 48l0 96c0 26.5-21.5 48-48 48l-32 0c-26.5 0-48-21.5-48-48l0-96z" />
    </Icon>
);

export default Binary;