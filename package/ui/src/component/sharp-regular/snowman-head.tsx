
import { Icon } from "../../index";

/**
 * A component that renders the `snowman-head` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/snowman-head?s=sharp-regular snowman-head}
 * @preview ![snowman-head](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/snowman-head.svg)
 */
const SnowmanHead: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M336 144l0 48-224 0 0-48 224 0zM64 48l0 144-40 0L0 192l0 48 24 0 24.7 0C28 272.3 16 310.8 16 352c0 64.3 29.2 121.8 75.1 160l265.8 0c45.9-38.2 75.1-95.7 75.1-160c0-41.2-12-79.7-32.7-112l24.7 0 24 0 0-48-24 0-40 0 0-144 0-48L336 0 112 0 64 0l0 48zm0 304c0-43.6 17.4-83.1 45.7-112l2.3 0 224 0 2.3 0c28.3 28.9 45.7 68.4 45.7 112c0 43.6-17.4 83.1-45.7 112l-228.5 0C81.4 435.1 64 395.6 64 352zm88-16a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm168-24a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM224 448l27.8-48.7c2.7-4.8 4.2-10.2 4.2-15.7c0-17.5-14.2-31.6-31.6-31.6l-.8 0c-17.5 0-31.6 14.2-31.6 31.6c0 5.5 1.4 10.9 4.2 15.7L224 448z" />
    </Icon>
);

export default SnowmanHead;