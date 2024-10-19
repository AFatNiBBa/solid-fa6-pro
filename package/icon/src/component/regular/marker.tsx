
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `marker` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/marker?s=regular marker}
 * @preview ![marker](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00ODUuNTMgMjYuNUM0NjcuNzggOC44NzUgNDQ0LjY1NSAwIDQyMS41MyAwQzM5OC4yOCAwIDM3NS4xNTUgOC44NzUgMzU3LjUzIDI2LjVMMzIxLjAxNCA2My4wMTZMMjk1LjY1NSAzNy42NTZDMjc0LjUzIDE2LjUgMjM3LjU5MiAxNi41IDIxNi40NjcgMzcuNjU2TDExMS4wOTIgMTQzLjAzMUMxMDEuNzE3IDE1Mi40MDYgMTAxLjcxNyAxNjcuNTk0IDExMS4wOTIgMTc2Ljk2OUMxMTUuNzggMTgxLjY1NiAxMjEuOTA1IDE4NCAxMjguMDYxIDE4NFMxNDAuMzQyIDE4MS42NTYgMTQ1LjAzIDE3Ni45NjlMMjUwLjQwNSA3MS41OTRDMjUzLjUzIDY4LjQ2OSAyNTguNTkyIDY4LjQ2OSAyNjEuNzE3IDcxLjU5NEwyODcuMDc3IDk2Ljk1M0w5NC4wMyAyOTBDNDEuNTMgMzQyLjUgOC40MDUgNDExLjM3NSAwLjE1NSA0ODUuMTI1VjQ4NS4zNzVDLTEuNDcgNDk5Ljc1IDkuOTA1IDUxMiAyNC4wMyA1MTJDMjkuNjU1IDUxMiAxMzUuMDMgNTA1IDIyMi4wMyA0MThMNDg1LjUzIDE1NC41QzUyMC45MDUgMTE5LjEyNSA1MjAuOTA1IDYxLjg3NSA0ODUuNTMgMjYuNVpNMTg4LjAzIDM4NC4xMjVDMTUxLjAzIDQyMS4xMjUgMTA0LjAzIDQ0NyA1My4yOCA0NTguNzVDNjUuMDMgNDA4IDkwLjkwNSAzNjEgMTI3LjkwNSAzMjRMMjAxLjAzIDI1MC44NzVMMjYxLjE1NSAzMTFMMTg4LjAzIDM4NC4xMjVaTTQ1MS41MyAxMjAuNjI1TDI5NS4wMyAyNzcuMTI1TDIzNC45MDUgMjE3TDM5MS40MDUgNjAuNUMzOTkuNTMgNTIuMzc1IDQxMC4xNTUgNDggNDIxLjUzIDQ4UzQ0My41MyA1Mi4zNzUgNDUxLjUzIDYwLjVDNDU5LjY1NSA2OC41IDQ2NC4wMyA3OS4xMjUgNDY0LjAzIDkwLjVTNDU5LjY1NSAxMTIuNSA0NTEuNTMgMTIwLjYyNVoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Marker(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M485.53 26.5C467.78 8.875 444.655 0 421.53 0C398.28 0 375.155 8.875 357.53 26.5L321.014 63.016L295.655 37.656C274.53 16.5 237.592 16.5 216.467 37.656L111.092 143.031C101.717 152.406 101.717 167.594 111.092 176.969C115.78 181.656 121.905 184 128.061 184S140.342 181.656 145.03 176.969L250.405 71.594C253.53 68.469 258.592 68.469 261.717 71.594L287.077 96.953L94.03 290C41.53 342.5 8.405 411.375 0.155 485.125V485.375C-1.47 499.75 9.905 512 24.03 512C29.655 512 135.03 505 222.03 418L485.53 154.5C520.905 119.125 520.905 61.875 485.53 26.5ZM188.03 384.125C151.03 421.125 104.03 447 53.28 458.75C65.03 408 90.905 361 127.905 324L201.03 250.875L261.155 311L188.03 384.125ZM451.53 120.625L295.03 277.125L234.905 217L391.405 60.5C399.53 52.375 410.155 48 421.53 48S443.53 52.375 451.53 60.5C459.655 68.5 464.03 79.125 464.03 90.5S459.655 112.5 451.53 120.625Z" />
        </Icon>
    </>
}