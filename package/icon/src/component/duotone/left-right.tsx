
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `left-right` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/left-right?s=duotone left-right}
 * @preview ![left-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTI1NiAyMDhIMzUyLjMzNlYxNTJDMzUyLjMzNiAxNDIuNDUzIDM1Ny45OTIgMTMzLjgxMiAzNjYuNzQyIDEzMFMzODUuNjggMTI3LjkyMiAzOTIuNjY0IDEzNC40MDZMNTA0LjY2NCAyMzguNDA2QzUxNC40NDUgMjQ3LjUgNTE0LjQ0NSAyNjQuNSA1MDQuNjY0IDI3My41OTRMMzkyLjY2NCAzNzcuNTk0QzM4NS42OCAzODQuMDc4IDM3NS40OTIgMzg1LjgxMiAzNjYuNzQyIDM4MlMzNTIuMzM2IDM2OS41NDcgMzUyLjMzNiAzNjBWMzA0SDI1NlYyMDhaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTI1NiAzMDRIMTU5LjY2NFYzNjBDMTU5LjY2NCAzNjkuNTQ3IDE1NC4wMDggMzc4LjE4OCAxNDUuMjU4IDM4MlMxMjYuMzIgMzg0LjA3OCAxMTkuMzM2IDM3Ny41OTRMNy4zMzYgMjczLjU5NEMtMi40NDUgMjY0LjUgLTIuNDQ1IDI0Ny41IDcuMzM2IDIzOC40MDZMMTE5LjMzNiAxMzQuNDA2QzEyNi4zMiAxMjcuOTIyIDEzNi41MDggMTI2LjE4OCAxNDUuMjU4IDEzMFMxNTkuNjY0IDE0Mi40NTMgMTU5LjY2NCAxNTJWMjA4SDI1NlYzMDRaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function LeftRight(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M256 208H352.336V152C352.336 142.453 357.992 133.812 366.742 130S385.68 127.922 392.664 134.406L504.664 238.406C514.445 247.5 514.445 264.5 504.664 273.594L392.664 377.594C385.68 384.078 375.492 385.812 366.742 382S352.336 369.547 352.336 360V304H256V208Z" />
            <path d="M256 304H159.664V360C159.664 369.547 154.008 378.188 145.258 382S126.32 384.078 119.336 377.594L7.336 273.594C-2.445 264.5 -2.445 247.5 7.336 238.406L119.336 134.406C126.32 127.922 136.508 126.188 145.258 130S159.664 142.453 159.664 152V208H256V304Z" />
        </Icon>
    </>
}