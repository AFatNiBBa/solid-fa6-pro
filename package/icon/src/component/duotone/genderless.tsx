
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `genderless` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/genderless?s=duotone genderless}
 * @preview ![genderless](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTE5MiAzMjBDMTU2LjY5OSAzMjAgMTI4IDI5MS4yOTcgMTI4IDI1NkMxMjggMjIwLjY5OSAxNTYuNjk5IDE5MiAxOTIgMTkyUzI1NiAyMjAuNjk5IDI1NiAyNTZDMjU2IDI5MS4yOTcgMjI3LjMwMSAzMjAgMTkyIDMyMFoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNMTkyIDE2MEMyNDQuOTM2IDE2MCAyODggMjAzLjA2NCAyODggMjU2UzI0NC45MzYgMzUyIDE5MiAzNTJTOTYgMzA4LjkzNiA5NiAyNTZTMTM5LjA2NCAxNjAgMTkyIDE2ME0xOTIgODBDOTQuODMyIDgwIDE2IDE1OC44MyAxNiAyNTZDMTYgMzUzLjE2NiA5NC44MzIgNDMyIDE5MiA0MzJTMzY4IDM1My4xNjYgMzY4IDI1NkMzNjggMTU4LjgzIDI4OS4xNjggODAgMTkyIDgwTDE5MiA4MFoiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function Genderless(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path class={generic.secondary} d="M192 320C156.699 320 128 291.297 128 256C128 220.699 156.699 192 192 192S256 220.699 256 256C256 291.297 227.301 320 192 320Z" />
            <path d="M192 160C244.936 160 288 203.064 288 256S244.936 352 192 352S96 308.936 96 256S139.064 160 192 160M192 80C94.832 80 16 158.83 16 256C16 353.166 94.832 432 192 432S368 353.166 368 256C368 158.83 289.168 80 192 80L192 80Z" />
        </Icon>
    </>
}