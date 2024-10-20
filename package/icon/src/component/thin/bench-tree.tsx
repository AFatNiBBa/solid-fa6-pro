
import { Icon } from "../../index";

/**
 * A component that renders the `bench-tree` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bench-tree?s=thin bench-tree}
 * @preview ![bench-tree](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/bench-tree.svg)
 */
const BenchTree: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M591 108.6c-.9 6 1.5 11.9 6.4 15.5C613.6 135.7 624 154.7 624 176c0 35.3-28.7 64-64 64l-96 0c-35.3 0-64-28.7-64-64c0-21.3 10.4-40.3 26.6-51.9c4.9-3.5 7.4-9.5 6.4-15.5c-.6-4.1-1-8.3-1-12.6c0-44.2 35.8-80 80-80s80 35.8 80 80c0 4.3-.3 8.5-1 12.6zm15.8 2.5c.8-4.9 1.2-10 1.2-15.1c0-53-43-96-96-96s-96 43-96 96c0 5.1 .4 10.2 1.2 15.1C397.1 125.7 384 149.3 384 176c0 44.2 35.8 80 80 80l40 0 0 248c0 4.4 3.6 8 8 8s8-3.6 8-8l0-248 40 0c44.2 0 80-35.8 80-80c0-26.7-13.1-50.3-33.2-64.9zM64 208l256 0c8.8 0 16 7.2 16 16l0 64c0 8.8-7.2 16-16 16l-16 0L80 304l-16 0c-8.8 0-16-7.2-16-16l0-64c0-8.8 7.2-16 16-16zm8 112l0 64-24 0L8 384c-4.4 0-8 3.6-8 8s3.6 8 8 8l32 0 0 104c0 4.4 3.6 8 8 8s8-3.6 8-8l0-104 24 0 224 0 24 0 0 104c0 4.4 3.6 8 8 8s8-3.6 8-8l0-104 32 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-40 0-24 0 0-64 8 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32L64 192c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32l8 0zm224 0l0 64L88 384l0-64 208 0z" />
    </Icon>
);

export default BenchTree;