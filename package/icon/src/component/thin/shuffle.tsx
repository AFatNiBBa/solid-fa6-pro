
import { Icon } from "../../index";

/**
 * A component that renders the `shuffle` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shuffle?s=thin shuffle}
 * @preview ![shuffle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/shuffle.svg)
 */
const Shuffle: typeof Icon = x => (
    <Icon {...x}>
        <path d="M410.3 466.3c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0l88-88c3.1-3.1 3.1-8.2 0-11.3l-88-88c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3L484.7 376 344 376c-12.6 0-24.4-5.9-32-16L144 136c-7.6-10.1-19.4-16-32-16L8 120c-4.4 0-8 3.6-8 8s3.6 8 8 8l104 0c7.6 0 14.7 3.6 19.2 9.6l168 224C309.8 383.7 326.4 392 344 392l140.7 0-74.3 74.3zM144 376l60-80-10-13.3-62.8 83.7c-4.5 6-11.6 9.6-19.2 9.6L8 376c-4.4 0-8 3.6-8 8s3.6 8 8 8l104 0c12.6 0 24.4-5.9 32-16zM254 229.3L312 152c7.6-10.1 19.4-16 32-16l140.7 0-74.3 74.3c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0l88-88c3.1-3.1 3.1-8.2 0-11.3l-88-88c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3L484.7 120 344 120c-17.6 0-34.2 8.3-44.8 22.4L244 216l10 13.3z" />
    </Icon>
);

export default Shuffle;