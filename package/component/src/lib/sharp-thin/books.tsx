
import { Icon } from "../../index";

/**
 * A component that renders the `books` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/books?s=sharp-thin books}
 * @preview ![books](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/books.svg)
 */
const Books: typeof Icon = x => (
    <Icon {...x}>
        <path d="M128 416l0 80L16 496l0-80 112 0zm0-304l0 288L16 400l0-288 112 0zm0-96l0 80L16 96l0-80 112 0zM144 0L128 0 16 0 0 0 0 16 0 96l0 8 0 8L0 400l0 8 0 8 0 80 0 16 16 0 112 0 16 0 112 0 16 0 0-16 0-80 0-8 0-8 0-229.1 59.7 222.6 2.1 7.7 2.1 7.7 23.5 87.5 4.1 15.5 15.5-4.1 116.7-31.3 15.5-4.1L506.9 457l-23.5-87.5-2.1-7.7-2.1-7.7L416.2 118.5l-2.1-7.7L412 103 388.6 15.5 384.4 0 369 4.1l-97 26L272 16l0-16L256 0 144 0zM272 46.7L373.1 19.6l23.5 87.5L279.9 138.4 272 109.1l0-5.1 0-8 0-49.3zM256 496l-112 0 0-80 112 0 0 80zm0-400L144 96l0-80 112 0 0 80zm0 304l-112 0 0-288 112 0 0 288zm118.7 92.4l-23.5-87.5L468 373.6l23.5 87.5L374.7 492.4zm-27.6-103L284 153.9l116.7-31.3 63.1 235.5L347.1 389.4z" />
    </Icon>
);

export default Books;