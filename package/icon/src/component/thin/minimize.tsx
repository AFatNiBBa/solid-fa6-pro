
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `minimize` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/minimize?s=thin minimize}
 * @preview ![minimize](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xNzguNTM1IDcxLjg5MUwxMzAuODg3IDExOS41NzRMMzcuNjU2IDI2LjM0NEMzNC41MzEgMjMuMjE5IDI5LjQ2OSAyMy4yMTkgMjYuMzQ0IDI2LjM0NFMyMy4yMTkgMzQuNTMxIDI2LjM0NCAzNy42NTZMMTE5LjU3OCAxMzAuODkxTDcyIDE3OC41QzU0LjEzMSAxOTYuMzkxIDY4LjczIDIyNCA5MC44MyAyMjRIMjA0LjAyNUMyMTUuMDU3IDIyNCAyMjQgMjE1LjA1MSAyMjQgMjA0LjAxMlY5MC43MzRDMjI0IDY4LjE0OCAxOTUuOTI2IDU0LjQ4OCAxNzguNTM1IDcxLjg5MVpNMjA4LjAyIDIwNC4wMTJDMjA4LjAyIDIwNi4yMTUgMjA2LjIyNyAyMDguMDA4IDIwNC4wMjUgMjA4LjAwOEg5MC44M0M4MS44MyAyMDguMDA4IDc2LjMxMiAxOTYuODA1IDgzLjMwMSAxODkuODEyTDE4OS44MzYgODMuMTk5QzE5Ny4wMiA3NiAyMDguMDIgODEuOTQ1IDIwOC4wMiA5MC43MzRWMjA0LjAxMlpNMzA3Ljk5IDIyNEg0MjEuMjdDNDQzLjg1NSAyMjQgNDU3LjUyIDE5NS45MjIgNDQwLjExNSAxNzguNTMxTDM5Mi40MjggMTMwLjg4M0w0ODUuNjU2IDM3LjY1NkM0ODguNzgxIDM0LjUzMSA0ODguNzgxIDI5LjQ2OSA0ODUuNjU2IDI2LjM0NFM0NzcuNDY5IDIzLjIxOSA0NzQuMzQ0IDI2LjM0NEwzODEuMTA5IDExOS41NzhMMzMzLjUgNzJDMzE1LjYwOSA1NC4xMzMgMjg4IDY4LjczNCAyODggOTAuODM2VjIwNC4wMjNDMjg4IDIxNS4wNTUgMjk2Ljk0OSAyMjQgMzA3Ljk5IDIyNFpNMzAzLjk5MiA5MC44MzZDMzAzLjk5MiA4MS44MjggMzE1LjE5NyA3Ni4zMTIgMzIyLjE5MSA4My4zMDVMNDI4LjgwNyAxODkuODM2QzQzNi4wMDIgMTk3LjAxNiA0MzAuMDU5IDIwOC4wMTYgNDIxLjI3IDIwOC4wMTZIMzA3Ljk5QzMwNS43ODcgMjA4LjAxNiAzMDMuOTkyIDIwNi4yMjcgMzAzLjk5MiAyMDQuMDIzVjkwLjgzNlpNMjA0LjAxIDI4OEg5MC43M0M2OC4xNDUgMjg4IDU0LjQ4IDMxNi4wNzggNzEuODg1IDMzMy40NjlMMTE5LjU3IDM4MS4xMTdMMjYuMzQ0IDQ3NC4zNDRDMjMuMjE5IDQ3Ny40NjkgMjMuMjE5IDQ4Mi41MzEgMjYuMzQ0IDQ4NS42NTZDMjcuOTA2IDQ4Ny4yMTkgMjkuOTM3IDQ4OCAzMiA0ODhTMzYuMDk0IDQ4Ny4yMTkgMzcuNjU2IDQ4NS42NTZMOTYgNDI3LjMxMkwxMzAuODg5IDM5Mi40MjZMMTc4LjUgNDQwQzE5Ni4zOTEgNDU3Ljg2NyAyMjQgNDQzLjI2NiAyMjQgNDIxLjE2OFYzMDcuOTc3QzIyNCAyOTYuOTQ1IDIxNS4wNTEgMjg4IDIwNC4wMSAyODhaTTIwOC4wMDggNDIxLjE2OEMyMDguMDA4IDQzMC4xNjggMTk2LjgwMyA0MzUuNjg4IDE4OS44MDkgNDI4LjY5NUw4My4xOTMgMzIyLjE2OEM3NS45OTggMzE0Ljk4NCA4MS45NDEgMzAzLjk4NCA5MC43MyAzMDMuOTg0SDIwNC4wMUMyMDYuMjEzIDMwMy45ODQgMjA4LjAwOCAzMDUuNzczIDIwOC4wMDggMzA3Ljk3N1Y0MjEuMTY4Wk0zOTIuNDI0IDM4MS4xMDlMNDQwIDMzMy41QzQ1Ny44NjkgMzE1LjYwOSA0NDMuMjcgMjg4IDQyMS4xNyAyODhIMzA3Ljk3NUMyOTYuOTQzIDI4OCAyODggMjk2Ljk0OSAyODggMzA3Ljk5MlY0MjEuMjY2QzI4OCA0NDMuODUyIDMxNi4wNzQgNDU3LjUxNiAzMzMuNDY1IDQ0MC4xMDlMMzgxLjExMyAzOTIuNDNMNDE2IDQyNy4zMTJMNDc0LjM0NCA0ODUuNjU2QzQ3NS45MDYgNDg3LjIxOSA0NzcuOTM3IDQ4OCA0ODAgNDg4UzQ4NC4wOTQgNDg3LjIxOSA0ODUuNjU2IDQ4NS42NTZDNDg4Ljc4MSA0ODIuNTMxIDQ4OC43ODEgNDc3LjQ2OSA0ODUuNjU2IDQ3NC4zNDRMMzkyLjQyNCAzODEuMTA5Wk0zMjIuMTY0IDQyOC44MDVDMzE0Ljk4IDQzNiAzMDMuOTggNDMwLjA1NSAzMDMuOTggNDIxLjI2NlYzMDcuOTkyQzMwMy45OCAzMDUuNzg5IDMwNS43NzMgMzAzLjk5MiAzMDcuOTc1IDMwMy45OTJINDIxLjE3QzQzMC4xNyAzMDMuOTkyIDQzNS42ODcgMzE1LjE5NSA0MjguNjk5IDMyMi4xOTFMMzIyLjE2NCA0MjguODA1WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Minimize(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M178.535 71.891L130.887 119.574L37.656 26.344C34.531 23.219 29.469 23.219 26.344 26.344S23.219 34.531 26.344 37.656L119.578 130.891L72 178.5C54.131 196.391 68.73 224 90.83 224H204.025C215.057 224 224 215.051 224 204.012V90.734C224 68.148 195.926 54.488 178.535 71.891ZM208.02 204.012C208.02 206.215 206.227 208.008 204.025 208.008H90.83C81.83 208.008 76.312 196.805 83.301 189.812L189.836 83.199C197.02 76 208.02 81.945 208.02 90.734V204.012ZM307.99 224H421.27C443.855 224 457.52 195.922 440.115 178.531L392.428 130.883L485.656 37.656C488.781 34.531 488.781 29.469 485.656 26.344S477.469 23.219 474.344 26.344L381.109 119.578L333.5 72C315.609 54.133 288 68.734 288 90.836V204.023C288 215.055 296.949 224 307.99 224ZM303.992 90.836C303.992 81.828 315.197 76.312 322.191 83.305L428.807 189.836C436.002 197.016 430.059 208.016 421.27 208.016H307.99C305.787 208.016 303.992 206.227 303.992 204.023V90.836ZM204.01 288H90.73C68.145 288 54.48 316.078 71.885 333.469L119.57 381.117L26.344 474.344C23.219 477.469 23.219 482.531 26.344 485.656C27.906 487.219 29.937 488 32 488S36.094 487.219 37.656 485.656L96 427.312L130.889 392.426L178.5 440C196.391 457.867 224 443.266 224 421.168V307.977C224 296.945 215.051 288 204.01 288ZM208.008 421.168C208.008 430.168 196.803 435.688 189.809 428.695L83.193 322.168C75.998 314.984 81.941 303.984 90.73 303.984H204.01C206.213 303.984 208.008 305.773 208.008 307.977V421.168ZM392.424 381.109L440 333.5C457.869 315.609 443.27 288 421.17 288H307.975C296.943 288 288 296.949 288 307.992V421.266C288 443.852 316.074 457.516 333.465 440.109L381.113 392.43L416 427.312L474.344 485.656C475.906 487.219 477.937 488 480 488S484.094 487.219 485.656 485.656C488.781 482.531 488.781 477.469 485.656 474.344L392.424 381.109ZM322.164 428.805C314.98 436 303.98 430.055 303.98 421.266V307.992C303.98 305.789 305.773 303.992 307.975 303.992H421.17C430.17 303.992 435.687 315.195 428.699 322.191L322.164 428.805Z" />
        </Icon>
    </>
}