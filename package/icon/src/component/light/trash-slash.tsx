
import { Icon } from "../../index";

/**
 * A component that renders the `trash-slash` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/trash-slash?s=light trash-slash}
 * @preview ![trash-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/trash-slash.svg)
 */
const TrashSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M509.7 96L528 96c8.8 0 16-7.2 16-16s-7.2-16-16-16l-16 0-32.1 0-47 0L407 22.6C398.2 8.5 382.8 0 366.3 0L273.7 0C257.2 0 241.8 8.5 233 22.6L207.1 64l-27 0 40.5 32 257 0L463.9 288.1l30.4 24L509.7 96zM452.9 442.5l-.6 7.8C451.1 467 437.2 480 420.4 480l-200.8 0c-16.8 0-30.7-13-31.9-29.7L171.2 220.1l-34-26.8 18.5 259.3c2.4 33.5 30.3 59.4 63.8 59.4l200.8 0c29.1 0 54-19.5 61.6-46.6l-29.1-23zM273.7 32l92.5 0c5.5 0 10.6 2.8 13.6 7.5L395.1 64 244.9 64l15.3-24.5c2.9-4.7 8.1-7.5 13.6-7.5zM25.9 3.4C19-2 8.9-.8 3.4 6.1S-.8 23.1 6.1 28.6l608 480c6.9 5.5 17 4.3 22.5-2.6s4.3-17-2.6-22.5L25.9 3.4z" />
    </Icon>
);

export default TrashSlash;