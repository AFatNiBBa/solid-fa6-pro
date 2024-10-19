
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `shekel-sign` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/shekel-sign?s=duotone shekel-sign}
 * @preview ![shekel-sign](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQ0OCA3MlYzNDRDNDQ4IDQxOSAzODcgNDgwIDMxMiA0ODBIMTYwQzEzNy45MDYgNDgwIDEyMCA0NjIuMDk0IDEyMCA0NDBWMjAwQzEyMCAxNzcuOTA2IDEzNy45MDYgMTYwIDE2MCAxNjBTMjAwIDE3Ny45MDYgMjAwIDIwMFY0MDBIMzEyQzM0Mi44NzUgNDAwIDM2OCAzNzQuODc1IDM2OCAzNDRWNzJDMzY4IDQ5LjkwNiAzODUuOTA2IDMyIDQwOCAzMlM0NDggNDkuOTA2IDQ0OCA3MloiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNNDAgNDgwQzE3LjkwNiA0ODAgMCA0NjIuMDk0IDAgNDQwVjcyQzAgNDkuOTA2IDE3LjkwNiAzMiA0MCAzMkgxOTJDMjY3IDMyIDMyOCA5My4wMTYgMzI4IDE2OFYzMTJDMzI4IDMzNC4wOTQgMzEwLjA5NCAzNTIgMjg4IDM1MlMyNDggMzM0LjA5NCAyNDggMzEyVjE2OEMyNDggMTM3LjEyNSAyMjIuODc1IDExMiAxOTIgMTEySDgwVjQ0MEM4MCA0NjIuMDk0IDYyLjA5NCA0ODAgNDAgNDgwWiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function ShekelSign(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path class={generic.secondary} d="M448 72V344C448 419 387 480 312 480H160C137.906 480 120 462.094 120 440V200C120 177.906 137.906 160 160 160S200 177.906 200 200V400H312C342.875 400 368 374.875 368 344V72C368 49.906 385.906 32 408 32S448 49.906 448 72Z" />
            <path d="M40 480C17.906 480 0 462.094 0 440V72C0 49.906 17.906 32 40 32H192C267 32 328 93.016 328 168V312C328 334.094 310.094 352 288 352S248 334.094 248 312V168C248 137.125 222.875 112 192 112H80V440C80 462.094 62.094 480 40 480Z" />
        </Icon>
    </>
}