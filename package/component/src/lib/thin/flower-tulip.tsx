
import { Icon } from "../../index";

/**
 * A component that renders the `flower-tulip` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/flower-tulip?s=thin flower-tulip}
 * @preview ![flower-tulip](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/flower-tulip.svg)
 */
const FlowerTulip: typeof Icon = x => (
    <Icon {...x}>
        <path d="M262 2.7C260.5 1 258.3 0 256 0s-4.5 1-6 2.7L191 69.1 124.9 17.7c-2.4-1.9-5.7-2.2-8.4-.9s-4.5 4.1-4.5 7.2l0 112c0 66.3 53.7 120 120 120l16 0 0 166.6C220.2 362 159 320 88 320l-58.5 0C13.2 320 0 333.2 0 349.5C0 439.3 72.7 512 162.5 512l85.5 0 16 0 85.5 0C439.3 512 512 439.3 512 349.5c0-16.3-13.2-29.5-29.5-29.5L424 320c-71 0-132.2 42-160 102.6L264 256l16 0c66.3 0 120-53.7 120-120l0-112c0-3.1-1.7-5.8-4.5-7.2s-6-1-8.4 .9L321 69.1 262 2.7zM198 85.3L256 20l58 65.3c2.8 3.2 7.6 3.6 10.9 1l59.1-46 0 95.6c0 57.4-46.6 104-104 104l-48 0c-57.4 0-104-46.6-104-104l0-95.6 59.1 46c3.3 2.6 8.1 2.2 10.9-1zM88 336c88.4 0 160 71.6 160 160l-85.5 0C81.6 496 16 430.4 16 349.5c0-7.5 6.1-13.5 13.5-13.5L88 336zM264 496c0-88.4 71.6-160 160-160l58.5 0c7.5 0 13.5 6.1 13.5 13.5C496 430.4 430.4 496 349.5 496L264 496z" />
    </Icon>
);

export default FlowerTulip;