
import { Icon } from "../../index";

/**
 * A component that renders the `code-commit` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/code-commit?s=thin code-commit}
 * @preview ![code-commit](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/code-commit.svg)
 */
const CodeCommit: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M320 368a112 112 0 1 0 0-224 112 112 0 1 0 0 224zM447.8 264C443.6 331 388 384 320 384s-123.6-53-127.8-120L8 264c-4.4 0-8-3.6-8-8s3.6-8 8-8l184.2 0C196.4 181 252 128 320 128s123.6 53 127.8 120L632 248c4.4 0 8 3.6 8 8s-3.6 8-8 8l-184.2 0z" />
    </Icon>
);

export default CodeCommit;