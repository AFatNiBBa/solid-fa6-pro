
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `user-slash` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/user-slash?s=regular user-slash}
 * @preview ![user-slash](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik02MzAuODEgNDY5LjEwMkwzNTIuODIgMjUxLjIyMUM0MDcuNTA1IDIzNi42NTggNDQ3Ljk5OSAxODcuMjcxIDQ0Ny45OTkgMTI4QzQ0Ny45OTkgNTcuMzA3IDM5MC42OTMgMCAzMTkuOTk5IDBDMjUwLjIwNCAwIDE5My42OTUgNTUuOTI0IDE5Mi4yNjMgMTI1LjM3OUwzOC44MTQgNS4xMDlDMzQuNDA3IDEuNjcyIDI5LjE4OSAwIDI0LjAzMiAwQzE2LjkwNyAwIDkuODQ1IDMuMTU2IDUuMTI2IDkuMTg4Qy0zLjA2MSAxOS42MjUgLTEuMjQ5IDM0LjcxNyA5LjE4OSA0Mi44ODlMNjAxLjE4NSA1MDYuODgzQzYxMS42ODUgNTE1LjA4NiA2MjYuNzQ3IDUxMy4yMTEgNjM0Ljg3MiA1MDIuODA1QzY0My4wNiA0OTIuMzY3IDY0MS4yNDcgNDc3LjI3MyA2MzAuODEgNDY5LjEwMlpNMjkwLjEzOCAyMDIuMDkyTDI1NS41OTkgMTc1LjAyQzI0NS45MDcgMTYxLjc4NSAyMzkuOTk5IDE0NS42MjMgMjM5Ljk5OSAxMjhDMjM5Ljk5OSA4My44ODcgMjc1Ljg4OCA0OCAzMTkuOTk5IDQ4UzM5OS45OTkgODMuODg3IDM5OS45OTkgMTI4QzM5OS45OTkgMTcyLjExMSAzNjQuMTExIDIwOCAzMTkuOTk5IDIwOEMzMDkuNDMxIDIwOCAyOTkuMzgyIDIwNS44MzIgMjkwLjEzOCAyMDIuMDkyWk0xNDQuOTkzIDQ2NEMxNTIuODk0IDQwMC45NDUgMjA2LjgzOSAzNTIgMjcxLjk5OSAzNTJIMzI1Ljc0N0wyNjQuOTYgMzA0LjM1NUMxNzEuMDQ4IDMwOC4wNzggOTUuOTk5IDM4NS4xNzQgOTUuOTk5IDQ4MEM5NS45OTkgNDk3LjY3MiAxMTAuMzI1IDUxMiAxMjcuOTk5IDUxMkg1MTEuOTk5QzUxNi45MzcgNTEyIDUyMS40NzYgNTEwLjY3NiA1MjUuNjUyIDUwOC42NzhMNDY4LjY0NiA0NjRIMTQ0Ljk5M1oiLz48L3N2Zz4=|width=32|height=32)
 */
export default function UserSlash(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M630.81 469.102L352.82 251.221C407.505 236.658 447.999 187.271 447.999 128C447.999 57.307 390.693 0 319.999 0C250.204 0 193.695 55.924 192.263 125.379L38.814 5.109C34.407 1.672 29.189 0 24.032 0C16.907 0 9.845 3.156 5.126 9.188C-3.061 19.625 -1.249 34.717 9.189 42.889L601.185 506.883C611.685 515.086 626.747 513.211 634.872 502.805C643.06 492.367 641.247 477.273 630.81 469.102ZM290.138 202.092L255.599 175.02C245.907 161.785 239.999 145.623 239.999 128C239.999 83.887 275.888 48 319.999 48S399.999 83.887 399.999 128C399.999 172.111 364.111 208 319.999 208C309.431 208 299.382 205.832 290.138 202.092ZM144.993 464C152.894 400.945 206.839 352 271.999 352H325.747L264.96 304.355C171.048 308.078 95.999 385.174 95.999 480C95.999 497.672 110.325 512 127.999 512H511.999C516.937 512 521.476 510.676 525.652 508.678L468.646 464H144.993Z" />
        </Icon>
    </>
}