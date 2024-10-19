
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `square-parking-slash` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/square-parking-slash?s=duotone square-parking-slash}
 * @preview ![square-parking-slash](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTI4OCAzNTJDMjg4IDM2OS42IDI3My42IDM4NCAyNTYgMzg0SDI1NkMyMzguNCAzODQgMjI0IDM2OS42IDIyNCAzNTJWMjcyLjIzNEw5NiAxNzEuOTFWNDE2Qzk2IDQ1MS4zNDYgMTI0LjY1NCA0ODAgMTYwIDQ4MEg0ODBDNDgwLjk3MiA0NzcuMTg1IDQ4MC45NjIgNDc3LjIxNCA0ODEuOTMzIDQ3NC4zOTlMMjg4IDMyMi4zOTZWMzUyWk00ODAgMzJIMTYwQzEzOC4zNzUgMzIgMTE5LjQ2MSA0Mi44MzYgMTA3Ljk0OSA1OS4yODlMMjI1LjcwOSAxNTEuNTg4QzIyOS40OTIgMTM4LjEzMyAyNDEuMzc5IDEyOCAyNTYgMTI4SDMzNkMzOTUuMTY2IDEyOCA0NDIuMTI1IDE4MS45OTggNDMwLjExMyAyNDMuMjNDNDI2LjQxMiAyNjIuMDk2IDQxNi41NzQgMjc4LjE1IDQwMy4zOTggMjkwLjg1N0w1NDQgNDAxLjA1OVY5NkM1NDQgNjAuNjU0IDUxNS4zNDggMzIgNDgwIDMyWk0zNjggMjI0QzM2OCAyMDYuMzc1IDM1My42MjUgMTkyIDMzNiAxOTJIMjg4VjIwMC40MDhMMzUyLjM0NCAyNTAuODRDMzYxLjUyNyAyNDUuMjA1IDM2OCAyMzUuNTI3IDM2OCAyMjRaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTYzMC44MTEgNDY5LjEwMkwzOC44MTQgNS4xMDlDMzQuNDA3IDEuNjcyIDI5LjE4OSAwIDI0LjAzMiAwQzE2LjkwNyAwIDkuODQ1IDMuMTU2IDUuMTI2IDkuMTg3Qy0zLjA2MSAxOS42MjUgLTEuMjQ5IDM0LjcxOCA5LjE4OSA0Mi44OUw2MDEuMTg2IDUwNi44ODNDNjExLjY4NiA1MTUuMDg2IDYyNi43NDkgNTEzLjIxMSA2MzQuODc0IDUwMi44MDVDNjQzLjA2MSA0OTIuMzY3IDY0MS4yNDkgNDc3LjI3NCA2MzAuODExIDQ2OS4xMDJaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function SquareParkingSlash(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path class={generic.secondary} d="M288 352C288 369.6 273.6 384 256 384H256C238.4 384 224 369.6 224 352V272.234L96 171.91V416C96 451.346 124.654 480 160 480H480C480.972 477.185 480.962 477.214 481.933 474.399L288 322.396V352ZM480 32H160C138.375 32 119.461 42.836 107.949 59.289L225.709 151.588C229.492 138.133 241.379 128 256 128H336C395.166 128 442.125 181.998 430.113 243.23C426.412 262.096 416.574 278.15 403.398 290.857L544 401.059V96C544 60.654 515.348 32 480 32ZM368 224C368 206.375 353.625 192 336 192H288V200.408L352.344 250.84C361.527 245.205 368 235.527 368 224Z" />
            <path d="M630.811 469.102L38.814 5.109C34.407 1.672 29.189 0 24.032 0C16.907 0 9.845 3.156 5.126 9.187C-3.061 19.625 -1.249 34.718 9.189 42.89L601.186 506.883C611.686 515.086 626.749 513.211 634.874 502.805C643.061 492.367 641.249 477.274 630.811 469.102Z" />
        </Icon>
    </>
}