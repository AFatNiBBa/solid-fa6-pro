
import { Icon } from "../../index";

/**
 * A component that renders the `lock-hashtag` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lock-hashtag?s=thin lock-hashtag}
 * @preview ![lock-hashtag](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/lock-hashtag.svg)
 */
const LockHashtag: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M112 128l0 64 224 0 0-64c0-61.9-50.1-112-112-112s-112 50.1-112 112zM96 192l0-64C96 57.3 153.3 0 224 0s128 57.3 128 128l0 64 32 0c35.3 0 64 28.7 64 64l0 192c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 256c0-35.3 28.7-64 64-64l32 0zm0 16l-32 0c-26.5 0-48 21.5-48 48l0 192c0 26.5 21.5 48 48 48l320 0c26.5 0 48-21.5 48-48l0-192c0-26.5-21.5-48-48-48l-32 0-16 0-224 0-16 0zm80 40c4.4 0 8 3.6 8 8l0 40 80 0 0-40c0-4.4 3.6-8 8-8s8 3.6 8 8l0 40 40 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-40 0 0 80 40 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-40 0 0 40c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-40-80 0 0 40c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-40-40 0c-4.4 0-8-3.6-8-8s3.6-8 8-8l40 0 0-80-40 0c-4.4 0-8-3.6-8-8s3.6-8 8-8l40 0 0-40c0-4.4 3.6-8 8-8zm8 144l80 0 0-80-80 0 0 80z" />
    </Icon>
);

export default LockHashtag;