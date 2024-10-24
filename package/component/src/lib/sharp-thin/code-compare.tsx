
import { Icon } from "../../index";

/**
 * A component that renders the `code-compare` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/code-compare?s=sharp-thin code-compare}
 * @preview ![code-compare](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/code-compare.svg)
 */
const CodeCompare: typeof Icon = x => (
    <Icon {...x}>
        <path d="M480 16l0 96-96 0 0-96 96 0zM384 0L368 0l0 16 0 96 0 16 16 0 40 0 0 192c0 48.6-39.4 88-88 88l-91.3 0 72.7-66.1-10.8-11.8-88 80-6.5 5.9 6.5 5.9 88 80 10.8-11.8L244.7 424l91.3 0c57.4 0 104-46.6 104-104l0-192 40 0 16 0 0-16 0-96 0-16L480 0 384 0zM205.4 10.1L194.6 21.9 267.3 88 176 88C118.6 88 72 134.6 72 192l0 192-40 0-16 0 0 16 0 96 0 16 16 0 96 0 16 0 0-16 0-96 0-16-16 0-40 0 0-192c0-48.6 39.4-88 88-88l91.3 0-72.7 66.1 10.8 11.8 88-80 6.5-5.9-6.5-5.9-88-80zM32 400l96 0 0 96-96 0 0-96z" />
    </Icon>
);

export default CodeCompare;