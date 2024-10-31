
import { Icon } from "../../index";

/**
 * A component that renders the `tent` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tent?s=thin tent}
 * @preview ![tent](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/tent.svg)
 */
const Tent: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M283.3 1.5c2.8-2 6.6-2 9.4 0L513.8 161.6c8.7 6.3 14.6 15.9 16.1 26.6l40.7 278c3.5 24.1-15.2 45.8-39.6 45.8L45 512c-24.4 0-43.1-21.7-39.6-45.8l40.7-278c1.6-10.7 7.4-20.3 16.1-26.6L283.3 1.5zM71.6 174.6c-5.2 3.8-8.7 9.6-9.7 16l-40.7 278C19.2 483 30.4 496 45 496l235 0 0-472.3L71.6 174.6zM426.6 496L296 255.5 296 496l130.6 0zm18.2 0l86.2 0c14.6 0 25.9-13 23.7-27.5L514 190.5c-.9-6.4-4.4-12.2-9.7-16L296 23.7 296 222 444.8 496z" />
    </Icon>
);

export default Tent;