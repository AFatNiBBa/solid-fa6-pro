
import { Icon } from "../../index";

/**
 * A component that renders the `honey-pot` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/honey-pot?s=thin honey-pot}
 * @preview ![honey-pot](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/honey-pot.svg)
 */
const HoneyPot: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M376 48c13.3 0 24 10.7 24 24s-10.7 24-24 24l-56 0-80 0 0 16 80 0c61.9 0 112 50.1 112 112c0 5.4-.1 10.8-.4 16L16.4 240c-.2-5.2-.4-10.6-.4-16c0-61.9 50.1-112 112-112l0-16L72 96C58.7 96 48 85.3 48 72s10.7-24 24-24l80 0 0 92c0 15.5 12.5 28 28 28s28-12.5 28-28l0-92 168 0zm54.5 208c-2.9 30-9.7 56.6-18.7 80L36.3 336c-9-23.4-15.8-50-18.7-80l413 0zM405 352c-24.9 54.7-60.9 89-80.4 104.7c-5.9 4.8-13.9 7.3-23 7.3l-155.3 0c-9.1 0-17.1-2.5-23-7.3C103.9 441 67.9 406.7 43 352l362 0zM168 48l24 0 0 92c0 6.6-5.4 12-12 12s-12-5.4-12-12l0-92zM32 72c0 20.3 15.1 37 34.6 39.6C26.9 133.4 0 175.5 0 224C0 362.8 79.6 441.9 113.3 469.1c9.3 7.5 21.1 10.9 33.1 10.9l155.3 0c12 0 23.7-3.3 33.1-10.9C368.4 441.9 448 362.8 448 224c0-48.5-26.9-90.6-66.6-112.4C400.9 109 416 92.3 416 72c0-22.1-17.9-40-40-40L72 32C49.9 32 32 49.9 32 72z" />
    </Icon>
);

export default HoneyPot;